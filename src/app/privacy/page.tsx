import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Privacy Notice" };

export default function PrivacyPage() {
  return <main className="legal-layout">
    <div className="container">
      <Link className="legal-back" href="/">← Back to JODEL</Link>
      <p className="eyebrow">YOUR INFORMATION</p>
      <h1>Privacy notice<span className="period">.</span></h1>
      <p className="legal-intro">This notice explains how JODEL handles details submitted through our cleaning enquiry form.</p>
      <section><h2>What we collect</h2><p>When you request a quote, we collect your name, email, any phone number you provide, property postcode, requested cleaning service, and other information you choose to share.</p></section>
      <section><h2>Why we use it</h2><p>We use this information to respond to your enquiry, assess whether we can serve your location, prepare a quote and communicate about any service you ask us to provide. We do not use your enquiry to subscribe you to marketing emails.</p></section>
      <section><h2>How your enquiry is delivered</h2><p>Our website uses an email delivery provider (Resend) to send your form submission to our business inbox. We do not publish your details on the website or sell them to advertisers.</p></section>
      <section><h2>External fonts and images</h2><p>Some pages currently load fonts from Google Fonts and stock photographs from Unsplash. Your browser may connect to those external services to load these assets, and they may process technical information such as an IP address. The site owner can replace these with self-hosted assets.</p></section>
      <section><h2>Retention and security</h2><p>We aim to keep personal data only for as long as needed for responding to enquiries, delivering services and meeting applicable legal obligations. Access to business inboxes should be restricted to authorised users.</p></section>
      <section><h2>Your rights</h2><p>You can request access to, correction of, or deletion of your information, subject to applicable UK data protection law.</p></section>
      <section><h2>Contact</h2><p>For privacy questions or requests, contact JODEL{site.email ? <> at <a href={`mailto:${site.email}`}>{site.email}</a></> : site.phone ? <> by phone on <a href={`tel:${site.phone}`}>{site.phone}</a></> : ". Contact details will be published here when configured"}.</p></section>
      <p className="legal-warning">Business owner: Before launch, review this notice to make sure it accurately describes your legal entity, data retention, contact details and actual data-processing practices. This starter text is not legal advice.</p>
    </div>
  </main>;
}
