import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { InstagramIcon } from "@/components/ui/Instagram";
import { GitHubIcon } from "@/components/ui/GithubIcon";
import { legalNav, mainNav, siteConfig } from "@/config/site";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-x grid gap-12 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div className="flex flex-col gap-5">
          <Logo dark size="lg" />
          <p className="max-w-xs text-[15px] leading-relaxed text-muted-dark">{siteConfig.shortDescription}</p>
        </div>

        <nav aria-labelledby="footer-quick">
          <h2 id="footer-quick" className="mb-4 font-sans text-sm font-bold tracking-[0.12em] text-paper uppercase">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-3 text-[15px]">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-dark transition-colors hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-legal">
          <h2 id="footer-legal" className="mb-4 font-sans text-sm font-bold tracking-[0.12em] text-paper uppercase">
            Legal
          </h2>
          <ul className="flex flex-col gap-3 text-[15px]">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-dark transition-colors hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-sans text-sm font-bold tracking-[0.12em] text-paper uppercase">Contact</h2>
          <ul className="flex flex-col gap-3 text-[15px]">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2.5 break-all text-muted-dark transition-colors hover:text-paper"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /> {siteConfig.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5 text-muted-dark">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> {siteConfig.location}
            </li>
          </ul>
          <ul className="mt-6 flex gap-4">
          <li>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-muted-dark transition-colors hover:text-paper"
              >
                <FacebookIcon className="h-6 w-6 shrink-0" /> 
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-muted-dark transition-colors hover:text-paper"
              >
                <InstagramIcon className="h-6 w-6 shrink-0" /> 
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-muted-dark transition-colors hover:text-paper"
              >
                <GitHubIcon className="h-6 w-6 shrink-0" /> 
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-x flex flex-col gap-2 py-6 text-[13px] text-muted-dark sm:flex-row sm:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <p>Designed and built in San Francisco, California.</p>
        </div>
      </div>
    </footer>
  );
}
