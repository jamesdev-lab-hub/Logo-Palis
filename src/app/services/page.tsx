import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { serviceCategories } from "@/config/services";
import { PageHero } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Services: Logo Design, Branding & Website Development",
  description:
    "Explore Logo Palace services: custom logo design, brand identity, WordPress and Shopify websites, e-commerce, UI/UX, social media graphics, packaging, and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Design and development for <span className="text-accent-deep">every stage</span> of your business.
          </>
        }
        intro="Whether you need your first logo, a full brand identity, or a website that brings in customers, we offer focused services with clear deliverables."
      >
        <nav aria-label="Service categories" className="flex flex-wrap gap-2 pt-2">
          {serviceCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border-[1.5px] border-ink/15 bg-white px-4 py-2.5 text-[14px] font-semibold transition hover:border-ink"
            >
              {c.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {serviceCategories.map((cat, ci) => {
        const dark = ci === 1;
        return (
          <section
            key={cat.id}
            id={cat.id}
            aria-labelledby={`${cat.id}-heading`}
            className={`scroll-mt-24 ${dark ? "bg-ink text-paper" : ""}`}
          >
            <div className="container-x py-20 md:py-24">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="flex max-w-2xl flex-col gap-4">
                  <p className={`eyebrow ${dark ? "text-accent" : "text-accent-deep"}`}>
                    {String(ci + 1).padStart(2, "0")} / {String(serviceCategories.length).padStart(2, "0")}
                  </p>
                  <h2 id={`${cat.id}-heading`} className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-bold">
                    {cat.title}
                  </h2>
                  <p className={`text-lg leading-relaxed ${dark ? "text-muted-dark" : "text-muted"}`}>{cat.intro}</p>
                </div>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cat.services.map((s) => {
                  const Icon = s.icon;
                  const contactHref = `/contact?service=${encodeURIComponent(s.title)}`;
                  return (
                    <article
                      key={s.slug}
                      id={s.slug}
                      className={`lift flex scroll-mt-28 flex-col gap-5 rounded-[26px] p-7 ${
                        dark ? "border border-paper/10 bg-ink-soft" : "border border-line bg-white"
                      }`}
                    >
                      <span
                        className={`grid h-14 w-14 place-items-center rounded-2xl ${dark ? "bg-accent text-ink" : "bg-paper"}`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h3 className="text-xl font-bold">{s.title}</h3>
                      <p className={`leading-relaxed ${dark ? "text-muted-dark" : "text-muted"}`}>{s.description}</p>
                      <ul className="flex flex-col gap-2 text-[15px]" aria-label={`${s.title} benefits`}>
                        {s.benefits.map((b) => (
                          <li key={b} className="flex gap-2.5">
                            <Check
                              className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-accent" : "text-accent-deep"}`}
                              aria-hidden="true"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-3">
                        <ButtonLink href={contactHref} variant={dark ? "accent" : "primary"} className="min-h-11 px-5">
                          Request a quote
                          <span className="sr-only"> for {s.title}</span>
                        </ButtonLink>
                        {s.pricing && (
                          <Link
                            href={`/pricing#${s.pricing}`}
                            className="inline-flex items-center gap-1.5 text-[15px] font-semibold underline-offset-4 hover:underline"
                          >
                            See pricing <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            <span className="sr-only"> for {s.title}</span>
                          </Link>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand
        title="Not sure which service you need?"
        text="Tell us what you're trying to achieve. We'll recommend the right mix of services and send a clear written quote."
        primary={{ href: "/contact", label: "Talk to us" }}
        secondary={{ href: "/pricing", label: "View Pricing" }}
      />
    </>
  );
}
