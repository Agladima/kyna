import { NextResponse } from "next/server";
import { BRAND } from "@/data/constants";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  stage: string;
  bottleneck: string;
  engagement: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;
    const requiredFields: Array<keyof ContactPayload> = [
      "name",
      "email",
      "company",
      "stage",
      "bottleneck",
      "engagement",
      "message",
    ];

    for (const field of requiredFields) {
      if (!body[field] || !String(body[field]).trim()) {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
      }
    }

    if (!isValidEmail(String(body.email))) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || BRAND.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const safeName = escapeHtml(String(body.name));
    const safeEmail = escapeHtml(String(body.email));
    const safeCompany = escapeHtml(String(body.company));
    const safeStage = escapeHtml(String(body.stage));
    const safeBottleneck = escapeHtml(String(body.bottleneck));
    const safeEngagement = escapeHtml(String(body.engagement));
    const safeMessage = escapeHtml(String(body.message)).replace(/\n/g, "<br/>");

    const payload = {
      from: fromEmail,
      to: [toEmail],
      reply_to: String(body.email),
      subject: `New Discovery Form Submission — ${body.name}`,
      html: `
        <h2>New Discovery Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company / Organisation:</strong> ${safeCompany}</p>
        <p><strong>Business Stage:</strong> ${safeStage}</p>
        <p><strong>Biggest Bottleneck:</strong> ${safeBottleneck}</p>
        <p><strong>Preferred Engagement:</strong> ${safeEngagement}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    };

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!resendRes.ok) {
      const errorText = await resendRes.text();
      return NextResponse.json(
        { error: `Failed to send email. ${errorText}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
