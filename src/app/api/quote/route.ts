import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Lead = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  bedrooms: string;
  preferredDate: string;
  message: string;
  privacyAcknowledged: string;
  companyWebsite: string;
  extras: string[];
};

const services = new Set(["Regular home cleaning", "Deep cleaning", "End-of-tenancy cleaning", "One-off cleaning", "After builders cleaning", "Not sure yet"]);
const allowedExtras = new Set(["Oven & hob cleaning", "Fridge cleaning", "Inside cupboards", "Interior windows"]);
const bedrooms = new Set(["", "Studio", "1", "2", "3", "4", "5+"]);
const ukPostcode = /^(GIR\s?0AA|(?:[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}))$/i;

function value(v: unknown, maxLength = 100) {
  return typeof v === "string" ? v.trim().slice(0, maxLength) : "";
}
function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] || c);
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) return NextResponse.json({ message: "Invalid request." }, { status: 415 });
    // Reject obviously oversized submissions before JSON parsing.
    const length = Number(request.headers.get("content-length") || "0");
    if (length > 12000) return NextResponse.json({ message: "Your message is too long." }, { status: 413 });
    const raw: unknown = await request.json();
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return NextResponse.json({ message: "Invalid form data." }, { status: 400 });
    const obj = raw as Record<string, unknown>;
    const lead: Lead = {
      name: value(obj.name), email: value(obj.email, 254), phone: value(obj.phone, 30),
      postcode: value(obj.postcode, 12).toUpperCase(), service: value(obj.service, 70),
      bedrooms: value(obj.bedrooms, 10), preferredDate: value(obj.preferredDate, 12),
      message: value(obj.message, 1500), privacyAcknowledged: value(obj.privacyAcknowledged, 5),
      companyWebsite: value(obj.companyWebsite),
      extras: Array.isArray(obj.extras) ? obj.extras.filter((v): v is string => typeof v === "string" && allowedExtras.has(v)).slice(0,4) : [],
    };
    // Honeypot: return success to bots, without sending an email.
    if (lead.companyWebsite) return NextResponse.json({ message: "Thank you." });
    if (lead.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || !ukPostcode.test(lead.postcode) || !services.has(lead.service) || !bedrooms.has(lead.bedrooms) || lead.privacyAcknowledged !== "yes") {
      return NextResponse.json({ message: "Please check the required fields and postcode." }, { status: 400 });
    }
    if (lead.preferredDate && !/^\d{4}-\d{2}-\d{2}$/.test(lead.preferredDate)) {
      return NextResponse.json({ message: "Please check the date." }, { status: 400 });
    }

    const { RESEND_API_KEY, LEADS_TO_EMAIL, LEADS_FROM_EMAIL } = process.env;
    if (!RESEND_API_KEY || !LEADS_TO_EMAIL || !LEADS_FROM_EMAIL) {
      // Never claim success when no one will actually receive the enquiry.
      return NextResponse.json({ message: "Online enquiries are being configured. Please contact us directly for now." }, { status: 503 });
    }
    const rows: [string, string][] = [
      ["Name", lead.name], ["Email", lead.email], ["Phone", lead.phone || "Not provided"],
      ["Postcode", lead.postcode], ["Service", lead.service], ["Bedrooms", lead.bedrooms || "Not specified"],
      ["Preferred date", lead.preferredDate || "Flexible / not specified"],
      ["Optional extras", lead.extras.join(", ") || "None"],
      ["Notes", lead.message || "None"],
    ];
    const html = `<div style="font-family:Arial,sans-serif;color:#18332d;max-width:620px;margin:auto"><h2>New JODEL cleaning enquiry</h2><p>Someone requested a quotation from your website.</p><table style="border-collapse:collapse;width:100%">${rows.map(([k, v]) => `<tr><th style="text-align:left;padding:12px;border-bottom:1px solid #ddd;vertical-align:top">${escapeHtml(k)}</th><td style="padding:12px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`).join("")}</table><p>Reply to this enquiry at <a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a>.</p></div>`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: LEADS_FROM_EMAIL,
        to: [LEADS_TO_EMAIL],
        reply_to: lead.email,
        subject: `JODEL cleaning enquiry — ${lead.postcode} — ${lead.service}`,
        html,
        text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      }),
      cache: "no-store",
    });
    if (!response.ok) {
      // Avoid logging private customer details.
      console.error("Resend rejected quote email", response.status);
      return NextResponse.json({ message: "We couldn't send your enquiry. Please try again shortly or contact us directly." }, { status: 502 });
    }
    return NextResponse.json({ message: "Enquiry sent successfully." }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ message: "We couldn't process that request. Please try again." }, { status: 400 });
  }
}
