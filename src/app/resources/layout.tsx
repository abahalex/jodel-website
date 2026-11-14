import Image from "next/image";
import Link from "next/link";
import "./resources.css";
import { site } from "@/lib/site";

export default function ResourcesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="resource-site">
      <header className="resource-header">
        <div className="shell resource-head-inner">
          <Link href="/" aria-label="JODEL Cleaning home"><Image src="/jodel-logo.png" width={202} height={68} alt="JODEL Cleaning" priority /></Link>
          <nav aria-label="Resource navigation"><Link href="/">Home</Link><Link href="/resources">Resources</Link><Link className="resource-head-cta" href="/#quote">Request a quote →</Link></nav>
        </div>
      </header>
      {children}
      <footer className="resource-footer"><div className="shell resource-footer-inner"><span>© {new Date().getFullYear()} {site.name} · Based in Bexley, South East London</span><span><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <Link href="/#quote">Enquire</Link></span></div></footer>
    </div>
  );
}
