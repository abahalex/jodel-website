import Link from "next/link";
import { CleaningTimeCalculator } from "@/components/CleaningTimeCalculator";
export const metadata={title:"Cleaning Time Calculator | JODEL Cleaning",description:"Estimate the time required for regular cleaning based on rooms and recurring tasks."};
export default function CalculatorPage(){return <main className="resource-document"><div className="shell">
  <Link className="resource-back" href="/resources">← All resources</Link>
  <div className="resource-doc-head"><div><span className="resource-eyebrow dark">PLANNING TOOL · JODEL CLEANING</span><h1>Cleaning time calculator</h1><p>Choose rooms and tasks to get a preliminary time estimate for a weekly or fortnightly maintenance clean. JODEL’s price guide is £21.50 per hour, but your actual rate may be lower or higher; we confirm it before booking. This tool estimates time, not the final price.</p></div></div>
  <CleaningTimeCalculator/>
  <div className="resource-doc-bottom"><Link href="/resources">← Resources</Link><Link href="/#quote">Get a personalised quote →</Link></div>
</div></main>;}
