import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./Button";

export function CtaBand({
  title = "Ready to build a brand people remember?",
  text = "Tell us about your project and we'll reply with a clear plan and a written quote.",
  primary = { href: "/contact", label: "Get a Quote" },
  secondary = { href: "/pricing", label: "View Pricing" },
}: {
  title?: string;
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section aria-labelledby="cta-heading" className="container-x py-20 md:py-24">
      <div className="relative overflow-hidden rounded-[34px] bg-ink px-6 py-12 text-paper sm:px-12 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-accent/90 blur-[2px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 right-40 h-56 w-56 rounded-full border-2 border-dashed border-paper/20"
        />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-4">
            <h2 id="cta-heading" className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.04] font-bold">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-dark">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={primary.href} variant="accent" size="lg">
              {primary.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={secondary.href} variant="outline-light" size="lg">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
