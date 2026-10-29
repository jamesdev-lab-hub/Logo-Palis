import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { LegalPage, OwnerNote, type LegalSection } from "@/components/legal/LegalPage";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description: "The terms and conditions that apply to Logo Palace services, quotes, payments, deliverables, and use of this website.",
  path: "/terms-and-conditions",
});

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction and acceptance",
    body: (
      <>
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of this website and any design or development
          services provided by {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), based in{" "}
          {siteConfig.location}. By using this website or engaging our services, you agree to these Terms.
        </p>
        <p>
          If you are entering into an agreement on behalf of a business, you confirm that you have authority to bind
          that business to these Terms.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Services and project scope",
    body: (
      <>
        <p>
          We provide branding, logo design, website design and development, and related digital and creative services
          as described on our website. The specific services, deliverables, number of revision rounds, and any timeline
          for your project are defined in a written quote or proposal (&ldquo;Quote&rdquo;) that you approve before
          work begins.
        </p>
        <p>
          Work requested outside the approved Quote is considered additional work and may require a separate quote or
          change in price. We will tell you before any additional charges apply.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    title: "Pricing, payments, and quotations",
    body: (
      <>
        <p>
          Prices listed on our website are starting prices in U.S. dollars (USD). Your final price depends on your
          project&apos;s scope and requirements and is stated in your Quote. A Quote is valid for the period stated on
          it.
        </p>
        <p>
          Payment terms — such as deposits, milestone payments, and due dates — are set out in your Quote or invoice.
          Third-party costs (for example, domain names, hosting, premium themes, plugins, apps, stock assets, fonts, or
          printing) are your responsibility unless your Quote states otherwise.
        </p>
        <p>
          Promotional discounts, including codes from our website discount wheel, are promotional requests. They apply
          to eligible services only, cannot be combined unless explicitly permitted, may be subject to additional
          eligibility restrictions, and must be confirmed by us in writing before purchase.
        </p>
       
      </>
    ),
  },
  {
    id: "revisions",
    title: "Revisions and approvals",
    body: (
      <>
        <p>
          Your Quote states the number of revision rounds included. A revision round means one consolidated set of
          feedback on the current version of the work. Requests beyond the included rounds, or requests that change the
          agreed direction or scope, may be billed as additional work.
        </p>
        <p>
          When you approve a design, page, or final deliverable, that approval confirms the work meets your
          requirements. Changes requested after approval may be treated as new work.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "Client responsibilities",
    body: (
      <>
        <p>To help us deliver your project, you agree to:</p>
        <ul>
          <li>Provide accurate information, content, feedback, and approvals in a timely manner;</li>
          <li>Provide any logins, access, or materials needed for the project;</li>
          <li>
            Confirm that you own or have permission to use any text, images, logos, or other materials you send us; and
          </li>
          <li>Review deliverables carefully, including spelling, contact details, and legal or regulatory content.</li>
        </ul>
        <p>Delays in providing materials or feedback may affect project timelines.</p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property and deliverables",
    body: (
      <>
        <p>
          Once you have paid in full, the final approved deliverables created specifically for you are transferred to
          you or licensed to you as described in your Quote. Until full payment is received, we retain all rights in
          the work.
        </p>
        <p>
          Unused concepts, drafts, and working files remain our property unless your Quote states otherwise.
          Third-party elements — such as fonts, stock images, themes, plugins, and open-source code — remain subject to
          their own licenses.
        </p>
        <p>
          Unless you ask us not to in writing, we may display completed work in our portfolio and marketing materials.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party tools and services",
    body: (
      <p>
        Projects may rely on third-party platforms such as WordPress, Shopify, hosting providers, payment processors, or
        plugins. We are not responsible for the availability, pricing, policy changes, security, or performance of
        third-party services, and your use of them is governed by their own terms.
      </p>
    ),
  },
  {
    id: "cancellations",
    title: "Cancellations and refunds",
    body: (
      <>
        <p>
          Either party may cancel a project by written notice. If a project is cancelled, you are responsible for
          payment for work completed up to the date of cancellation, as well as any non-refundable third-party costs
          already incurred on your behalf.
        </p>
        <p>Refund eligibility, if any, is determined by the terms of your Quote.</p>
      
      </>
    ),
  },
  {
    id: "website-use",
    title: "Website use",
    body: (
      <>
        <p>
          You may use this website for lawful purposes only. You agree not to attempt to disrupt the website, gain
          unauthorized access, or submit false or harmful information through our forms.
        </p>
        <p>
          The content on this website — including text, graphics, and design — belongs to {siteConfig.name} unless
          otherwise noted. Portfolio items labeled &ldquo;Concept project&rdquo; are demonstration work and do not
          represent client engagements.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitations of liability",
    body: (
      <>
        <p>
          We provide our website and services with reasonable skill and care. We do not guarantee specific business
          outcomes, such as search rankings, traffic, sales, or revenue.
        </p>
        <p>
          To the fullest extent permitted by law, {siteConfig.name} is not liable for indirect, incidental, special, or
          consequential damages, and our total liability relating to a project is limited to the amount you paid us
          for that project.
        </p>
        </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this page shows
        when they were last revised. The Terms in effect when you approve a Quote apply to that project.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact information",
    body: (
      <p>
        Questions about these Terms? Email us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or use
        our <Link href="/contact">contact page</Link>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro={<p>Please read these terms carefully before using our website or engaging our services.</p>}
      sections={sections}
    />
  );
}
