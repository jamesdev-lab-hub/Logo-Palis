import { pageMetadata } from "@/lib/metadata";
import { faqGroups } from "@/config/faqs";
import { PageHero } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "FAQ: Logo Design, Websites, Pricing & Promotions",
  description:
    "Answers to common questions about Logo Palace services, getting started, pricing and custom quotes, revisions, website maintenance, and the discount promotion.",
  path: "/faq",
});

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Frequently asked <span className="text-accent-deep">questions.</span>
          </>
        }
        intro="Everything you need to know about working with Logo Palace. Can't find your answer? Send us a message and we'll help."
      >
        <nav aria-label="FAQ topics" className="flex flex-wrap gap-2 pt-2">
          {faqGroups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-full border-[1.5px] border-ink/15 bg-white px-4 py-2.5 text-[14px] font-semibold transition hover:border-ink"
            >
              {g.title}
            </a>
          ))}
        </nav>
      </PageHero>
      <div className="container-x flex flex-col gap-14 pb-10">
        {faqGroups.map((g) => (
          <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="grid scroll-mt-28 gap-6 lg:grid-cols-[0.6fr_1.4fr]">
            <h2 id={`${g.id}-h`} className="text-2xl font-bold">
              {g.title}
            </h2>
            <FaqList items={g.items} />
          </section>
        ))}
      </div>
      <CtaBand
        title="Still have a question?"
        text="We're happy to help. Send us a message and we'll reply by email."
        primary={{ href: "/contact", label: "Contact Us" }}
        secondary={{ href: "/pricing", label: "View Pricing" }}
      />
    </>
  );
}
