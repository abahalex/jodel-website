import Link from "next/link";
import { resources } from "@/lib/jodel-resources";

export const metadata = { title: "Client & Cleaner Resources | JODEL Cleaning", description: "JODEL Cleaning client handbooks, cleaning checklists, supplies and attendance records." };

export default function ResourcesPage() {
  return (
    <main>
      <section className="resource-hero"><div className="shell"><span className="resource-eyebrow">JODEL CLEANING · USEFUL INFORMATION</span><h1>Resources for a<br /><em>smoother clean.</em></h1><p>Practical guides and printable forms for clients and cleaners. Created in the same JODEL style, so everything you need is in one place.</p></div></section>
      <section className="resource-section"><div className="shell">
        <div className="resource-intro"><div><p className="resource-eyebrow dark">DOWNLOAD & PRINT</p><h2>Find the right document.</h2></div><p>Open a guide to read it online, or print/save it as a PDF from your browser. Checklists can be completed before printing.</p></div>
        <div className="resource-cards">{resources.map((item, index) => <Link className="resource-card" href={`/resources/${item.slug}`} key={item.slug}><span className="resource-card-top"><small>{item.category}</small><span>{String(index + 1).padStart(2, "0")}</span></span><h3>{item.title}</h3><p>{item.description}</p><strong>Open resource <span aria-hidden="true">↗</span></strong></Link>)}</div>
        <div className="resource-more"><div><h2>Additional information & tools</h2><p>Use our <Link href="/resources/calculator">cleaning time calculator</Link> for a preliminary estimate, read about <Link href="/resources/cleaning-jobs">local cleaning opportunities</Link>, read our <Link href="/terms">terms of business</Link> or see our <Link href="/privacy">privacy notice</Link>. If you're unsure about an arrangement, please contact JODEL before the visit.</p></div><Link className="resource-button" href="/#quote">Get in touch →</Link></div>
        <div className="resource-callout"><strong>Before booking:</strong> JODEL’s guide price is £21.50 per hour, although the confirmed hourly rate can be lower or higher. There are no agency fees or service charges; extras such as oven cleaning depend on the time needed. Your written quotation and <Link href="/terms">terms of business</Link> set out the agreed price. Calculator timings are provisional.</div>
      </div></section>
    </main>
  );
}
