import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/ui/Section";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = pageMetadata({
  title: "Contact Us: Request a Logo or Website Quote",
  description:
    "Contact Logo Palace in San Francisco to discuss your logo, branding, or website project. Send a project inquiry or email jamesbuilds.dev@gmail.com.",
  path: "/contact",
});

const next = [
  "We review your inquiry and project details.",
  "We reply by email with questions or a recommended approach.",
  "You receive a written quote. Work starts only after you approve it.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about <span className="text-accent-deep">your project.</span>
          </>
        }
        intro="Whether you need a new logo, a complete brand, or a website that brings in customers, we'd love to hear about it. Share a few details and we'll get back to you by email."
      />
      <section aria-label="Contact details and inquiry form" className="container-x pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="flex flex-col gap-5 self-start">
            <div className="flex flex-col gap-5 rounded-[28px] bg-ink p-8 text-paper">
              <h2 className="text-2xl font-bold">Get in touch</h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-4 rounded-2xl bg-paper/[0.06] p-4 transition hover:bg-paper/[0.12]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-ink">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[13px] text-muted-dark">Email us</span>
                  <span className="font-semibold break-all">{siteConfig.email}</span>
                </span>
              </a>
              <div className="flex items-start gap-4 rounded-2xl bg-paper/[0.06] p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-paper text-ink">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[13px] text-muted-dark">Location</span>
                  <span className="font-semibold">{siteConfig.location}</span>
                </span>
              </div>
              {/* <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl bg-paper/[0.06] p-4 transition hover:bg-paper/[0.12]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#1877F2] text-white">
                  <FacebookIcon className="h-5 w-5" />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="text-[13px] text-muted-dark">Follow us</span>
                  <span className="font-semibold">Logo Palace on Facebook</span>
                </span>
                <ArrowUpRight className="h-4 w-4 self-center" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a> */}
            </div>
            <div className="rounded-[28px] border border-line bg-white p-8">
              <h2 className="text-xl font-bold">What happens next</h2>
              <ol className="mt-4 flex flex-col gap-3">
                {next.map((n, i) => (
                  <li key={n} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-paper text-[13px] font-bold text-ink">
                      {i + 1}
                    </span>
                    {n}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
