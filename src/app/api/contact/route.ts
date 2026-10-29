import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/config/site";

/**
 * Contact form endpoint — EMAIL INTEGRATION POINT.
 *
 * Out of the box no email provider is configured, so this route validates the
 * submission and responds with `{ ok: false, code: "not_configured" }`. The form then
 * tells the visitor honestly that the message was NOT sent and offers a prefilled email.
 *
 * To deliver submissions with Resend (https://resend.com), set these environment variables
 * in Vercel (Project → Settings → Environment Variables) or in .env.local:
 *   RESEND_API_KEY      = re_xxxxxxxxx
 *   CONTACT_TO_EMAIL    = jamesbuilds.dev@gmail.com   (optional, defaults to the site email)
 *   CONTACT_FROM_EMAIL  = "Logo Palace <hello@your-verified-domain.com>"
 *
 * To use a different provider, replace `sendEmail()` below.
 */

type Payload = { subject: string; text: string; replyTo: string };

async function sendEmail({ subject, text, replyTo }: Payload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Logo Palace Website <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, text }),
  });
  return res.ok;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, code: "invalid_json" }, { status: 400 });
  }

  // Silently accept bot submissions that fill the honeypot field.
  if (body && typeof body === "object" && "company" in body && (body as { company?: string }).company) {
    return Response.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, code: "validation_error", issues: parsed.error.issues.map((i) => i.message) },
      { status: 422 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json({ ok: false, code: "not_configured" }, { status: 503 });
  }

  const d = parsed.data;
  const text = [
    `New project inquiry from the ${siteConfig.name} website`,
    "",
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Service: ${d.service}`,
    d.packageName ? `Package: ${d.packageName}` : null,
    `Estimated budget: ${d.budget}`,
    d.promoCode ? `Promotional request code: ${d.promoCode} (confirm eligibility before purchase)` : null,
    "",
    "Project details:",
    d.details,
  ]
    .filter((l) => l !== null)
    .join("\n");

  try {
    const sent = await sendEmail({
      subject: `New inquiry: ${d.service} — ${d.name}`,
      text,
      replyTo: d.email,
    });
    if (!sent) return Response.json({ ok: false, code: "send_failed" }, { status: 502 });
  } catch {
    return Response.json({ ok: false, code: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
