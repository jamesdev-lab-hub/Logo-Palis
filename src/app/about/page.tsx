import { Compass, Eye, HeartHandshake, Scale, Lightbulb, Users, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { PageHero, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { LogoMark } from "@/components/brand/Logo";

export const metadata = pageMetadata({
  title: "About Us: A San Francisco Branding & Web Design Agency",
  description:
    "Learn about Logo Palace, a San Francisco–based digital agency helping entrepreneurs, startups, and small businesses grow with thoughtful branding and websites.",
  path: "/about",
});

const values = [
  { icon: Eye, title: "Clarity", text: "Clear scope, clear pricing, and clear communication at every step." },
  { icon: Lightbulb, title: "Originality", text: "Designs created for your business — never pulled from a template library." },
  { icon: Scale, title: "Honesty", text: "We recommend what you need and tell you when you don't need something." },
  { icon: HeartHandshake, title: "Partnership", text: "Your feedback shapes the work. We build it with you, not just for you." },
];

const how = [
  { title: "We listen first", text: "Every project starts with understanding your business, your customers, and what success looks like for you." },
  { title: "We design with purpose", text: "Each color, font, and layout choice has a reason — and we explain it, so you can make confident decisions." },
  { title: "We keep you involved", text: "You review work at clear checkpoints, and your feedback is built into the process." },
  { title: "We deliver what we promise", text: "Deliverables are listed in your quote, so you know exactly what you'll receive." },
];

const reasons = [
  "Starting prices published openly on our website",
  "Written quotes before any work begins",
  "Branding and websites under one roof",
  "Direct contact with the people doing the work",
  "Responsive, mobile-friendly websites",
  "Support available after your project is delivered",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Logo Palace"
        title={
          <>
            Helping ambitious businesses <span className="text-accent-deep">look as good as they are.</span>
          </>
        }
        intro={`${siteConfig.name} is a digital agency based in San Francisco, California. We design logos, brand identities, and websites for individuals, entrepreneurs, startups, and small businesses across the United States.`}
      />

      <section aria-labelledby="mission-heading" className="bg-ink text-paper">
        <div className="container-x grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="eyebrow text-accent">Our mission</p>
            <h2 id="mission-heading" className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-bold">
              Make professional, effective design accessible to every business.
            </h2>
            <p className="text-lg leading-relaxed text-muted-dark">
              Great branding and a strong website shouldn&apos;t be reserved for companies with big-agency budgets. Our
              mission is to give growing businesses the kind of thoughtful, high-quality design that builds trust,
              attracts the right customers, and supports long-term growth — at prices that make sense.
            </p>
          </div>
          <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[420px]">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-paper/25" />
            <div className="absolute inset-[14%] rounded-full bg-accent" />
            <div className="absolute inset-[32%] grid place-items-center rounded-full bg-paper">
              <LogoMark className="h-20 w-20" />
            </div>
            {[
              ["Listen", "left-[-2%] top-[16%]"],
              ["Design", "right-[-4%] top-[42%]"],
              ["Launch", "left-[10%] bottom-[6%]"],
            ].map(([label, pos]) => (
              <span
                key={label}
                className={`absolute ${pos} rounded-full bg-white px-4 py-2 text-[14px] font-bold text-ink shadow-lg`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="philosophy-heading" className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            id="philosophy-heading"
            eyebrow="Design philosophy"
            title="Simple, memorable, and built to work."
          />
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted">
            <p>
              We believe the best design is the kind your customers understand instantly. A logo should be simple enough
              to remember and flexible enough to work everywhere — from a favicon to a storefront sign.
            </p>
            <p>
              A website should do more than look good. It should explain what you do, guide visitors to the next step,
              and load quickly on any device. That&apos;s why we pair visual design with clear structure, readable
              typography, and calls to action that make it easy to get in touch.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="border-y border-line bg-white">
        <div className="container-x py-24">
          <SectionHeading id="values-heading" eyebrow="Core values" title="What guides every project." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className={`flex flex-col gap-4 rounded-[26px] p-7 ${i === 0 ? "bg-accent" : "bg-paper"}`}
              >
                <Icon className="h-7 w-7" aria-hidden="true" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className={`leading-relaxed ${i === 0 ? "text-ink" : "text-muted"}`}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="how-heading" className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <SectionHeading id="how-heading" eyebrow="How we work" title="A collaborative, transparent process." />
            <ol className="flex flex-col gap-4">
              {how.map((h, i) => (
                <li key={h.title} className="flex gap-5 rounded-[22px] border border-line bg-white p-6">
                  <span className="font-display text-2xl font-bold text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-sans text-lg font-bold tracking-normal">{h.title}</h3>
                    <p className="leading-relaxed text-muted">{h.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-6 self-start rounded-[30px] bg-ink p-8 text-paper sm:p-10 lg:sticky lg:top-28">
            <Users className="h-8 w-8 text-accent" aria-hidden="true" />
            <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.08] font-bold">Why businesses choose Logo Palace</h2>
            <ul className="flex flex-col gap-3">
              {reasons.map((r) => (
                <li key={r} className="flex gap-3 text-muted-dark">
                  <Compass className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" /> {r}
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" variant="accent" className="mt-2 w-fit">
              Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's talk about your project."
        text="Share a few details and we'll reply with ideas, next steps, and a written quote."
        primary={{ href: "/contact", label: "Discuss a Project" }}
        secondary={{ href: "/work", label: "See Our Work" }}
      />
    </>
  );
}
