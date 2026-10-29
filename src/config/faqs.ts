/**
 * FAQ content. `home: true` items also appear on the homepage.
 * Keep answers consistent with pricing.ts and discounts.ts.
 */
export type Faq = { q: string; a: string; home?: boolean };
export type FaqGroup = { id: string; title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "services",
    title: "Services",
    items: [
      {
        q: "What services does Logo Palace offer?",
        a: "We design logos and brand identities, build websites (custom, WordPress, Shopify, and e-commerce), and create digital and print graphics such as social media designs, marketing materials, packaging, and ads. The full list is on our Services page.",
        home: true,
      },
      {
        q: "Do you work with businesses outside San Francisco?",
        a: "Yes. We're based in San Francisco, California, and work remotely with individuals, startups, and businesses across the United States.",
      },
      {
        q: "Can you redesign my existing logo or website?",
        a: "Yes. Logo redesigns and website redesigns are two of our core services. We review what you have, keep what's working, and modernize the rest.",
      },
    ],
  },
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      {
        q: "How do I get started?",
        a: "Send us a project inquiry through the contact form or email us. We'll review your goals, ask a few questions, and reply with a recommended approach and a written quote. Work starts only after you approve the quote.",
        home: true,
      },
      {
        q: "What do you need from me before a project starts?",
        a: "Usually a short description of your business, your goals, examples of designs you like, and any existing materials such as your current logo, website access, photos, or written content. We'll send a short checklist for your specific project.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing and quotes",
    items: [
      {
        q: "How much does a logo or website cost?",
        a: "Logo packages start at $49 and website packages start at $299. These are starting prices — your final price depends on your project's scope and requirements and is confirmed in a written quote before any work begins.",
        home: true,
      },
      {
        q: "Can I get a custom quote?",
        a: "Yes. If your project doesn't fit a package, tell us what you need through the contact form. We'll review the details and send a custom quote that lists what's included.",
      },
      {
        q: "Are domain names, hosting, or plugins included?",
        a: "Third-party costs such as domain names, hosting, premium themes, paid plugins or apps, stock assets, and printing are billed separately unless your quote says otherwise.",
      },
    ],
  },
  {
    id: "revisions",
    title: "Revisions and maintenance",
    items: [
      {
        q: "How many revisions do I get?",
        a: "Each package includes revision rounds, and the exact number is written into your quote so you know what to expect. Additional revisions beyond the agreed scope can be added at an agreed rate.",
        home: true,
      },
      {
        q: "Do you offer website maintenance after launch?",
        a: "Yes. We offer website maintenance and support for updates, content changes, and fixes. Ask us for a maintenance quote based on how much ongoing help you need.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contacting us",
    items: [
      {
        q: "What's the best way to contact Logo Palace?",
        a: "Use the project inquiry form on our Contact page or email jamesbuilds.dev@gmail.com. You can also message us on Facebook.",
      },
    ],
  },
  {
    id: "promotion",
    title: "Discount promotion",
    items: [
      {
        q: "How does the spin-the-wheel discount work?",
        a: "Some visitors see an optional discount wheel. Each spin picks a discount at random from the values shown on the wheel. You'll receive a promotional request code to include when you request a quote.",
        home: true,
      },
      {
        q: "Is the discount guaranteed?",
        a: "The code is a promotional request, not an automatic coupon. The promotion applies to eligible services only, discounts cannot be combined unless explicitly permitted, additional eligibility restrictions may apply, and the discount must be confirmed by Logo Palace before purchase.",
      },
    ],
  },
];

export const homeFaqs: Faq[] = faqGroups.flatMap((g) => g.items).filter((f) => f.home);
