import Link from "next/link";
import { site } from "@/lib/site";
export const metadata={title:"Cleaning Opportunities | JODEL Cleaning",description:"Learn about local domestic cleaning opportunities with JODEL Cleaning in Bexley and surrounding areas."};
export default function CleaningJobs(){return <main className="resource-document"><div className="shell">
  <Link className="resource-back" href="/resources">← All resources</Link>
  <div className="resource-doc-head"><div><span className="resource-eyebrow dark">WORK WITH US</span><h1>Local cleaning opportunities.</h1><p>Interested in domestic cleaning work around Bexley and nearby parts of South East London?</p></div></div>
  <div className="resource-guide">
    <p className="resource-guide-intro">We'd like to hear from reliable cleaners who enjoy helping clients care for their homes. Tell us your location, availability and experience; we can discuss whether any suitable opportunities are currently available.</p>
    <div className="resource-jobs-grid">
      <article><h2>Local work</h2><p>We focus on our actual Bexley and surrounding-area service coverage, subject to client needs.</p></article>
      <article><h2>Discuss your availability</h2><p>Let us know your preferred days and hours. A suitable assignment is never guaranteed.</p></article>
      <article><h2>Domestic cleaning</h2><p>Work may include general cleaning, agreed detailed tasks and regular or one-off visits.</p></article>
      <article><h2>Clear expectations</h2><p>Discuss duties, materials, safety, rates and contractual arrangements before accepting work.</p></article>
    </div>
    <h2>What to include in your enquiry</h2>
    <ul><li>Your name and postcode/general area</li><li>Days and times available</li><li>Relevant experience and whether you can provide references</li><li>Best contact number and email</li></ul>
    <p>The supplied reference describes a third-party cleaner portal and specific terms of self-employment. JODEL does not offer access to that portal; work status and onboarding will be explained for any actual opportunity.</p>
    <a className="resource-button" href={`mailto:${site.email}?subject=Cleaning%20work%20enquiry`}>Enquire about cleaning work →</a>
  </div><div className="resource-doc-bottom"><Link href="/resources">← Resources</Link><Link href="/">JODEL homepage →</Link></div>
</div></main>;}
