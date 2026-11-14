import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, resources, type ResourceSlug } from "@/lib/jodel-resources";
import { AttendanceForm, ClientInstructionForm, ClientProductForm, PrintResource } from "@/components/ResourceForms";

export function generateStaticParams() { return resources.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug}=await params;
  const item=resources.find(r=>r.slug===slug);
  return {title: item ? `${item.title} | JODEL Cleaning` : "JODEL Resources"};
}

export default async function ResourceDocument({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const item=resources.find(r=>r.slug===slug);
  if(!item) notFound();
  const guide = slug==="client-handbook" || slug==="cleaner-handbook" ? guides[slug] : null;
  return <main className="resource-document"><div className="shell">
    <Link className="resource-back" href="/resources">← All resources</Link>
    <div className="resource-doc-head"><div><span className="resource-eyebrow dark">{item.category} · JODEL CLEANING</span><h1>{item.title}</h1><p>{item.description}</p></div>{guide&&<PrintResource />}</div>
    {guide ? <div className="resource-guide"><p className="resource-guide-intro">{guide.intro}</p><nav className="resource-toc" aria-label="Document sections"><strong>In this guide</strong><ol>{guide.sections.map((s,i)=><li key={s.title}><a href={`#guide-${i}`}>{s.title}</a></li>)}</ol></nav>
      {guide.sections.map((section,index)=><section id={`guide-${index}`} className="resource-guide-section" key={section.title}><span className="resource-guide-number">{String(index+1).padStart(2,"0")}</span><div><h2>{section.title}</h2>{section.paragraphs?.map(p=><p key={p}>{p}</p>)}{section.points&&<ul>{section.points.map(p=><li key={p}>{p}</li>)}</ul>}</div></section>)}
      <p className="resource-doc-note">For all booking-specific questions, refer to your confirmed JODEL quotation or contact us. This guide is not a substitute for agreed terms or legal advice.</p>
    </div> : slug==="client-instruction-checklist" ? <ClientInstructionForm /> : slug==="client-product-checklist" ? <ClientProductForm /> : slug==="attendance-payments" ? <AttendanceForm /> : null}
    <div className="resource-doc-bottom"><Link href="/resources">← Browse other resources</Link><Link href="/#quote">Contact JODEL →</Link></div>
  </div></main>;
}
