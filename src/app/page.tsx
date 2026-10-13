import Link from "next/link";
import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";
import { ArrowRight, ArrowUpRight, Calendar, Check, Clock, Mail, Phone, Pin, Sparkle } from "@/components/Icons";
import { site, whatsappHref } from "@/lib/site";

const services = [
  { title: "Regular home cleaning", description: "Weekly, fortnightly or one-off help to keep your home fresh and comfortable.", photo: "service-regular", label: "For the everyday" },
  { title: "Deep cleaning", description: "A more detailed clean when your home needs additional care and attention.", photo: "service-deep", label: "For a fresh start" },
  { title: "After builders cleaning", description: "Cleaning after renovation or building work, subject to a property assessment.", photo: "service-builders", label: "After the hard work" },
  { title: "End-of-tenancy cleaning", description: "A tailored clean for tenants, landlords and property managers ahead of a move.", photo: "service-tenancy", label: "For the next chapter" },
];

export default function Home() {
  const whatsapp = whatsappHref();
  return (
    <>
      <div className="site-announcement"><span className="announcement-dot" /> SPOTLESS SPACES <span className="announcement-star">✦</span> EXPERT CLEANERS</div>
      <header className="site-header" id="top">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="JODEL Cleaning home">
            <Image src="/jodel-logo.png" width={272} height={92} alt="JODEL Cleaning" className="brand-logo" priority />
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#services">Our services</a><a href="#how-it-works">How it works</a><a href="#about">Why JODEL</a><a href="#faq">FAQs</a>
          </nav>
          <a className="nav-contact" href="#quote">Get a free quote <ArrowUpRight /></a>
          <details className="mobile-menu"><summary aria-label="Open menu"><span /><span /><span /></summary>
            <nav aria-label="Mobile navigation"><a href="#services">Our services</a><a href="#how-it-works">How it works</a><a href="#about">Why JODEL</a><a href="#faq">FAQs</a><a href="#quote">Get a free quote</a></nav>
          </details>
        </div>
      </header>
      <main>
        <section className="hero section" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="tiny-symbol">✳</span> SPOTLESS SPACES. EXPERT CLEANERS.</div>
              <h1 id="hero-title">Life&apos;s busy.<br />Let&apos;s make <em>home</em><br /><span className="hero-last">feel easy<span className="period">.</span></span></h1>
              <p className="hero-description">From everyday upkeep to a proper deep clean, JODEL makes it easier to enjoy a home that feels fresh. Tell us what you need and receive a personalised quote.</p>
              <div className="hero-actions"><a href="#quote" className="button button-primary">Get your free quote <ArrowUpRight /></a><a href="#services" className="hero-secondary">Explore our services <ArrowRight /></a></div>
              <div className="hero-detail"><div className="hero-detail-icon"><Pin /></div><div><strong>Here to make life easier.</strong><span>Cleaning enquiries welcome in London and nearby areas.</span></div></div>
            </div>
            <div className="hero-visual" role="img" aria-label="A beautifully presented home interior">
              <div className="hero-image" /><span className="hero-image-circle">GOOD<br />TO BE<br />HOME <span>✳</span></span>
              <div className="hero-photo-card"><div className="card-mini-sparkle"><Sparkle /></div><div><span>THE JODEL FEELING</span><strong>Less cleaning.<br />More living.</strong></div></div>
              <div className="hero-image-caption">A FRESHER WAY TO FEEL AT HOME <span>— 01</span></div>
            </div>
          </div>
          <div className="container hero-bottom-line"><span><span className="line-dot" /> A clean that works around you</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="care-strip" aria-label="What to expect"><div className="container care-strip-inner"><span><Sparkle /> Thoughtful cleaning</span><span className="care-divider" /><span><Calendar /> Flexible enquiries</span><span className="care-divider" /><span><Check /> Clear, tailored quotes</span></div></section>

        <section className="section services-section" id="services" aria-labelledby="services-title"><div className="container">
          <div className="section-heading"><div><p className="eyebrow"><span className="tiny-symbol">✳</span> OUR SERVICES</p><h2 id="services-title">A clean for <em>every</em><br />kind of day<span className="period">.</span></h2></div><p>From your weekly routine to moving day, explore the cleaning services we can discuss for your property.</p></div>
          <div className="services-grid">
            {services.map((service, index) => <article className="service-card" key={service.title}>
              <div className={"service-photo " + service.photo}><span className="service-number">0{index + 1} / 04</span><span className="service-photo-label">{service.label}</span></div>
              <div className="service-info"><div><h3>{service.title}</h3><p>{service.description}</p></div><a href="#quote" aria-label={"Request a quote for " + service.title} className="service-link"><ArrowUpRight /></a></div>
            </article>)}
          </div>
          <div className="service-bottom"><p>Not sure which service you need? <strong>We'll help you choose.</strong></p><a href="#quote" className="inline-link">Ask for a quote <ArrowRight /></a></div>
        </div></section>

        <section className="breather" id="about" aria-labelledby="about-title"><div className="container breather-grid">
          <div className="breather-visual"><div className="breather-photo" role="img" aria-label="Bright and welcoming home" /><div className="breather-stamp">A LITTLE<br />MORE TIME<br />FOR YOU <span>↗</span></div></div>
          <div className="breather-copy"><p className="eyebrow"><span className="tiny-symbol">✳</span> THE JODEL WAY</p><h2 id="about-title">It's more than <em>clean.</em><br />It's coming home<br />to calm<span className="period">.</span></h2>
            <p>Every home is different. We keep things straightforward by listening to your requirements, discussing the work involved and agreeing a clear quote before a booking.</p>
            <div className="breather-points">
              <div><span className="round-icon"><Check /></span><div><h3>Tailored to your space</h3><p>Tell us what needs attention and we'll discuss the right cleaning scope.</p></div></div>
              <div><span className="round-icon"><Check /></span><div><h3>Clear pricing</h3><p>We'll explain your quotation before you decide whether to proceed.</p></div></div>
              <div><span className="round-icon"><Check /></span><div><h3>Easy to get started</h3><p>Make an enquiry online or contact us directly by phone or email.</p></div></div>
            </div>
            <a className="button button-outline" href="#quote">Let's talk cleaning <ArrowUpRight /></a>
          </div>
        </div></section>

        <section className="extras-section" aria-labelledby="extras-title"><div className="container extras-inner">
          <div><p className="eyebrow">THE FINISHING TOUCHES</p><h2 id="extras-title">Need a little <em>extra</em> attention?</h2><p>Let us know about additional tasks when requesting your quote. Availability and cost are confirmed before booking.</p></div>
          <div className="extras-list"><span><Check /> Oven &amp; hob cleaning</span><span><Check /> Fridge cleaning</span><span><Check /> Inside cupboards</span><span><Check /> Interior windows</span><a className="inline-link" href="#quote">Ask about extras <ArrowRight /></a></div>
        </div></section>

        <section className="section steps-section" id="how-it-works"><div className="container">
          <div className="steps-head"><p className="eyebrow"><span className="tiny-symbol">✳</span> SIMPLE FROM THE START</p><h2>Three little steps<br />to a <em>fresher space.</em></h2></div>
          <div className="steps-grid">
            <div className="step"><span className="step-num">01</span><div className="step-icon"><Sparkle /></div><h3>Tell us about your home</h3><p>Send your postcode, property details and the cleaning service you need.</p></div>
            <div className="step"><span className="step-num">02</span><div className="step-icon"><Clock /></div><h3>Receive a quote</h3><p>We review the request and confirm coverage, scope and price.</p></div>
            <div className="step"><span className="step-num">03</span><div className="step-icon"><Calendar /></div><h3>Arrange your clean</h3><p>We agree an appointment if the quotation and availability suit you.</p></div>
          </div>
        </div></section>

        <section className="location-section"><div className="container location-grid"><div className="location-icon"><Pin /></div><div><p className="eyebrow">WHERE WE WORK</p><h2>Cleaning near you<span className="period">?</span></h2><p>JODEL is based in the Bexley area. Send your postcode and we'll confirm whether we can help at your address.</p></div><a href="#quote" className="button button-light">Check your postcode <ArrowUpRight /></a></div></section>

        <section className="section quote-section" id="quote" aria-labelledby="quote-title"><div className="container quote-grid">
          <div className="quote-left"><p className="eyebrow"><span className="tiny-symbol">✳</span> LET'S GET STARTED</p><h2 id="quote-title">Your lovely,<br /><em>fresh start</em><br />begins here<span className="period">.</span></h2>
            <p>Tell us about your space and what needs doing. We'll review your details and respond with the next steps.</p>
            <div className="quote-note"><span className="note-icon"><Check /></span><span><strong>Free to enquire.</strong> No payment or booking commitment is required to request a quote.</span></div>
            <div className="quote-decoration" aria-hidden="true">✳</div>
            <div className="quote-direct"><p>Prefer to speak with us?</p>
              {site.phone && <a href={"tel:" + site.phone.replace(/\s/g, "")}><Phone />{site.phone}</a>}
              {site.email && <a href={"mailto:" + site.email}><Mail />{site.email}</a>}
              {site.whatsapp && <a href={whatsapp} target="_blank" rel="noopener noreferrer"><ArrowUpRight />Message us on WhatsApp</a>}
            </div>
          </div>
          <QuoteForm />
        </div></section>

        <section className="section faq-section" id="faq"><div className="container faq-grid">
          <div className="faq-left"><p className="eyebrow"><span className="tiny-symbol">✳</span> GOOD TO KNOW</p><h2>A few common<br /><em>questions.</em></h2><p>We're happy to help you understand what to expect before arranging a cleaning visit.</p><a href="#quote" className="inline-link">Get in touch <ArrowRight /></a></div>
          <div className="faq-items">
            <details><summary>How much does a clean cost?<span>+</span></summary><p>Pricing depends on your property, the service requested, the condition and any extras. Request a personalised quote before booking.</p></details>
            <details><summary>Which areas do you cover?<span>+</span></summary><p>We're based around Bexley and can check availability for surrounding areas. Share your postcode so we can confirm.</p></details>
            <details><summary>Can I request weekly or fortnightly cleaning?<span>+</span></summary><p>Yes. Let us know your preferred frequency and we'll discuss availability.</p></details>
            <details><summary>Is my enquiry a confirmed booking?<span>+</span></summary><p>No. We'll first confirm your requested service, quote and available dates.</p></details>
            <details><summary>Do you offer end-of-tenancy and after builders cleaning?<span>+</span></summary><p>Yes, you can request a quotation for either service. We may need additional property details to assess the work.</p></details>
          </div>
        </div></section>

        <section className="last-call"><div className="container last-call-inner"><span className="last-sparkle">✳</span><div><p>MORE TIME TO LIVE. LESS TIME TO CLEAN.</p><h2>Let's make room<br />for the <em>good stuff.</em></h2></div><a href="#quote" className="button button-white">Get a free quote <ArrowUpRight /></a></div></section>
      </main>
      <footer className="site-footer"><div className="container">
        <div className="footer-top"><div><Link href="/" className="footer-brand"><Image src="/jodel-logo.png" width={232} height={79} alt="JODEL Cleaning" className="footer-logo" /></Link><p>Spotless spaces. Expert cleaners. Home cleaning made simpler.</p></div>
          <div className="footer-links"><div><h3>EXPLORE</h3><a href="#services">Our services</a><a href="#how-it-works">How it works</a><a href="#about">Why JODEL</a><a href="#quote">Get a quote</a></div>
            <div><h3>GET IN TOUCH</h3>{site.phone && <a href={"tel:" + site.phone.replace(/\s/g, "")}>{site.phone}</a>}{site.email && <a href={"mailto:" + site.email}>{site.email}</a>}{site.whatsapp && <a href={whatsapp}>WhatsApp us</a>}<span>London, UK</span></div></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} JODEL Cleaning.</p><div><Link href="/privacy">Privacy notice</Link><a href="#top">Back to top ↑</a></div></div>
      </div></footer>
      {site.whatsapp && <a className="floating-contact" href={whatsapp} target="_blank" rel="noopener noreferrer">Chat with JODEL</a>}
    </>
  );
}
