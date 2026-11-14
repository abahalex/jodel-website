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
      "The agreement commences with the first agreed clean, subject to the cancellation provisions below. JODEL introduces suitable, vetted domestic cleaners and provides the agency support described in section E. Where a change is necessary we will discuss suitable alternatives with the customer.",
      "The customer will be told, in their written quotation or booking confirmation, the amount payable to JODEL, the amount payable directly to any introduced cleaner, any one-off charge and the method and frequency of payment. No amount quoted on another agency's website applies to JODEL.",
      "Any recurring agency payment is paid in advance by an agreed method, such as standing order or Direct Debit. Where agreed, other payments may be made by bank transfer or card. We will not introduce an unquoted fixed per-visit fee.",
      "Where the agreed arrangement is for the customer to pay the cleaner directly, responsibility for paying the cleaner rests with the customer. Payment should be made on the day of the clean, or as otherwise agreed between the customer and cleaner.",
      "Where a recurring agency agreement exists, the agency fee remains payable while that agreement continues, even if an introduced cleaner is not currently being used, subject to statutory rights, agreed service credits and termination provisions. Fees cease when the agreement has lawfully ended.",
      "Advance agency payments and fees falling within an agreed notice period are dealt with in accordance with the booking confirmation and applicable law. We may offer an appropriate credit where a service is unavailable or cancelled. Nothing in these terms excludes a refund the customer is legally entitled to receive.",
      "If an overpayment continues after lawful termination, JODEL may agree a reasonable administration charge where properly disclosed and lawfully due. Overdue fees may attract interest only where previously agreed and permitted by law.",
      "If a customer cancels a cleaner's visit with less than 12 hours' notice, a late cancellation fee may be payable to the cleaner, but only if the amount and conditions were clearly disclosed and agreed before booking. No fixed cancellation amount is published on this site.",
    ],
  },
  {
    title: "C. Insurance cover",
    items: [
      "Under the agency arrangement, introduced cleaners are covered primarily by the customer's own relevant insurance and, as a contingency, by JODEL's stated public-liability arrangements. JODEL's stated commitment is public-liability cover with a £1 million limit for qualifying loss or damage arising from the negligence of a cleaner introduced by JODEL, subject to the policy wording, exclusions and insurer's acceptance of a claim.",
      "Cover is on an indemnity basis. Under the stated policy arrangement, a claim must exceed £100 and the first £100 of each claimed item is not covered by JODEL. Theft of possessions or property is not covered by the stated contingency arrangement. Bleach must not be used and bleach spills are excluded.",
      "Insurance protection and availability of cover depend on the relevant policy conditions and any required agency fees having been paid. A copy of the current policy summary, schedule and applicable conditions can be requested from JODEL before the service commences.",
    ],
  },
  {
    title: "D. Responsibility and liability",
    items: [
      "JODEL will use reasonable care and skill in providing its agency services. Cleaners introduced by JODEL are expected to carry out agreed tasks with reasonable care and skill.",
      "The source agency agreement assigns responsibility for day-to-day work direction, access and keys to the customer and cleaner. Under JODEL's corresponding arrangement, the customer and cleaner should agree the custody, safe keeping and return of keys directly; please notify JODEL promptly of any related concern.",
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
      "Pay the agreed agency and cleaner fees when due, subject to the agreement and legal rights, and give unambiguous work instructions.",
    ],
  },
  {
    title: "G. Cancellation and termination",
    items: [
      "For eligible distance or off-premises consumer service contracts, the customer has a 14-day statutory cancellation period beginning on the day the contract is entered into. To cancel, notify JODEL clearly by email or another agreed written method.",
      "Where a customer expressly requests services to begin during that 14-day period and then cancels, a proportionate amount for services actually supplied may be payable where the law permits. JODEL will seek the required express request and provide the statutory cancellation information.",
      "Following the initial cooling-off period, a regular agency arrangement may be ended by giving the lesser of two months' written notice or any shorter notice specified in the booking confirmation, subject to statutory rights. JODEL may give the same agreed notice to end a regular arrangement.",
      "The source agreement asks customers not to recommend a JODEL-introduced cleaner to a third party outside the JODEL service, and not to engage a current or former introduced cleaner independently for 18 months following termination. Where a lawful, fair and clearly disclosed non-solicitation obligation has been agreed, the agency fee otherwise due for an unpaid period may be recoverable. This provision does not restrict rights that cannot lawfully be limited.",
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
        <p className="legal-intro">Our agency and domestic cleaning service commitments, adapted for JODEL. Last updated 14 November 2026.</p>
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
