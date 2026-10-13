"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "@/components/Icons";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = { ...Object.fromEntries(formData.entries()), extras: formData.getAll("extras") };
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { message?: string };
      if (!res.ok) throw new Error(data.message || "We couldn't send your request right now.");
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span className="success-icon"><Check /></span>
        <h3>Your enquiry is on its way.</h3>
        <p>Thank you for reaching out to JODEL. We&apos;ll review your details and get back to you about a quote.</p>
        <button className="text-action" type="button" onClick={() => setStatus("idle")}>Send another enquiry <ArrowRight /></button>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="form-head"><span>START HERE</span><span className="form-count">01 / 01</span></div>
      <h3>Tell us about your space.</h3>
      <p className="form-subtitle">A few details are all we need to get started.</p>
      <div className="form-grid">
        <label className="field"><span>Your name <b>*</b></span><input name="name" type="text" autoComplete="name" placeholder="Full name" maxLength={100} required /></label>
        <label className="field"><span>Email address <b>*</b></span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required /></label>
        <label className="field"><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" placeholder="07..." maxLength={30} /></label>
        <label className="field"><span>Property postcode <b>*</b></span><input name="postcode" autoComplete="postal-code" placeholder="e.g. SE18 6AB" maxLength={9} required /></label>
        <label className="field span-2"><span>What can we help with? <b>*</b></span><select name="service" required defaultValue=""><option value="" disabled>Choose a cleaning service</option><option>Regular home cleaning</option><option>Deep cleaning</option><option>End-of-tenancy cleaning</option><option>After builders cleaning</option><option>One-off cleaning</option><option>Not sure yet</option></select></label>
        <label className="field"><span>Bedrooms</span><select name="bedrooms" defaultValue=""><option value="">Select (optional)</option><option>Studio</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></label>
        <label className="field"><span>When do you need us?</span><input name="preferredDate" type="date" /></label>
        <fieldset className="form-extras span-2"><legend>Optional extras (select any)</legend><div className="form-extras-options"><label><input type="checkbox" name="extras" value="Oven & hob cleaning"/>Oven &amp; hob cleaning</label><label><input type="checkbox" name="extras" value="Fridge cleaning"/>Fridge cleaning</label><label><input type="checkbox" name="extras" value="Inside cupboards"/>Inside cupboards</label><label><input type="checkbox" name="extras" value="Interior windows"/>Interior windows</label></div></fieldset>
        <label className="field span-2"><span>Anything else we should know?</span><textarea name="message" rows={3} placeholder="Tell us about your cleaning needs..." maxLength={1500} /></label>
      </div>
      <div className="bot-trap" aria-hidden="true"><label>Leave this blank<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="form-consent"><input type="checkbox" name="privacyAcknowledged" value="yes" required/><span>I understand that JODEL will use these details to respond to my enquiry. Read our <Link href="/privacy">privacy notice</Link>.</span></label>
      {status === "error" && <div className="form-error" role="alert">{errorMessage} {site.phone ? <>You can also call <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>.</> : site.email ? <>You can also email <a href={`mailto:${site.email}`}>{site.email}</a>.</> : null}</div>}
      <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending your enquiry..." : "Request my free quote"}<ArrowRight />
      </button>
      <p className="form-footnote">No obligation, no online payment. We&apos;ll confirm service availability and pricing with you.</p>
    </form>
  );
}
