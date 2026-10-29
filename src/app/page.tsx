import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Sparkles,
  MessagesSquare,
  MonitorSmartphone,
  Target,
  LifeBuoy,
  Check,
} from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { allServices } from "@/config/services";
import { portfolioProjects } from "@/config/portfolio";
import { formatPrice, pricingGroups, pricingDisclaimer } from "@/config/pricing";
import { homeFaqs } from "@/config/faqs";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { ProjectCard } from "@/components/work/ProjectCard";
import { LogoMark } from "@/components/brand/Logo";

export const metadata = pageMetadata({
  title: "Logo Palace | Logo Design & Website Development Agency in San Francisco",
  description:
    "Logo Palace designs custom logos, brand identities, and conversion-focused websites for US entrepreneurs, startups, and small businesses. Logos from $49, websites from $299.",
  path: "/",
});

const featuredSlugs = [
  "custom-logo-design",
  "brand-identity-design",
  "custom-website-design",
  "shopify-store-design",
  "ui-ux-design",
  "social-media-graphics",
];

const reasons = [
  { icon: FileText, title: "Clear written quotes", text: "You see the scope and price in writing before any work starts. No surprise invoices." },
  { icon: Sparkles, title: "Original design", text: "Every logo and layout starts from your business and your customers — not a recycled template." },
  { icon: MessagesSquare, title: "Direct communication", text: "You talk with the people designing and building your project, so feedback moves quickly." },
  { icon: MonitorSmartphone, title: "Mobile-first builds", text: "Websites are designed to look sharp and load quickly on phones, tablets, and desktops." },
  { icon: Target, title: "Built to convert", text: "Clear messaging, strong calls to action, and simple paths that turn visitors into inquiries." },
  { icon: LifeBuoy, title: "Help after launch", text: "Need updates or changes later? Maintenance and support are available whenever you need them." },
];

const steps = [
  { n: "01", title: "Discover", text: "Tell us about your business, audience, and goals. We ask the right questions and agree on the scope." },
  { n: "02", title: "Design", text: "We explore concepts and create designs tailored to your brand and your customers." },
  { n: "03", title: "Refine", text: "You review the work and share feedback. We refine it through the revision rounds in your quote." },
  { n: "04", title: "Launch", text: "We deliver your final files or launch your website, then stay available for support." },
];

const expectations = [
  "A single point of contact from first message to final delivery",
  "Designs presented with the reasoning behind them",
  "Final files in the formats you actually need",
  "A walkthrough of how to manage your website after launch",
  "Honest advice — including when you don't need an add-on",
  "Respect for your budget and your timeline",
];

export default function HomePage() {
  const featured = featuredSlugs
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const featuredWork = portfolioProjects.filter((p) => p.featured).slice(0, 3);
  const marquee = allServices.slice(0, 12).map((s) => s.title);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x grid items-center gap-14 pt-12 pb-20 md:pt-20 lg:grid-cols-[1.15fr_1fr] lg:pb-24">
          <div className="flex animate-rise flex-col gap-7">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" /> Branding &amp; web design studio · San Francisco
            </p>
            <h1 className="text-[clamp(2.6rem,6vw,2.6rem)] leading-[0.98] font-bold">
              Logos and websites that make your business{" "}
              <span className="whitespace-nowrap">
              <span className="relative inline-block text-accent-deep">
                unforgettable
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                >
                  <path d="M3 12C80 3 210 2 297 9" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              .
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              {siteConfig.name} helps entrepreneurs, startups, and growing US businesses look professional and win more
              customers — with custom logos, brand identities, and conversion-focused websites.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="lg">
                Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/services" variant="outline" size="lg">
                Explore Our Services
              </ButtonLink>
            </div>
            <dl className="mt-2 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6">
              <div>
                <dt className="text-[13px] text-muted">Logos from</dt>
                <dd className="font-display text-xl font-bold sm:text-2xl">{formatPrice(49)}</dd>
              </div>
              <div>
                <dt className="text-[13px] text-muted">Websites from</dt>
                <dd className="font-display text-xl font-bold sm:text-2xl">{formatPrice(299)}</dd>
              </div>
              <div>
                <dt className="text-[13px] text-muted">Quotes</dt>
                <dd className="font-display text-xl font-bold sm:text-2xl">Written</dd>
              </div>
            </dl>
          </div>

          {/* Hero visual */}
          <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-[6%] animate-spin-slow rounded-full border-2 border-dashed border-ink/20" />
            <div className="absolute inset-[16%] rounded-[44px] bg-ink shadow-[0_40px_80px_-30px_rgba(17,18,20,.6)] rotate-[-6deg]" />
            <div className="absolute inset-[16%] flex flex-col justify-between rounded-[44px] bg-accent p-[8%] rotate-[4deg]">
              <div className="flex items-start justify-between">
                <LogoMark className="h-16 w-16 sm:h-20 sm:w-20" />
                <span className="rounded-full bg-ink px-3 py-1.5 text-[12px] font-bold text-paper">Brand kit</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-display text-[clamp(1.6rem,4vw,2.6rem)] leading-none font-bold text-ink">
                  Aa Bb Cc
                </span>
                <div className="flex gap-2">
                  {["#111214", "#F5F2EC", "#C7F36B", "#FFC93C"].map((c) => (
                    <span key={c} className="h-8 w-8 rounded-full ring-2 ring-ink/15" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute top-[4%] -left-[2%] animate-float rounded-2xl bg-white px-4 py-3 text-[14px] font-bold shadow-[0_18px_40px_-18px_rgba(17,18,20,.45)]">
              ✦ Logo design
            </div>
            <div
              className="absolute top-[44%] -right-[3%] animate-float rounded-2xl bg-lime px-4 py-3 text-[14px] font-bold shadow-[0_18px_40px_-18px_rgba(17,18,20,.45)]"
              style={{ animationDelay: "1.2s" }}
            >
              Websites →
            </div>
            <div
              className="absolute bottom-[4%] left-[6%] flex animate-float items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-[0_18px_40px_-18px_rgba(17,18,20,.45)]"
              style={{ animationDelay: "2.4s" }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-paper">
                <Check className="h-5 w-5" />
              </span>
              <span className="text-[13px] leading-tight font-semibold">
                Mobile-ready
                <br />
                <span className="font-normal text-muted">responsive layouts</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-ink bg-ink py-5 text-paper" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10 font-display text-xl font-semibold whitespace-nowrap">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Services overview */}
      <section aria-labelledby="services-heading" className="container-x py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="What we do"
            title="Everything your brand needs to look the part."
            intro="From your very first logo to a full website, we design the pieces that help customers recognize, trust, and choose you."
          />
          <ButtonLink href="/services" variant="outline" className="shrink-0">
            All services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => {
            const Icon = s.icon;
            const highlight = i === 0;
            return (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className={`group lift flex flex-col gap-5 rounded-[26px] p-7 ${highlight ? "bg-ink text-paper" : "border border-line bg-white"}`}
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${highlight ? "bg-accent text-ink" : "bg-paper text-ink"}`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className={`leading-relaxed ${highlight ? "text-muted-dark" : "text-muted"}`}>{s.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[15px] font-semibold">
                  Learn more
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why choose */}
      <section aria-labelledby="why-heading" className="bg-ink text-paper">
        <div className="container-x py-24">
          <SectionHeading
            id="why-heading"
            dark
            eyebrow="Why Logo Palace"
            title="Agency-quality design, without the agency runaround."
            intro="We keep things simple: clear scope, honest pricing, thoughtful design, and people who actually reply."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col gap-4 bg-ink p-8">
                <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="leading-relaxed text-muted-dark">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-heading" className="container-x py-24">
        <SectionHeading
          id="process-heading"
          eyebrow="How it works"
          title="A simple process from first message to launch."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`flex flex-col gap-4 rounded-[26px] p-7 ${i === 3 ? "bg-accent" : "border border-line bg-white"}`}
            >
              <span className="font-display text-5xl font-bold tracking-tight">{s.n}</span>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className={`leading-relaxed ${i === 3 ? "text-ink" : "text-muted"}`}>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Featured work */}
      <section aria-labelledby="work-heading" className="border-y border-line bg-white">
        <div className="container-x py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="work-heading"
              eyebrow="Featured work"
              title="A look at our design style."
              intro="These concept projects show the kind of branding, websites, and stores we create. Real client case studies will be added here as projects launch."
            />
            <ButtonLink href="/work" variant="outline" className="shrink-0">
              View all work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section aria-labelledby="pricing-heading" className="container-x py-24">
        <SectionHeading
          id="pricing-heading"
          eyebrow="Pricing"
          title="Straightforward starting prices."
          intro={pricingDisclaimer}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pricingGroups.map((g, gi) => (
            <div
              key={g.id}
              className={`flex flex-col gap-6 rounded-[30px] p-8 ${gi === 0 ? "border border-line bg-white" : "bg-ink text-paper"}`}
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">{g.title}</h3>
                <p className={gi === 0 ? "text-muted" : "text-muted-dark"}>{g.description}</p>
              </div>
              <ul className="flex flex-col">
                {g.packages.map((p) => (
                  <li
                    key={p.id}
                    className={`flex items-center justify-between gap-4 border-t py-4 ${gi === 0 ? "border-line" : "border-paper/10"}`}
                  >
                    <span className="font-semibold">{p.name}</span>
                    <span className="font-display text-2xl font-bold">
                      <span className={`mr-1.5 font-sans text-[13px] font-medium ${gi === 0 ? "text-muted" : "text-muted-dark"}`}>
                        from
                      </span>
                      {formatPrice(p.price)}
                    </span>
                  </li>
                ))}
              </ul>
              <ButtonLink href={`/pricing#${g.id}`} variant={gi === 0 ? "primary" : "accent"} className="mt-auto w-fit">
                See what&apos;s included <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits (shown instead of testimonials until genuine reviews are available) */}
      <section aria-labelledby="expect-heading" className="container-x pb-24">
        <div className="grid gap-10 rounded-[34px] bg-lime p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading
            id="expect-heading"
            eyebrow="What to expect"
            title="Working with us, in plain terms."
            intro="No jargon and no pressure — just a clear, collaborative way of getting great design done."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {expectations.map((e) => (
              <li key={e} className="flex gap-3 rounded-2xl bg-white/80 p-4 text-[15px] font-medium">
                <Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" /> {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="bg-ink text-paper">
        <div className="container-x grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading id="faq-heading" dark eyebrow="FAQ" title="Questions, answered." />
            <ButtonLink href="/faq" variant="outline-light" className="w-fit">
              See all FAQs <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <FaqList items={homeFaqs} dark />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
