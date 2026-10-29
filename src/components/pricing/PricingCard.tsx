import { Check, Info } from "lucide-react";
import { formatPrice, type PricingPackage } from "@/config/pricing";
import { ButtonLink } from "@/components/ui/Button";

export function PricingCard({ pkg, compact = false }: { pkg: PricingPackage; compact?: boolean }) {
  const dark = !!pkg.featured;
  const href = `/contact?service=${encodeURIComponent(pkg.service)}&package=${encodeURIComponent(pkg.name)}`;
  return (
    <article
      className={`relative flex flex-col gap-6 rounded-[28px] p-7 ${
        dark ? "bg-ink text-paper ring-2 ring-accent" : "border border-line bg-white"
      }`}
    >
      {pkg.featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-[12px] font-bold text-ink">
          Most popular
        </span>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">{pkg.name}</h3>
        <p className={`text-[15px] leading-relaxed ${dark ? "text-muted-dark" : "text-muted"}`}>{pkg.summary}</p>
      </div>
      <div>
        <span className={`text-[13px] font-semibold ${dark ? "text-muted-dark" : "text-muted"}`}>Starting at</span>
        <p className="font-display text-5xl font-bold tracking-tight">{formatPrice(pkg.price)}</p>
      </div>
      {!compact && (
        <>
          <p className={`rounded-2xl px-4 py-3 text-[14px] ${dark ? "bg-paper/[0.07]" : "bg-paper"}`}>
            <span className="font-bold">Best for: </span>
            {pkg.bestFor}
          </p>
          <div>
            <h4 className="mb-3 font-sans text-[13px] font-bold tracking-[0.1em] uppercase">What&apos;s included</h4>
            <ul className="flex flex-col gap-2.5 text-[15px]">
              {pkg.deliverables.map((d) => (
                <li key={d} className="flex gap-2.5">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-accent" : "text-accent-deep"}`} aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          {pkg.limitations.length > 0 && (
            <div>
              <h4 className="mb-2 font-sans text-[13px] font-bold tracking-[0.1em] uppercase">Good to know</h4>
              <ul className={`flex flex-col gap-2 text-[14px] ${dark ? "text-muted-dark" : "text-muted"}`}>
                {pkg.limitations.map((l) => (
                  <li key={l} className="flex gap-2.5">
                    <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
      <ButtonLink href={href} variant={dark ? "accent" : "primary"} className="mt-auto w-full">
        Get started with {pkg.name}
      </ButtonLink>
    </article>
  );
}
