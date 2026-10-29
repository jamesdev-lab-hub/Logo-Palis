import { Info, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { pricingDisclaimer, pricingGroups } from "@/config/pricing";
import { PageHero } from "@/components/ui/Section";
import { PricingCard } from "@/components/pricing/PricingCard";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Pricing: Logo Design from $49, Websites from $299",
  description:
    "Transparent starting prices in USD for logo design and website development packages from Logo Palace. Final pricing is confirmed in a written quote.",
  path: "/pricing",
});

const quoteSteps = [
  { n: "01", title: "Share your project", text: "Tell us what you need through the contact form — the service, your goals, budget range, and any examples you like." },
  { n: "02", title: "We review the details", text: "We look at your requirements and may ask a few follow-up questions so the quote reflects your real scope." },
  { n: "03", title: "Get a written quote", text: "You receive a quote listing the deliverables, revision rounds, payment terms, and price. No obligation." },
  { n: "04", title: "Approve and begin", text: "Once you approve the quote, we schedule your project and get started." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Clear starting prices. <span className="text-accent-deep">No surprises.</span>
          </>
        }
        intro="Choose a package as a starting point, or request a custom quote. Every project is confirmed in writing before work begins."
      >

      </PageHero>

      {pricingGroups.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          aria-labelledby={`${g.id}-heading`}
          className={`scroll-mt-24 ${gi === 1 ? "border-y border-line bg-white" : ""}`}
        >
          <div className="container-x py-20">
            <div className="flex max-w-2xl flex-col gap-3">
              <h2 id={`${g.id}-heading`} className="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05] font-bold">
                {g.title}
              </h2>
              <p className="text-lg text-muted">{g.description}</p>
            </div>
            <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
              {g.packages.map((p) => (
                <PricingCard key={p.id} pkg={p} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section aria-labelledby="extras-heading" className="container-x py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-[28px] bg-ink p-8 text-paper sm:p-10">
            <h2 id="extras-heading" className="text-2xl font-bold">
              What affects the final price?
            </h2>
            <ul className="flex flex-col gap-3 leading-relaxed text-muted-dark">
              <li>• The number of pages, products, or design pieces you need</li>
              <li>• Custom features, integrations, or functionality</li>
              <li>• Whether you provide written content and images</li>
              <li>• The number of revision rounds included in your quote</li>
              <li>• Third-party costs such as domains, hosting, premium plugins, apps, stock assets, or printing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 rounded-[28px] bg-lime p-8 sm:p-10">
            <h2 className="text-2xl font-bold">Have a promotional request code?</h2>
            <p className="leading-relaxed">
              If you received a code from our discount wheel, include it in your project inquiry. We&apos;ll confirm
              whether it applies to your selected services before you purchase. Promotions apply to eligible services
              only and cannot be combined unless explicitly permitted.
            </p>
            <ButtonLink href="/contact" className="mt-auto w-fit">
              Request a quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section aria-labelledby="quote-heading" className="container-x pb-8">
        <div className="flex max-w-2xl flex-col gap-3">
          <p className="eyebrow text-accent-deep">Custom quotes</p>
          <h2 id="quote-heading" className="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05] font-bold">
            Need something different? Here&apos;s how custom quotes work.
          </h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {quoteSteps.map((s) => (
            <li key={s.n} className="flex flex-col gap-3 rounded-[24px] border border-line bg-white p-6">
              <span className="font-display text-3xl font-bold text-accent-deep">{s.n}</span>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand
        title="Get a quote for your project."
        text="Tell us what you need and we'll reply with a written quote based on your scope."
        primary={{ href: "/contact", label: "Request a Custom Quote" }}
        secondary={{ href: "/services", label: "Explore Services" }}
      />
    </>
  );
}
