import { z } from "zod";

export const budgetOptions = [
  "Under $100",
  "$100 – $300",
  "$300 – $600",
  "$600 – $1,000",
  "$1,000 – $2,500",
  "$2,500+",
  "Not sure yet",
] as const;

/** Shared validation for the contact form — used in the browser and in the API route. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: "Please enter your full name." })
    .max(100, { error: "Name is too long." }),
  email: z.email({ error: "Please enter a valid email address." }).max(200),
  service: z.string().trim().min(1, { error: "Please choose the service you need." }).max(120),
  budget: z.enum(budgetOptions, { error: "Please choose an estimated budget." }),
  details: z
    .string()
    .trim()
    .min(20, { error: "Please share a few more details (at least 20 characters)." })
    .max(5000, { error: "Please keep project details under 5,000 characters." }),
  consent: z.literal(true, { error: "Please agree to the Privacy Policy so we can respond." }),
  packageName: z.string().max(120).optional(),
  promoCode: z.string().max(40).optional(),
  /** Honeypot field — real visitors never fill it in. */
  company: z.string().max(0).optional(),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;
