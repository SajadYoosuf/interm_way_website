"use client";

import { FormEvent, useState } from "react";

const PHONE = "919037364529";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 3.8 9.5 3a1.4 1.4 0 0 1 1.7.8l1.2 3a1.4 1.4 0 0 1-.4 1.6l-1.4 1.2a14 14 0 0 0 3.8 3.8l1.2-1.4a1.4 1.4 0 0 1 1.6-.4l3 1.2a1.4 1.4 0 0 1 .8 1.7l-.8 2.4a3.2 3.2 0 0 1-3.1 2.2C10.4 18.5 5.5 13.6 4.9 6.9a3.2 3.2 0 0 1 2.2-3.1Z" /></svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.4 11.8a8.3 8.3 0 0 1-12.3 7.3l-4.5 1.2 1.2-4.4A8.3 8.3 0 1 1 20.4 11.8Z" />
    <path d="M8.4 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.8 2c.1.3.1.5-.1.7l-.6.8c-.2.2-.3.4-.1.7.5 1 1.2 1.8 2.1 2.4.8.5 1.4.8 1.7.9.3.1.5 0 .7-.2l.9-1.1c.2-.3.5-.3.7-.2l2 .9c.3.1.4.2.5.4.1.2.1 1-.3 1.9-.4.8-1.6 1.5-2.6 1.6-.7.1-1.7.2-4.7-1.1-3.9-1.7-6.4-5.8-6.6-6.1-.2-.3-1.6-2.1-1.5-4 .1-1.8 1-2.7 1.4-3.1Z" />
  </svg>
);

const programs = [
  { number: "01", title: "Hotel Operations", copy: "Build practical confidence across front office, food service and guest experience.", tag: "Hospitality" },
  { number: "02", title: "Culinary Pathways", copy: "Turn classroom foundations into real-world kitchen and service experience.", tag: "Culinary" },
  { number: "03", title: "Career Pathways", copy: "A guided next step for hotel management students ready to go international.", tag: "Career" },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const course = String(data.get("course") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = `Hi Internway, I'm ${name}. I'm studying ${course} and interested in ${interest}. Please help me explore the right international hospitality pathway.`;
    setSubmitted(true);
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Internway home"><span className="brand-crop"><img src="/internway-logo.jpg" alt="Internway" /></span></a>
        <nav aria-label="Primary navigation"><a href="#pathways">Pathways</a><a href="#process">How it works</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="#contact">Get started <ArrowIcon /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> International hospitality internships</div>
          <h1>Your career.<br /><em>Now global.</em></h1>
          <p className="hero-intro">Internway helps hotel management students bridge the gap between education and employment through international hospitality pathways.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#contact">Explore your pathway <ArrowIcon /></a>
            <a className="text-link" href="tel:+919037364529"><PhoneIcon /> Talk to an advisor</a>
          </div>
          <div className="quick-facts" aria-label="Key benefits">
            <div><strong>Global</strong><span>Opportunities</span></div><div><strong>1:1</strong><span>Guidance</span></div><div><strong>Career</strong><span>Focused</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src="/bridge-careers.jpg" alt="Hospitality students learning culinary skills" /></div>
          <div className="visual-note"><span className="note-dot">✦</span><div><strong>Bridge the gap</strong><small>Education → Employment</small></div></div>
        </div>
      </section>

      <section className="pathways section" id="pathways">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Find your direction</p><h2>A pathway built around <em>your ambition.</em></h2></div>
          <p>Start where you are. We help you understand the right route forward and take the next step with clarity.</p>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.number}>
              <div className="card-top"><span>{program.number}</span><b>{program.tag}</b></div><h3>{program.title}</h3><p>{program.copy}</p>
              <a href="#contact" aria-label={`Explore ${program.title}`}>Explore pathway <ArrowIcon /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="world-section">
        <div className="world-copy">
          <p className="eyebrow light"><span /> Think beyond borders</p><h2>From Calicut<br />to the <em>world.</em></h2>
          <p>International exposure can change how you work, communicate and see your future in hospitality.</p>
          <a className="button button-light" href="#contact">See what’s possible <ArrowIcon /></a>
        </div>
        <div className="world-art" aria-hidden="true"><img src="/global-pathways.jpg" alt="" /></div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading compact"><div><p className="eyebrow"><span /> Simple by design</p><h2>Three steps to your <em>next chapter.</em></h2></div></div>
        <div className="steps">
          <article><span>01</span><div><h3>Tell us about you</h3><p>Share your course, interests and career direction.</p></div></article>
          <article><span>02</span><div><h3>Explore the fit</h3><p>Speak with our team and understand suitable pathways.</p></div></article>
          <article><span>03</span><div><h3>Move forward</h3><p>Get clear guidance for the next stage of your journey.</p></div></article>
        </div>
      </section>

      <section className="lead-section" id="contact">
        <div className="lead-copy">
          <p className="eyebrow light"><span /> Your first step starts here</p><h2>Ready to make hospitality your <em>global career?</em></h2>
          <p>Send us a few details. Your message will open directly in WhatsApp so our team can continue the conversation.</p>
          <div className="contact-details">
            <a href="tel:+919037364529"><PhoneIcon /><span><small>Call us</small>+91 90373 64529</span></a>
            <div><span className="pin">⌖</span><span><small>Visit us</small>HiLITE Business Park, Calicut, Kerala</span></div>
          </div>
        </div>
        <form className="lead-form" onSubmit={handleSubmit}>
          <div className="form-header"><span>✦</span><p>Let’s find your pathway</p></div>
          <label>Full name<input name="name" type="text" placeholder="Your name" required /></label>
          <label>What are you studying?<input name="course" type="text" placeholder="e.g. Hotel Management" required /></label>
          <label>I’m interested in<select name="interest" defaultValue="" required><option value="" disabled>Select a pathway</option><option>International Hospitality Internship</option><option>Culinary Career Pathway</option><option>Hotel Operations Pathway</option><option>Not sure — I need guidance</option></select></label>
          <button className="button button-gold" type="submit">Start on WhatsApp <WhatsAppIcon /></button>
          <small className="form-note">{submitted ? "WhatsApp opened — send the prepared message to connect." : "No spam. Just a helpful conversation about your next step."}</small>
        </form>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-crop"><img src="/internway-logo.jpg" alt="Internway" /></span><p>Bridging education and employment.</p></div>
        <div className="footer-links"><a href="#pathways">Pathways</a><a href="#process">How it works</a><a href="https://www.instagram.com/internway_int/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
        <p className="copyright">© 2026 Internway. All rights reserved.</p>
      </footer>

      <div className="floating-actions" aria-label="Quick contact">
        <a className="fab fab-call" href="tel:+919037364529" aria-label="Call Internway"><PhoneIcon /></a>
        <a className="fab fab-whatsapp" href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Internway, I'd like to know more about your international hospitality pathways.")}`} target="_blank" rel="noreferrer" aria-label="Message Internway on WhatsApp"><WhatsAppIcon /></a>
      </div>
    </main>
  );
}
