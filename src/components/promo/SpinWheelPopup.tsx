"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Check, Copy, Gift, X, ArrowRight } from "lucide-react";
import { discountSegments, promoConfig, type DiscountSegment } from "@/config/discounts";
import { generatePromoCode, pickSegmentIndex, readPromo, secureRandom, writePromo } from "@/lib/promo";
import { DiscountWheel } from "./DiscountWheel";

type Phase = "idle" | "spinning" | "result";
const SESSION_KEY = `${promoConfig.storageKey}-session`;

function isEligible(pathname: string): boolean {
  if (!promoConfig.enabled) return false;
  if (promoConfig.excludedPaths.some((p) => pathname.startsWith(p))) return false;
  try {
    if (window.sessionStorage.getItem(SESSION_KEY)) return false;
  } catch {
    /* ignore */
  }
  const stored = readPromo();
  if (!stored) return true;
  if (stored.status === "spun") return false;
  return Date.now() > stored.until;
}

export function SpinWheelPopup() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [rotation, setRotation] = useState(0);
  const [duration, setDuration] = useState<number>(promoConfig.spinDurationMs);
  const [result, setResult] = useState<{ segment: DiscountSegment; code: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const spinBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const scheduled = useRef(false);
  const pending = useRef<{ segment: DiscountSegment; code: string } | null>(null);
  const settleTimer = useRef<number | undefined>(undefined);
  const titleId = useId();
  const descId = useId();

  // Schedule the popup once per page load, after a short delay, on an eligible visit.
  useEffect(() => {
    if (scheduled.current || !isEligible(pathname)) return;
    scheduled.current = true;
    const t = window.setTimeout(() => {
      // Re-check: the visitor may have spun or dismissed in another tab during the delay.
      if (!isEligible(pathname)) {
        scheduled.current = false;
        return;
      }
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      lastFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    }, promoConfig.delayMs);
    return () => {
      window.clearTimeout(t);
      scheduled.current = false;
    };
  }, [pathname]);

  const close = useCallback(() => {
    // If the wheel already stopped, the result is saved. Otherwise, snooze the popup.
    if (phase !== "result") {
      writePromo({ status: "dismissed", until: Date.now() + promoConfig.snoozeDays * 86_400_000 });
    }
    window.clearTimeout(settleTimer.current);
    setOpen(false);
    lastFocus.current?.focus?.();
  }, [phase]);

  // Scroll lock, initial focus, Escape key, and focus trap while open.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    const prevPadding = root.style.paddingRight;
    const scrollbar = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;

    const focusTimer = window.setTimeout(() => spinBtnRef.current?.focus(), 30);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && (document.activeElement === first || !dialogRef.current.contains(document.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      root.style.paddingRight = prevPadding;
    };
  }, [open, close]);

  const settle = useCallback(() => {
    const won = pending.current;
    if (!won) return;
    pending.current = null;
    window.clearTimeout(settleTimer.current);
    setResult(won);
    setPhase("result");
    writePromo({ status: "spun", value: won.segment.value, code: won.code, at: Date.now() });
  }, []);

  // Move focus to the result heading once the wheel stops.
  useEffect(() => {
    if (phase === "result") {
      dialogRef.current?.querySelector<HTMLElement>("[data-result-heading]")?.focus();
    }
  }, [phase]);

  function spin() {
    if (phase !== "idle") return; // prevent multiple spins
    const index = pickSegmentIndex(discountSegments);
    const segment = discountSegments[index];
    const seg = 360 / discountSegments.length;
    const center = index * seg + seg / 2;
    const jitter = (secureRandom() - 0.5) * seg * 0.6; // land somewhere inside the segment, not on a line
    const target = (((-center + jitter) % 360) + 360) % 360;
    const current = ((rotation % 360) + 360) % 360;
    const delta = (target - current + 360) % 360;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ms = reduce ? 600 : promoConfig.spinDurationMs;
    const turns = reduce ? 1 : 6;

    pending.current = { segment, code: generatePromoCode(segment.value) };
    setDuration(ms);
    setPhase("spinning");
    setRotation(rotation + turns * 360 + delta);
    // Fallback in case transitionend doesn't fire (e.g. tab hidden).
    settleTimer.current = window.setTimeout(settle, ms + 500);
  }

  async function copyCode() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.code);
    } catch {
      const el = document.getElementById("promo-code-text");
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
        document.execCommand?.("copy");
      }
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  if (!open) return null;

  const claimHref = result
    ? `/contact?promo=${encodeURIComponent(result.code)}&discount=${result.segment.value}`
    : "/contact";

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div className="absolute inset-0" aria-hidden="true" onClick={close} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative w-full max-w-[920px] animate-rise overflow-hidden rounded-t-[28px] bg-paper shadow-2xl sm:rounded-[32px]"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close discount offer"
          className="absolute top-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-sm transition hover:bg-ink hover:text-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="grid md:grid-cols-[1.05fr_1fr]">
          {/* Wheel */}
          <div className="relative flex items-center justify-center bg-ink px-6 pt-12 pb-8 sm:px-10 md:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
            />
            <div className="relative aspect-square w-full max-w-[250px] sm:max-w-[340px]">
              {/* Pointer */}
              <svg
                viewBox="0 0 40 48"
                className="absolute -top-4 left-1/2 z-10 h-11 w-9 -translate-x-1/2 drop-shadow-[0_4px_6px_rgba(0,0,0,.35)]"
                aria-hidden="true"
              >
                <path d="M20 46 3 10a17 17 0 1 1 34 0z" fill="#F5F2EC" />
                <circle cx="20" cy="15" r="6" fill="#FF5A1F" />
              </svg>
              <div
                className="h-full w-full rounded-full shadow-[0_0_0_6px_rgba(245,242,236,.12),0_30px_60px_-20px_rgba(0,0,0,.6)]"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition:
                    phase === "spinning" ? `transform ${duration}ms cubic-bezier(0.12, 0.72, 0.08, 1)` : "none",
                }}
                onTransitionEnd={(e) => {
                  if (e.propertyName === "transform") settle();
                }}
              >
                <DiscountWheel segments={discountSegments} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 px-6 py-8 sm:px-10 md:py-12">
            <div aria-live="polite" className="sr-only">
              {phase === "spinning" ? "Spinning the wheel…" : ""}
              {phase === "result" && result ? `The wheel stopped on ${result.segment.label}.` : ""}
            </div>

            {phase !== "result" ? (
              <>
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-bold">
                  <Gift className="h-4 w-4 text-accent-deep" aria-hidden="true" /> Welcome offer
                </span>
                <h2 id={titleId} className="pr-10 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.05] font-bold">
                  Spin for a discount on your project.
                </h2>
                <p id={descId} className="leading-relaxed text-muted">
                  One free spin, no email required. The wheel picks a discount at random from the values shown.
                  You&apos;ll get a promotional request code to use when you ask for a quote.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    ref={spinBtnRef}
                    type="button"
                    onClick={spin}
                    disabled={phase === "spinning"}
                    className="inline-flex min-h-14 items-center justify-center rounded-full bg-accent px-8 font-display text-base font-bold tracking-tight text-ink transition hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-wait disabled:opacity-70"
                  >
                    {phase === "spinning" ? "Spinning…" : "SPIN TO WIN"}
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    disabled={phase === "spinning"}
                    className="inline-flex min-h-14 items-center justify-center rounded-full px-6 text-[15px] font-semibold text-muted underline-offset-4 hover:text-ink hover:underline disabled:opacity-50"
                  >
                    No Thanks
                  </button>
                </div>
              </>
            ) : (
              result && (
                <>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-lime px-3.5 py-1.5 text-[13px] font-bold">
                    <Check className="h-4 w-4" aria-hidden="true" /> The wheel has stopped
                  </span>
                  <h2
                    id={titleId}
                    tabIndex={-1}
                    data-result-heading
                    className="pr-10 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.05] font-bold outline-none"
                  >
                    Congratulations! You landed on{" "}
                    <span className="text-accent-deep">{result.segment.value}% OFF</span>
                  </h2>
                  <p id={descId} className="leading-relaxed text-muted">
                    Include your promotional request code when you request a quote. We&apos;ll confirm the discount
                    and which services it applies to before you purchase.
                  </p>

                  <div className="rounded-2xl border border-dashed border-ink/25 bg-white p-4">
                    <p className="text-[12px] font-bold tracking-[0.12em] text-muted uppercase">
                      Promotional request code
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <span
                        id="promo-code-text"
                        className="font-display text-lg font-bold tracking-wide whitespace-nowrap sm:text-2xl"
                      >
                        {result.code}
                      </span>
                      <button
                        type="button"
                        onClick={copyCode}
                        className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:brightness-125"
                      >
                        {copied ? (
                          <Check className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Copy className="h-4 w-4" aria-hidden="true" />
                        )}
                        {copied ? "Copied" : "Copy code"}
                      </button>
                    </div>
                    <p className="sr-only" aria-live="polite">
                      {copied ? "Code copied to clipboard" : ""}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={claimHref}
                      onClick={() => setOpen(false)}
                      className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-[15px] font-semibold text-white transition hover:-translate-y-0.5"
                    >
                      Claim My Discount <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link
                      href="/pricing"
                      onClick={() => setOpen(false)}
                      className="inline-flex min-h-14 items-center justify-center rounded-full border-[1.5px] border-ink/20 px-7 text-[15px] font-semibold transition hover:border-ink"
                    >
                      View Pricing
                    </Link>
                  </div>
                </>
              )
            )}

            <ul className="mt-1 grid gap-1 border-t border-line pt-4 text-[12.5px] leading-snug text-muted">
              {promoConfig.rules.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
