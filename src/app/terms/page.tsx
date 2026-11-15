import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Business | JODEL Cleaning",
  description: "Terms of business for JODEL Cleaning domestic cleaning services in Bexley and surrounding South East London areas.",
};

const clauses = [
  {
    title: "A. General",
    items: [
      "These Terms of Business, together with the written quotation, booking confirmation or billing documentation supplied by JODEL Cleaning (JODEL), form the agreement between JODEL and the customer. Any variation must be agreed in writing. If a term is found unenforceable, the remaining terms continue where lawful.",
      "The agreement is governed by the law of the country in which the service is provided, and disputes are dealt with by its competent courts, subject to any mandatory consumer protections.",
      "A request for a quotation or an enquiry through this website is not itself a confirmed booking or acceptance of these terms. The service, applicable fees and payment arrangements are agreed before work begins."
    ],
  },
  {
    title: "B. Services and payment",
    items: [
      "The agreement starts with the first agreed clean, subject to the cancellation provisions below. JODEL arranges domestic cleaning and may introduce suitable, vetted cleaners as described in section E. The agreed work, cleaner arrangement and schedule are confirmed before service begins.",
      "JODEL's guide price is £21.50 per hour. This is an indication, not a fixed or minimum rate: the rate confirmed for your booking may be lower or higher depending on your requirements. We provide a personalised quotation before you commit.",
      "JODEL does not charge a separate agency fee or service charge. The customer pays only the cleaning costs and any other amount clearly disclosed and agreed in the written quotation or booking confirmation. An enquiry is free and does not create a booking.",
      "Additional tasks, such as oven and hob cleaning, depend on the time required. Their expected time, scope and any corresponding cost will be discussed and agreed as part of the quotation; they do not carry an automatic fixed add-on price.",
      "Before booking, JODEL will confirm the agreed hourly rate or any applicable job price, expected hours or scope, how payment will be collected, to whom it is payable and when payment is due. We will explain in advance if the customer pays an introduced cleaner directly.",
      "If the arrangement requires payment directly to a cleaner, the customer should pay the agreed amount at the agreed time and keep a record of attendance and payment. Where payment is made to JODEL, we will confirm the method and due date separately.",
      "Any change to the agreed tasks, hours or rate will be discussed before the revised work takes place. Any advance payment, credit or refund is handled in accordance with the booking agreement and applicable law, including the customer's mandatory statutory rights.",
      "Any late cancellation charge, if applicable, must be clearly disclosed and agreed before booking and must comply with applicable consumer law. We do not apply undisclosed charges. The customer will be told the specific cancellation terms for their booking.",
    ],
  },
  {
    title: "C. Insurance cover",
    items: [
      "Under arrangements where JODEL introduces a cleaner, the customer should check their own relevant insurance. JODEL's stated contingency public-liability commitment is £1 million for qualifying loss or damage arising from the negligence of a cleaner introduced by JODEL, subject to the actual policy wording, exclusions and insurer's acceptance of a claim.",
      "Cover is on an indemnity basis. Under the stated policy arrangement, a claim must exceed £100 and the first £100 of each claimed item is not covered by JODEL. Theft of possessions or property is not covered by the stated contingency arrangement. Bleach must not be used and bleach spills are excluded.",
      "Insurance cover and claim decisions depend on the policy conditions and exclusions, not on payment of a separate agency fee or service charge. A copy of the applicable insurance summary, schedule and conditions may be requested from JODEL before the service commences.",
    ],
  },
  {
    title: "D. Responsibility and liability",
    items: [
      "JODEL will use reasonable care and skill when arranging domestic cleaning services. Cleaners introduced or arranged by JODEL are expected to carry out agreed tasks with reasonable care and skill.",
      "The customer and cleaner should agree day-to-day work directions, access arrangements, and the custody, safekeeping and return of keys directly. Please notify JODEL promptly of any related concern.",
      "Where work is unfinished or a service problem arises, the customer should tell JODEL and allow a reasonable opportunity to investigate and put matters right, including discussing a suitable replacement cleaner where appropriate.",
      "JODEL will not be responsible for interruptions outside its reasonable control to the extent permitted by law. Any limitation or exclusion of liability applies only where lawful and fair.",
      "Nothing in this agreement excludes or limits liability for death or personal injury caused by negligence, fraud, breach of mandatory consumer rights, or any other liability that cannot lawfully be excluded. The customer's statutory rights, including the right to services performed with reasonable care and skill, remain unaffected.",
    ],
  },
  {
    title: "E. What JODEL will do",
    items: [
      "Advertise for and select domestic cleaners for introduction to customers.",
      "Interview potential cleaners and take reasonable steps to check identity, references and eligibility to work legally in the UK.",
      "Endeavour to introduce a suitable cleaner for the customer's agreed needs and preferences.",
      "When requested, use reasonable endeavours to arrange a replacement if the usual cleaner is on holiday, is unwell or is unsuitable for the customer. Temporary cover is not automatic and depends on availability.",
      "Respond to customer queries and problems within a reasonable time and comply with applicable law.",
      "Maintain the insurance arrangements described in section C, subject to the relevant policy terms and any required payments.",
    ],
  },
  {
    title: "F. What the customer will do",
    items: [
      "Tell JODEL about changes to a cleaner's regular days, times or schedule and provide clear instructions on the required domestic cleaning tasks.",
      "Give the cleaner and JODEL at least one full day's notice of proposed changes to existing work arrangements, including requests for another cleaner, where reasonably practicable.",
      "Contact JODEL directly if temporary cover is required during the regular cleaner's sickness or holiday.",
      "Inform JODEL before ending the arrangement with an introduced cleaner, or engaging that cleaner outside the agreed service.",
      "Consider an alternative cleaning day where necessary to arrange a suitable cleaner or temporary cover.",
      "Pay the agreed cleaning charges when due, subject to the agreement and statutory rights, and give unambiguous work instructions. JODEL does not impose a separate agency or service fee.",
    ],
  },
  {
    title: "G. Cancellation and termination",
    items: [
      "For eligible distance or off-premises consumer service contracts, the customer has a 14-day statutory cancellation period beginning on the day the contract is entered into. To cancel, notify JODEL clearly by email or another agreed written method.",
      "Where a customer expressly requests services to begin during that 14-day period and then cancels, a proportionate amount for services actually supplied may be payable where the law permits. JODEL will seek the required express request and provide the statutory cancellation information.",
      "Following the initial cooling-off period, a regular cleaning arrangement may be ended by giving the lesser of two months' written notice or any shorter notice specified in the booking confirmation, subject to statutory rights. JODEL may give the same agreed notice to end a regular arrangement.",
      "JODEL asks customers not to recommend a JODEL-introduced cleaner to a third party outside the JODEL service, and not to engage a current or former introduced cleaner independently for 18 months following termination. Any non-solicitation restriction is subject to proper advance disclosure, applicable consumer law and fairness requirements. No separate agency fee, service charge or automatic agency-fee penalty is payable under this provision.",
      "These provisions do not displace statutory cancellation rights, rights arising from non-performance or inadequate performance, or any remedy that cannot be excluded under consumer law.",
    ],
  },
  {
    title: "H. Data protection",
    items: [
      "JODEL processes personal information in accordance with its published Privacy Notice, including information used to respond to enquiries, arrange cleaning services and communicate with cleaners and clients.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="legal-layout">
      <div className="container">
        <Link className="legal-back" href="/">← Back to JODEL</Link>
        <p className="eyebrow">JODEL CLEANING · CUSTOMER INFORMATION</p>
        <h1>Terms of business<span className="period">.</span></h1>
        <p className="legal-intro">JODEL Cleaning customer terms. Guide price £21.50 per hour, subject to an individual quote, with no agency fee or service charge. Last updated 15 November 2026.</p>
        <p>These terms apply only when incorporated into your confirmed service arrangement. Your own JODEL quotation or booking confirmation sets the fees, schedule and any service-specific arrangements. Requesting a quote does not create a paid booking.</p>
        {clauses.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <ol className="legal-clauses">{section.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}</ol>
          </section>
        ))}
        <section>
          <h2>Questions and contact</h2>
          <p>If any term is unclear or you do not wish to agree to it, please discuss it with us before your service begins. Contact JODEL at <a href={"mailto:" + site.email}>{site.email}</a>{site.phone ? <> or <a href={"tel:" + site.phone.replace(/\s/g,"")}>{site.phone}</a></> : null}.</p>
          <p>Read our <Link href="/privacy">privacy notice</Link> or <Link href="/resources">client and cleaner resources</Link>.</p>
        </section>
      </div>
    </main>
  );
}
