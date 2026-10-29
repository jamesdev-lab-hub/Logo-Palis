import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { promoConfig } from "@/config/discounts";
import { LegalPage, OwnerNote, type LegalSection } from "@/components/legal/LegalPage";
import { ResetPreferences } from "@/components/legal/ResetPreferences";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: "Learn which cookies and browser storage the Logo Palace website uses and how to manage your preferences.",
  path: "/cookie-policy",
});

const sections: LegalSection[] = [
  {
    id: "what-are-cookies",
    title: "What cookies are",
    body: (
      <p>
        Cookies are small text files that websites place on your device. Similar technologies, such as your
        browser&apos;s local storage and session storage, let a website remember information between pages or visits.
        This policy explains which of these technologies our website uses.
      </p>
    ),
  },
  {
    id: "essential",
    title: "Essential cookies and storage",
    body: (
      <>
        <p>
          The {siteConfig.name} website does not currently set its own cookies. To keep the site working smoothly, it
          stores the following items in your browser:
        </p>
        <ul>
          <li>
            <strong>{promoConfig.storageKey}</strong> (local storage) — remembers whether you dismissed or used the
            discount wheel, and the promotional request code you received, so the popup doesn&apos;t keep appearing.
          </li>
          <li>
            <strong>{promoConfig.storageKey}-session</strong> (session storage) — prevents the discount popup from
            appearing more than once in the same browsing session. It is cleared when you close the browser tab.
          </li>
        </ul>
        <p>This information stays on your device and is not sent to us.</p>
      </>
    ),
  },
  {
    id: "analytics",
    title: "Analytics and functional cookies",
    body: (
      <>
        <p>
          We do not currently use analytics, advertising, or tracking cookies. If we add them in the future, we will
          update this policy and, where required, ask for your consent before they are set.
        </p>
        <OwnerNote>If you enable analytics, list each cookie here and add a consent banner if required.</OwnerNote>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party cookies",
    body: (
      <p>
        Our hosting provider may process technical data to deliver and secure the site. When you click our Facebook link,
        you leave our website, and Facebook may set its own cookies under Meta&apos;s cookie policy. We do not control
        cookies set by third-party websites.
      </p>
    ),
  },
  {
    id: "preferences",
    title: "Cookie consent and preferences",
    body: (
      <>
        <p>
          Because we only use the essential storage described above, we do not show a cookie consent banner. You can
          clear the information our website has stored at any time using the button below.
        </p>
        <ResetPreferences />
      </>
    ),
  },
  {
    id: "browser",
    title: "Managing cookies in your browser",
    body: (
      <>
        <p>
          Most browsers let you view, block, or delete cookies and site data through their settings. Look for
          &ldquo;Privacy,&rdquo; &ldquo;Cookies,&rdquo; or &ldquo;Site data&rdquo; in Chrome, Safari, Firefox, or Edge.
          Blocking storage will not stop the website from working, but the discount popup may appear again.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact information",
    body: (
      <p>
        Questions about this policy? Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. See also our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro={<p>This policy explains how our website uses cookies and similar browser storage.</p>}
      sections={sections}
    />
  );
}
