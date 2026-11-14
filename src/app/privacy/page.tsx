import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice | JODEL Cleaning",
  description: "How JODEL Cleaning collects, uses, stores and protects client and cleaner personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-layout">
      <div className="container">
        <Link className="legal-back" href="/">← Back to JODEL</Link>
        <p className="eyebrow">YOUR INFORMATION · JODEL CLEANING</p>
        <h1>Privacy notice<span className="period">.</span></h1>
        <p className="legal-intro">How we use personal information when you contact us, request cleaning or enquire about working as a cleaner. Last updated 14 November 2026.</p>

        <section><h2>1. Who we are</h2>
          <p>JODEL Cleaning is the domestic cleaning business operating this website, based in Bexley and serving nearby areas of South East London, subject to postcode availability. JODEL is responsible for the personal data it collects and decides how to use (the UK GDPR &quot;controller&quot;). For privacy enquiries, contact <a href={"mailto:" + site.email}>{site.email}</a>{site.phone ? <> or telephone <a href={"tel:" + site.phone.replace(/\s/g, "")}>{site.phone}</a></> : null}. Our website is <a href={site.siteUrl}>{site.siteUrl}</a>.</p>
          <p>We do not claim to be Maid2Clean or part of its franchise network. Any legal-entity or registered-address details required in a service agreement will be provided in JODEL&apos;s booking documentation.</p>
        </section>

        <section><h2>2. Information we collect</h2>
          <p><strong>Cleaning enquiries:</strong> when you request a quote, we collect your name, email address, phone number (if supplied), property postcode, service type, property information, preferred date and any instructions or other information you choose to give us.</p>
          <p><strong>Clients with a confirmed service:</strong> we may also need the full service address, preferred contact method, agreed cleaning schedule, client instructions, records of work, payments and correspondence, including any payment details needed to administer an agreed payment method.</p>
          <p><strong>Cleaner applications and introductions:</strong> when a cleaner applies and progresses through vetting, we may collect contact details, work availability, relevant experience, references and referee contact details, evidence of identity and eligibility to work in the UK, and other information reasonably needed to arrange safe, lawful cleaning work. We collect sensitive information only when necessary and where we have an appropriate lawful basis and additional condition.</p>
          <p><strong>Website use:</strong> routine technical details such as IP address, browser and diagnostic data may be processed by hosting providers and services that deliver fonts, images and emails.</p>
        </section>

        <section><h2>3. Why we use this information and our lawful bases</h2>
          <p>We use enquiry information to answer questions, check service-area availability, provide a quotation and take steps at your request before entering into a contract. We use client information to arrange and administer agreed services, payments, cleaner introductions, changes, complaints and service records (contract performance and legitimate interests, as applicable).</p>
          <p>We use cleaner application information to assess suitability, obtain references, verify identity and right to work, and arrange introductions (steps before a contract, legitimate interests and legal obligations, as applicable). We retain records when required to meet tax, financial and other legal duties, and may use proportionate information to establish, exercise or defend legal claims.</p>
          <p>Where consent is legally necessary, including for certain marketing communications, we ask for it separately and you can withdraw it at any time. Submitting a quotation request does not sign you up for marketing.</p>
        </section>

        <section><h2>4. Who may receive your information</h2>
          <p>To arrange cleaning, we may give an introduced cleaner only the details reasonably necessary to contact you and carry out an agreed visit, such as your name, service address, contact number, timing and cleaning instructions. Where appropriate, relevant information may be shared with referees or persons involved in assessing cleaner applications.</p>
          <p>Our website sends enquiry form submissions through Resend to our business inbox when that service is configured. We also use website hosting and email providers and, where relevant to a confirmed service, payment providers, accounting advisers, insurers or other service providers. Service providers must use personal data only for authorised purposes. We may disclose information where required by law, to protect legal rights or in connection with a lawful business transfer.</p>
          <p>We do not sell customer or cleaner personal information to advertisers.</p>
        </section>

        <section><h2>5. Payments and banking information</h2>
          <p>Our website does not currently collect or process card payments or bank details through its quote form. If a confirmed service uses Direct Debit, card payment or bank transfer, we will explain the agreed method separately. Any payment provider used must apply appropriate security controls. We do not ask you to put full card details, bank details or identity-document numbers into the general enquiry message box.</p>
        </section>

        <section><h2>6. Cookies, fonts and photographs</h2>
          <p>The current JODEL website does not intentionally place advertising or profiling cookies in its own application code. Its hosting and security systems may process technical information necessary to deliver the site. The site loads fonts from Google Fonts and some stock images from Unsplash, so your browser may connect to those third-party services. If we add optional analytics or advertising cookies in future, we will update this notice and provide appropriate consent controls.</p>
        </section>

        <section><h2>7. How long information is kept</h2>
          <p>We follow the storage limitation principle: information should not identify you for longer than necessary for the purpose for which it was collected, unless a longer period is required by law or needed for legal claims. We aim to apply the following retention approach:</p>
          <ul className="legal-clauses">
            <li><strong>Unconverted customer enquiries:</strong> ordinarily no longer than 12 months after the last relevant contact, unless a dispute or legal requirement justifies longer retention.</li>
            <li><strong>Client service records:</strong> during the service relationship and for an appropriate period after it ends. Financial, tax and dispute-related records may need to be held for up to six or seven years where required or justified.</li>
            <li><strong>Unsuccessful cleaner applications:</strong> ordinarily up to 12 months, unless retention is reasonably needed for a dispute or other lawful reason.</li>
            <li><strong>Successful cleaner records:</strong> for the relevant working relationship and as necessary afterwards for legal, tax and record-keeping obligations. Right-to-work records may need to be retained for two years after the relationship ends where the applicable statutory rules require it.</li>
          </ul>
          <p>These are retention commitments to be reflected in our operational records and inbox procedures; they are not a claim that the website automatically deletes email or application records.</p>
        </section>

        <section><h2>8. Security and international processing</h2>
          <p>We take proportionate technical and organisational measures to prevent unauthorised access, disclosure, loss or alteration of personal information. Access to client, cleaner and applicant information should be limited to people who need it for the service. Some hosting, email or media providers may process data outside the UK; where international transfers are subject to UK GDPR safeguards, we will rely on an appropriate lawful transfer mechanism.</p>
        </section>

        <section><h2>9. Your information rights</h2>
          <p>Depending on the circumstances, you may request access to your data, correction, erasure, restriction, transfer of information you provided, or object to certain processing. You may withdraw consent where consent is the lawful basis. These rights are subject to relevant exemptions and legal obligations.</p>
          <p>To exercise a right or ask a question, email <a href={"mailto:" + site.email}>{site.email}</a>. We may need to verify your identity before responding.</p>
        </section>

        <section><h2>10. Complaints</h2>
          <p>Please contact us first if you have concerns about how JODEL handles your information. You can also complain to the UK Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk/make-a-complaint</a>.</p>
        </section>

        <section><h2>11. Updates and related terms</h2>
          <p>We review this notice when our services, data handling or legal duties change. The updated version will be published here. For service and cancellation arrangements, see our <Link href="/terms">terms of business</Link>.</p>
        </section>
      </div>
    </main>
  );
}
