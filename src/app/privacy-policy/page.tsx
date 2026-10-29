import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { LegalPage, OwnerNote, type LegalSection } from "@/components/legal/LegalPage";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Logo Palace collects, uses, stores, and protects personal information submitted through this website.",
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <p>
        This Privacy Policy explains how {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
        collects, uses, and protects personal information when you visit this website or contact us. We are based in{" "}
        {siteConfig.location}.
      </p>
    ),
  },
  {
    id: "information-collected",
    title: "Personal information we collect",
    body: (
      <>
        <p>We collect only the information you choose to give us, plus limited technical information:</p>
        <ul>
          <li>
            <strong>Information you provide:</strong> your name, email address, the service you&apos;re interested in,
            your estimated budget, project details, and any promotional request code you include.
          </li>
          <li>
            <strong>Emails you send us:</strong> the content of messages and any attachments you send to{" "}
            {siteConfig.email}.
          </li>
          <li>
            <strong>Technical information:</strong> like most websites, our hosting provider may automatically process
            basic technical data such as IP address, browser type, and pages requested in order to deliver and secure
            the site.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "contact-form",
    title: "Contact form information",
    body: (
      <>
        <p>
          When you submit our project inquiry form, the details you enter are used to respond to your inquiry and
          prepare a quote. The form includes a consent checkbox confirming you agree to this use.
        </p>
        <p>
          If an email delivery service is connected to our form, your submission is sent to our inbox through that
          provider. If the form is not connected, your information is not stored by the website, and you&apos;ll be
          asked to email us directly instead.
        </p>

      </>
    ),
  },
  {
    id: "purposes",
    title: "How we use information and lawful grounds",
    body: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>Respond to inquiries and provide quotes;</li>
          <li>Deliver and manage the services you request;</li>
          <li>Communicate with you about your project and any promotion you claimed;</li>
          <li>Keep our website secure and working properly; and</li>
          <li>Meet legal, tax, and accounting obligations.</li>
        </ul>
        <p>
          Where laws that require a lawful basis apply (for example, if you contact us from the European Economic Area
          or United Kingdom), we rely on your consent, steps taken at your request before entering into a contract, our
          legitimate interests in running our business, and compliance with legal obligations.
        </p>
      </>
    ),
  },
  {
    id: "email",
    title: "Email communications",
    body: (
      <p>
        We use your email address to reply to your inquiry and communicate about your project. We do not add you to a
        marketing newsletter without your permission. If we offer one in the future, you will be able to unsubscribe at
        any time.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    body: (
      <p>
        This website does not use advertising or analytics cookies. It uses your browser&apos;s local storage to
        remember whether you have already seen or used the discount wheel, so it doesn&apos;t keep appearing. See our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link> for details.
      </p>
    ),
  },
  {
    id: "third-parties",
    title: "Analytics and third-party services",
    body: (
      <>
        <p>
          We do not currently use analytics or advertising trackers on this website. The website is hosted by a
          third-party hosting provider, which processes technical data needed to serve the site. Our Facebook link takes
          you to Facebook, which is governed by Meta&apos;s own privacy policy.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <p>
        We keep inquiry and project information only as long as needed to respond to you, provide our services, and
        meet legal, tax, or accounting requirements. When information is no longer needed, we delete it or keep it in a
        form that no longer identifies you.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security measures",
    body: (
      <p>
        This website is served over an encrypted HTTPS connection, and we take reasonable steps to protect the
        information you share with us. However, no method of transmission over the internet or electronic storage is
        completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Data sharing",
    body: (
      <>
        <p>We do not sell or rent your personal information. We share it only when needed to:</p>
        <ul>
          <li>Use service providers that help us operate, such as hosting and email providers;</li>
          <li>Work with third-party platforms you ask us to use for your project; or</li>
          <li>Comply with the law or protect our rights.</li>
        </ul>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your privacy rights",
    body: (
      <>
        <p>
          Depending on where you live — including California under the California Consumer Privacy Act (CCPA), as
          amended — you may have the right to request access to, correction of, or deletion of your personal
          information, and to know how it is used. We do not sell or share personal information for cross-context
          behavioral advertising.
        </p>
        <p>
          To make a request, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We may need to verify
          your identity before responding. We will not discriminate against you for exercising your rights.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    body: (
      <p>
        Our services are intended for adults and businesses. This website is not directed to children under 13, and we
        do not knowingly collect personal information from children. If you believe a child has provided us with
        information, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Policy updates",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Changes take effect when posted on this page, and the
        &ldquo;Last updated&rdquo; date will change accordingly.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact information",
    body: (
      <p>
        For privacy questions or requests, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.{" "}
        {siteConfig.name}, {siteConfig.location}.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={<p>Your privacy matters to us. This policy explains what we collect, why, and the choices you have.</p>}
      sections={sections}
    />
  );
}
