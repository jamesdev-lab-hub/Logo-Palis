"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert, CircleCheck, LoaderCircle, Mail, Send, Tag, X } from "lucide-react";
import { budgetOptions, contactSchema, type ContactData, type ContactInput } from "@/lib/contact-schema";
import { serviceOptions } from "@/config/services";
import { siteConfig } from "@/config/site";
import { promoConfig } from "@/config/discounts";
import type { StoredPromo } from "@/lib/promo";

type Status =
  | { kind: "idle" }
  | { kind: "sent" }
  | { kind: "not_configured"; mailto: string }
  | { kind: "error"; message: string };

const field =
  "w-full rounded-2xl border-[1.5px] border-ink/15 bg-white px-4 py-3.5 text-[16px] text-ink transition placeholder:text-ink/40 focus:border-ink focus:outline-none focus:ring-4 focus:ring-ink/10 aria-[invalid=true]:border-red-600";

function buildMailto(d: ContactData) {
  const lines = [
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Service: ${d.service}`,
    d.packageName ? `Package: ${d.packageName}` : "",
    `Estimated budget: ${d.budget}`,
    d.promoCode ? `Promotional request code: ${d.promoCode}` : "",
    "",
    d.details,
  ].filter((l, i) => l !== "" || i === 6);
  const body = lines.join("\n").slice(0, 1800);
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Project inquiry: ${d.service}`)}&body=${encodeURIComponent(body)}`;
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-[14px] font-medium text-red-700">
      <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" /> {message}
    </p>
  );
}

const noopSubscribe = () => () => {};

/** Reads browser-only prefill data (URL query + stored promo) without causing hydration mismatches. */
function getPrefillSnapshot(): string {
  let stored = "";
  try {
    stored = window.localStorage.getItem(promoConfig.storageKey) ?? "";
  } catch {
    /* ignore */
  }
  return `${window.location.search}\u0000${stored}`;
}

type Prefill = { service?: string; packageName?: string; promo?: { code: string; value?: string } };

function parsePrefill(snapshot: string): Prefill {
  if (!snapshot) return {};
  const [search, stored] = snapshot.split("\u0000");
  const params = new URLSearchParams(search);
  const out: Prefill = {};
  const service = params.get("service");
  if (service && serviceOptions.includes(service)) out.service = service;
  const pkg = params.get("package");
  if (pkg) out.packageName = pkg.slice(0, 120);
  const code = params.get("promo");
  if (code && /^[A-Z0-9-]{4,40}$/i.test(code)) {
    out.promo = { code: code.toUpperCase(), value: params.get("discount") ?? undefined };
  } else if (stored) {
    try {
      const p = JSON.parse(stored) as StoredPromo;
      if (p.status === "spun") out.promo = { code: p.code, value: String(p.value) };
    } catch {
      /* ignore */
    }
  }
  return out;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [removed, setRemoved] = useState<{ pkg?: boolean; promo?: boolean }>({});

  // Prefill from links like /contact?service=Custom%20Logo%20Design&package=Standard%20Logo&promo=LP20-ABC123
  const snapshot = useSyncExternalStore(noopSubscribe, getPrefillSnapshot, () => "");
  const prefill = useMemo(() => parsePrefill(snapshot), [snapshot]);
  const packageName = removed.pkg ? undefined : prefill.packageName;
  const promo = removed.promo ? undefined : prefill.promo;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput, unknown, ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", service: "", details: "", company: "" },
  });

  useEffect(() => {
    if (prefill.service) setValue("service", prefill.service);
  }, [prefill.service, setValue]);

  async function onSubmit(data: ContactData) {
    setStatus({ kind: "idle" });
    const payload: ContactData = { ...data, packageName, promoCode: promo?.code };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; code?: string };
      if (res.ok && json.ok) {
        setStatus({ kind: "sent" });
        reset();
        return;
      }
      if (json.code === "not_configured") {
        setStatus({ kind: "not_configured", mailto: buildMailto(payload) });
        return;
      }
      setStatus({
        kind: "error",
        message: "Something went wrong and your message was not sent. Please try again or email us directly.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "We couldn't reach the server, so your message was not sent. Please check your connection or email us directly.",
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-[28px] border border-line bg-white p-8">
        <CircleCheck className="h-10 w-10 text-green-700" aria-hidden="true" />
        <h2 className="text-2xl font-bold">Thanks — your inquiry was sent.</h2>
        <p className="leading-relaxed text-muted">
          We&apos;ve received your message and will reply to the email address you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="rounded-full border-[1.5px] border-ink/20 px-5 py-3 font-semibold hover:border-ink"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-labelledby="form-heading"
      className="flex flex-col gap-6 rounded-[28px] border border-line bg-white p-6 sm:p-9"
    >
      <div className="flex flex-col gap-2">
        <h2 id="form-heading" className="text-2xl font-bold">
          Project inquiry
        </h2>
        <p className="text-[15px] text-muted">Fields marked with * are required.</p>
      </div>

      {(packageName || promo) && (
        <div className="flex flex-wrap gap-2">
          {packageName && (
            <span className="inline-flex items-center gap-2 rounded-full bg-paper px-3.5 py-2 text-[14px] font-semibold">
              Package: {packageName}
              <button
                type="button"
                onClick={() => setRemoved((r) => ({ ...r, pkg: true }))}
                aria-label={`Remove package ${packageName}`}
                className="rounded-full p-0.5 hover:bg-ink/10"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </span>
          )}
          {promo && (
            <span className="inline-flex items-center gap-2 rounded-full bg-lime px-3.5 py-2 text-[14px] font-semibold">
              <Tag className="h-4 w-4" aria-hidden="true" />
              Promotional request code: {promo.code}
              {promo.value ? ` (${promo.value}% off, subject to confirmation)` : ""}
              <button
                type="button"
                onClick={() => setRemoved((r) => ({ ...r, promo: true }))}
                aria-label="Remove promotional request code"
                className="rounded-full p-0.5 hover:bg-ink/10"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </span>
          )}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[15px] font-semibold">
            Full name *
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={field}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          <ErrorText id="name-error" message={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[15px] font-semibold">
            Email address *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className={field}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <ErrorText id="email-error" message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-[15px] font-semibold">
            Service required *
          </label>
          <select
            id="service"
            className={field}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            {...register("service")}
          >
            <option value="">Choose a service…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <ErrorText id="service-error" message={errors.service?.message} />
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-[15px] font-semibold">
            Estimated budget (USD) *
          </label>
          <select
            id="budget"
            className={field}
            defaultValue=""
            aria-invalid={!!errors.budget}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            {...register("budget")}
          >
            <option value="" disabled>
              Choose a range…
            </option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <ErrorText id="budget-error" message={errors.budget?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="details" className="mb-2 block text-[15px] font-semibold">
          Project details *
        </label>
        <textarea
          id="details"
          rows={6}
          placeholder="Tell us about your business, what you need, and any examples or deadlines we should know about."
          className={`${field} resize-y`}
          aria-invalid={!!errors.details}
          aria-describedby={errors.details ? "details-error" : undefined}
          {...register("details")}
        />
        <ErrorText id="details-error" message={errors.details?.message} />
      </div>

      {/* Honeypot (hidden from people and assistive tech) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company website</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-ink"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
          />
          <label htmlFor="consent" className="text-[15px] leading-relaxed text-muted">
            I agree that {siteConfig.name} may use the information I provide to respond to my inquiry, as described in
            the{" "}
            <Link href="/privacy-policy" className="font-semibold text-ink underline underline-offset-2">
              Privacy Policy
            </Link>
            . *
          </label>
        </div>
        <ErrorText id="consent-error" message={errors.consent?.message} />
      </div>

      {status.kind === "not_configured" && (
        <div role="alert" className="flex flex-col gap-3 rounded-2xl border-[1.5px] border-amber-500 bg-amber-50 p-5">
          <p className="flex items-start gap-2 font-semibold text-ink">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
            Your message has not been sent. Our online form isn&apos;t connected to email yet.
          </p>
          <p className="text-[15px] leading-relaxed text-muted">
            Please email us directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-ink underline">
              {siteConfig.email}
            </a>
            . We&apos;ve prepared an email with your details — just open it and press send.
          </p>
          <a
            href={status.mailto}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-[15px] font-semibold text-white"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> Open email with my message
          </a>
        </div>
      )}

      {status.kind === "error" && (
        <div role="alert" className="flex items-start gap-2 rounded-2xl border-[1.5px] border-red-600 bg-red-50 p-5 text-[15px]">
          <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700" aria-hidden="true" />
          <p>
            {status.message}{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
              {siteConfig.email}
            </a>
          </p>
        </div>
      )}

      {Object.keys(errors).length > 0 && (
        <p role="alert" className="text-[15px] font-medium text-red-700">
          Please fix the highlighted fields and try again.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-ink px-8 text-base font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60 sm:w-fit"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Send inquiry <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
