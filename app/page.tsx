import Image from "next/image";
import { LeadForm } from "./components/lead-form";
import { FAQS, LEADERSHIP } from "./seo-data";

const PHONE = "919037364529";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 3.8 9.5 3a1.4 1.4 0 0 1 1.7.8l1.2 3a1.4 1.4 0 0 1-.4 1.6l-1.4 1.2a14 14 0 0 0 3.8 3.8l1.2-1.4a1.4 1.4 0 0 1 1.6-.4l3 1.2a1.4 1.4 0 0 1 .8 1.7l-.8 2.4a3.2 3.2 0 0 1-3.1 2.2C10.4 18.5 5.5 13.6 4.9 6.9a3.2 3.2 0 0 1 2.2-3.1Z" /></svg>
);

const programs = [
  { number: "01", title: "Hotel Operations", copy: "Build practical confidence across front office, food service and guest experience.", tag: "Hospitality" },
  { number: "02", title: "Culinary Pathways", copy: "Turn classroom foundations into real-world kitchen and service experience.", tag: "Culinary" },
  { number: "03", title: "Career Pathways", copy: "A guided next step for hotel management students ready to go international.", tag: "Career" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Internway home"><span className="brand-crop"><Image src="/internway-logo.jpg" alt="Internway" width={132} height={132} priority /></span></a>
        <nav aria-label="Primary navigation"><a href="#pathways">Pathways</a><a href="#process">How it works</a><a href="#faq">FAQs</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="#contact">Get started <ArrowIcon /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> For hotel management students</div>
          <h1><span className="hero-seo-title">International hospitality internships.</span><br /><em>Your career, now global.</em></h1>
          <p className="hero-intro">Internway helps hotel management students explore international hospitality internships and career pathways that bridge education and employment.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#contact">Explore your pathway <ArrowIcon /></a>
            <a className="text-link" href="tel:+919037364529"><PhoneIcon /> Talk to an advisor</a>
          </div>
          <div className="quick-facts" aria-label="Key benefits">
            <div><strong>Global</strong><span>Opportunities</span></div><div><strong>1:1</strong><span>Guidance</span></div><div><strong>Career</strong><span>Focused</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><Image src="/bridge-careers.jpg" alt="Hospitality students learning culinary skills" fill sizes="(max-width: 719px) 100vw, 42vw" priority /></div>
          <div className="visual-note"><span className="note-dot">✦</span><div><strong>Bridge the gap</strong><small>Education → Employment</small></div></div>
        </div>
      </section>

      <section className="answer-section section" id="about" aria-labelledby="about-title">
        <div className="answer-intro">
          <p className="eyebrow"><span /> What is Internway?</p>
          <h2 id="about-title">A clearer route from hotel school to <em>international experience.</em></h2>
        </div>
        <div className="answer-copy">
          <p><strong>Internway is a Calicut-based hospitality career pathway company for hotel management students.</strong> We help students explore international hospitality internships, hotel operations pathways and culinary career directions through a direct, guidance-led conversation.</p>
          <div className="answer-facts" aria-label="Internway at a glance">
            <div><span>Based in</span><strong>Calicut, Kerala</strong></div>
            <div><span>Built for</span><strong>Hospitality students</strong></div>
            <div><span>Focused on</span><strong>International pathways</strong></div>
          </div>
        </div>
      </section>

      <section className="leadership-section section" id="leadership" aria-labelledby="leadership-title">
        <div className="leadership-heading">
          <p className="eyebrow"><span /> Meet the founders</p>
          <h2 id="leadership-title">The people guiding <em>Internway forward.</em></h2>
        </div>
        <div className="leadership-grid">
          {LEADERSHIP.map((person) => (
            <article className="leader-card" key={person.name}>
              <div className="leader-initial" aria-hidden="true">{person.name.charAt(0)}</div>
              <div className="leader-content">
                <span>{person.role}</span>
                <h3>{person.name}</h3>
                <p>{person.description}</p>
              </div>
            </article>
          ))}
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
        <div className="world-art" aria-hidden="true"><Image src="/global-pathways.jpg" alt="" fill sizes="(max-width: 719px) 100vw, 58vw" /></div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading compact"><div><p className="eyebrow"><span /> Simple by design</p><h2>Three steps to your <em>next chapter.</em></h2></div></div>
        <div className="steps">
          <article><span>01</span><div><h3>Tell us about you</h3><p>Share your course, interests and career direction.</p></div></article>
          <article><span>02</span><div><h3>Explore the fit</h3><p>Speak with our team and understand suitable pathways.</p></div></article>
          <article><span>03</span><div><h3>Move forward</h3><p>Get clear guidance for the next stage of your journey.</p></div></article>
        </div>
      </section>

      <section className="faq-section section" id="faq" aria-labelledby="faq-title">
        <div className="faq-heading">
          <div><p className="eyebrow"><span /> Student questions</p><h2 id="faq-title">International hospitality internships, <em>clearly answered.</em></h2></div>
          <p>Quick, direct answers about Internway, eligibility, pathways and how to begin.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<b aria-hidden="true">+</b></summary>
              <p>{item.answer}</p>
            </details>
          ))}
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
        <LeadForm />
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-crop"><Image src="/internway-logo.jpg" alt="Internway" width={132} height={132} /></span><p>Bridging education and employment.</p></div>
        <div className="footer-links"><a href="#about">About</a><a href="#leadership">Leadership</a><a href="#pathways">Pathways</a><a href="#process">How it works</a><a href="#faq">FAQs</a><a href="https://www.instagram.com/internway_int/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
        <p className="copyright">© 2026 Internway. All rights reserved.</p>
      </footer>

      <div className="floating-actions" aria-label="Quick contact">
        <a className="fab fab-call" href="tel:+919037364529" aria-label="Call Internway"><PhoneIcon /></a>
        <a className="fab fab-whatsapp" href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Internway, I'd like to know more about your international hospitality pathways.")}`} target="_blank" rel="noreferrer" aria-label="Message Internway on WhatsApp"><span className="whatsapp-glyph" aria-hidden="true" /></a>
      </div>
    </main>
  );
}
