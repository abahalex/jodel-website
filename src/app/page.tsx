import Link from "next/link";
import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";
import { ArrowRight, ArrowUpRight, Check, Mail, Phone, Pin, Sparkle } from "@/components/Icons";
import { site, whatsappHref } from "@/lib/site";

const services = [
  { number: "01", title: "Regular home cleaning", short: "Keep on top of everyday life.", text: "Weekly, fortnightly or occasional cleaning shaped around your home and routine.", image: "regular" },
  { number: "02", title: "Deep cleaning", short: "A proper reset for your space.", text: "Detailed attention for kitchens, bathrooms and the areas that need extra care.", image: "deep" },
  { number: "03", title: "End-of-tenancy cleaning", short: "Move on with one less worry.", text: "Cleaning for tenants, landlords and property managers preparing for a handover.", image: "tenancy" },
  { number: "04", title: "After-builders cleaning", short: "The finishing touch.", text: "Cleaning following renovation or building work, quoted to suit the property's condition.", image: "builders" },
];

const extras = ["Oven & hob cleaning", "Fridge cleaning", "Inside cupboards", "Interior windows"];
const questions = [
  { question: "How much will my clean cost?", answer: "Our guide price is £21.50 per hour. Your actual rate can be lower or higher depending on the service and cleaning requirements. We confirm your personalised quotation before booking. There is no separate agency fee or service charge." },
  { question: "How are extras such as oven cleaning charged?", answer: "Extras such as oven and hob cleaning depend on the time needed, rather than a fixed add-on price. Tell us which extras you need and we will discuss the time and price in your quotation." },
  { question: "Which areas do you cover?", answer: "JODEL is based in Bexley, South East London. Share your postcode and we'll confirm whether we're able to cover your address." },
  { question: "Can I book a regular clean?", answer: "Yes. You can enquire about weekly or fortnightly cleaning, and we'll confirm availability before arranging a visit." },
  { question: "Do I have to pay when I enquire?", answer: "No. An enquiry is not a confirmed booking, and there's no payment required to request a quote. We'll discuss the work, price and available dates with you first." },
];

export default function Home() {
  const whatsApp = whatsappHref();
  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span><span className="utility-dot" aria-hidden="true" /> BEXLEY &amp; SURROUNDING AREAS</span>
          <a href={`mailto:${site.email}`}>ENQUIRIES: {site.email}</a>
        </div>
      </div>
      <header className="site-header" id="top">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="JODEL Cleaning homepage">
            <Image src="/jodel-logo.png" width={252} height={85} alt="JODEL Cleaning" priority />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a><a href="#approach">Our approach</a><a href="#process">How it works</a><a href="#questions">FAQs</a><Link href="/resources">Resources</Link>
          </nav>
          <a className="header-cta" href="#quote">Get a quote <ArrowUpRight /></a>
          <details className="mobile-nav">
            <summary aria-label="Open navigation menu"><span></span><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              <a href="#services">Services</a><a href="#approach">Our approach</a><a href="#process">How it works</a><a href="#questions">FAQs</a><Link href="/resources">Resources</Link><a href="#quote">Get a free quote <ArrowUpRight /></a>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content shell">
            <div className="hero-text">
              <p className="kicker kicker-light"><span className="kicker-rule" /> HOME CLEANING, SIMPLIFIED</p>
              <h1 id="hero-title">A clean home.<br /><span>A clear mind.</span></h1>
              <p className="hero-lede">Come home to a space that feels good. From your weekly clean to a complete reset, JODEL helps take cleaning off your to-do list. Our guide price is £21.50 per hour, with no additional agency or service fee; the confirmed hourly rate may be higher or lower.</p>
              <div className="hero-actions">
                <a className="action action-yellow" href="#quote">Request a free quote <ArrowUpRight /></a>
                <a className="text-link light-link" href="#services">View cleaning services <ArrowRight /></a>
              </div>
              <div className="hero-local"><Pin /><span>Based in Bexley, serving nearby areas of South East London.</span></div>
            </div>
            <div className="hero-media">
              <div className="hero-photo" role="img" aria-label="Bright modern home interior, illustrative photograph" />
              <div className="hero-photo-caption"><span>01 — MADE FOR REAL HOMES</span><span>JODEL CLEANING</span></div>
            </div>
          </div>
        </section>

        <div className="promise-bar" aria-label="What JODEL offers">
          <div className="shell promise-list">
            <span><Check /> Personalised quotes</span>
            <span><Check /> One-off &amp; recurring cleaning</span>
            <span><Check /> Clear, simple enquiries</span>
          </div>
        </div>

        <section className="block services" id="services" aria-labelledby="services-heading">
          <div className="shell">
            <div className="section-intro">
              <div><p className="kicker">WHAT WE DO</p><h2 id="services-heading">A service for<br />every kind of <em>clean.</em></h2></div>
              <p>Whether life is busy, you're moving home or your space needs extra attention, we'll discuss a clean that works for you.</p>
            </div>
            <div className="service-grid">
              {services.map(item => (
                <article className="service-tile" key={item.number}>
                  <a className="service-image-link" href="#quote" aria-label={`Enquire about ${item.title}`}>
                    <div className={`service-image image-${item.image}`} role="img" aria-label={`Illustrative photograph for ${item.title}`} />
                    <span className="service-index">{item.number} / 04</span>
                  </a>
                  <div className="service-detail">
                    <div><p className="service-caption">{item.short}</p><h3>{item.title}</h3><p className="service-description">{item.text}</p></div>
                    <a className="service-arrow" href="#quote" aria-label={`Request a quote for ${item.title}`}><ArrowUpRight /></a>
                  </div>
                </article>
              ))}
            </div>
            <div className="service-note"><p>Not sure which clean is right? <strong>Tell us what you need and we'll help you decide.</strong></p><a className="text-link" href="#quote">Talk to JODEL <ArrowRight /></a></div>
          </div>
        </section>

        <section className="block approach" id="approach" aria-labelledby="approach-heading">
          <div className="shell approach-layout">
            <div className="approach-intro">
              <p className="kicker kicker-light">WHY JODEL</p>
              <h2 id="approach-heading">Good cleaning starts with <em>listening.</em></h2>
              <p>There isn't one cleaning routine that fits every home. We start by understanding yours, then agree what needs doing before work begins.</p>
              <a className="action action-outline-light" href="#quote">Tell us about your home <ArrowUpRight /></a>
            </div>
            <div className="approach-list">
              <div className="approach-row"><span>01</span><div><h3>Made for your home</h3><p>Choose the cleaning you need, not a one-size-fits-all package.</p></div></div>
              <div className="approach-row"><span>02</span><div><h3>Know what to expect</h3><p>We discuss the scope and provide a clear quotation before confirming an appointment.</p></div></div>
              <div className="approach-row"><span>03</span><div><h3>Easy to reach</h3><p>Request a quote online or get in touch directly by phone or email.</p></div></div>
            </div>
          </div>
        </section>

        <section className="block process" id="process" aria-labelledby="process-heading">
          <div className="shell">
            <div className="section-intro process-head"><div><p className="kicker">HOW IT WORKS</p><h2 id="process-heading">From enquiry<br />to a <em>fresher home.</em></h2></div><p>No complicated booking system. Just the details we need to get started.</p></div>
            <div className="process-rows">
              <div className="process-row"><span className="process-number">01</span><h3>Tell us what you need</h3><p>Share your postcode, property details and type of cleaning.</p><span className="process-symbol"><ArrowRight /></span></div>
              <div className="process-row"><span className="process-number">02</span><h3>Receive a tailored quote</h3><p>We'll review the request, discuss the work and confirm the price.</p><span className="process-symbol"><ArrowRight /></span></div>
              <div className="process-row"><span className="process-number">03</span><h3>Agree a suitable time</h3><p>If the quote works for you, we'll confirm availability and arrange the clean.</p><span className="process-symbol"><Check /></span></div>
            </div>
          </div>
        </section>

        <section className="extras" aria-labelledby="extras-heading">
          <div className="shell extras-layout">
            <div><p className="kicker kicker-light">THE LITTLE EXTRAS</p><h2 id="extras-heading">A little more attention<br />where it matters.</h2><p>Ask about additional tasks when you request a quotation. Extras such as oven cleaning are time-dependent, not fixed-price add-ons; we will agree the expected time and cost with you.</p></div>
            <div className="extras-grid">{extras.map(extra => <span key={extra}><Check />{extra}</span>)}</div>
          </div>
        </section>

        <section className="block quote" id="quote" aria-labelledby="quote-heading">
          <div className="shell quote-layout">
            <div className="quote-copy">
              <p className="kicker">LET'S GET STARTED</p>
              <h2 id="quote-heading">Tell us about<br />your <em>space.</em></h2>
              <p>Our guide is £21.50 per hour, although the confirmed rate may be higher or lower. There are no separate agency or service charges. Share a few details and we'll provide a personalised quote, including any time-dependent extras.</p>
              <div className="quote-promise"><Check /><span><strong>No pressure, no payment.</strong><br />Requesting a quote doesn't confirm a booking.</span></div>
              <div className="contact-card">
                <p>PREFER TO TALK?</p>
                {site.phone && <a href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone /> {site.phone}</a>}
                {site.email && <a href={`mailto:${site.email}`}><Mail /> {site.email}</a>}
                {site.whatsapp && <a href={whatsApp} target="_blank" rel="noopener noreferrer"><ArrowUpRight /> WhatsApp JODEL</a>}
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="block questions" id="questions" aria-labelledby="questions-heading">
          <div className="shell questions-layout">
            <div><p className="kicker">FREQUENTLY ASKED</p><h2 id="questions-heading">Good to <em>know.</em></h2><p>A few useful things before you book.</p></div>
            <div className="question-list">
              {questions.map(({question, answer}) => (
                <details key={question}>
                  <summary>{question}<span className="faq-plus" aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-heading">
          <div className="shell closing-layout"><div><p className="kicker kicker-light">JODEL CLEANING</p><h2 id="closing-heading">A fresher home starts here.</h2></div><a className="action action-yellow" href="#quote">Get your free quote <ArrowUpRight /></a></div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footer-main">
            <div><Link href="/" aria-label="JODEL Cleaning homepage"><Image src="/jodel-logo.png" width={225} height={76} alt="JODEL Cleaning" /></Link><p>Spotless spaces. Expert cleaners.<br />Based in Bexley, South East London.</p></div>
            <nav aria-label="Footer navigation"><h3>EXPLORE</h3><a href="#services">Our services</a><a href="#approach">Our approach</a><Link href="/resources">Client & cleaner resources</Link><a href="#quote">Get a quote</a><a href="/privacy">Privacy notice</a><a href="/terms">Terms of business</a></nav>
            <div className="footer-contact"><h3>CONTACT</h3>{site.phone && <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>}{site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}</div>
          </div>
          <div className="footer-end"><span>© {new Date().getFullYear()} JODEL Cleaning. All rights reserved.</span><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </>
  );
}
