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

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5h16v11H4zM4.8 7.2 12 13l7.2-5.8" /></svg>
);

const programs = [
  { number: "01", title: "Housekeeping", copy: "Build professional room operations, hygiene and guest-ready quality standards.", tag: "Hotel management" },
  { number: "02", title: "Front Office", copy: "Develop confidence in reservations, reception, communication and guest service.", tag: "Hotel management" },
  { number: "03", title: "F&B Service", copy: "Gain practical exposure to restaurant service, guest care and dining operations.", tag: "Hotel management" },
  { number: "04", title: "Culinary", copy: "Strengthen kitchen discipline, preparation skills and international food practices.", tag: "Hotel management" },
  { number: "05", title: "Production", copy: "Explore structured food production workflows in professional hospitality kitchens.", tag: "Hotel management" },
];

const galleryPhotos = [
  { src: "/gallery/students-arrival.jpeg", alt: "Internway hospitality students arriving with their luggage", caption: "The journey begins" },
  { src: "/gallery/hospitality-training.jpeg", alt: "Hospitality students participating in a training discussion", caption: "Learning together" },
  { src: "/gallery/student-life-vietnam.jpeg", alt: "Internway students experiencing daily life in Vietnam", caption: "Life beyond the classroom" },
  { src: "/gallery/cultural-experience.jpeg", alt: "Internway students enjoying a cultural experience abroad", caption: "New places, new perspectives" },
  { src: "/gallery/culinary-internship.jpeg", alt: "Hospitality student gaining culinary experience in a professional kitchen", caption: "Culinary experience in action" },
];

const stories = [
  {
    speaker: "Shahzad · Founder & CEO",
    title: "Your global hospitality career starts here",
    copy: "Meet Internway—your gateway to international hospitality internships, education pathways, career development, global jobs and meaningful industry exposure with leading hotels.",
    note: "Learn. Experience. Grow. Succeed.",
    embed: "https://www.instagram.com/reel/DZc3ruCKmjy/embed/",
  },
  {
    speaker: "Haleem · Co-founder & COO",
    title: "The reality of some internships",
    copy: "The right internship should build your career, expand your international exposure and help you return with confidence—not leave you overworked or drained. Choose a safe, healthy opportunity that respects your future.",
    note: "Choose wisely. Your future deserves better.",
    embed: "https://www.instagram.com/reel/Da51uSvP74k/embed/",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Internway home"><span className="brand-crop"><Image src="/internway-logo.jpg" alt="Internway" width={132} height={132} priority /></span></a>
        <nav aria-label="Primary navigation"><a href="#pathways">Pathways</a><a href="#gallery">Gallery</a><a href="#process">How it works</a><a href="#faq">FAQs</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="#contact">Get started <ArrowIcon /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> For hotel management students</div>
          <h1><span className="hero-seo-title">International hospitality internships.</span><br /><em>Your career, now global.</em></h1>
          <p className="hero-intro">Explore hotel management internships in Vietnam, Hong Kong and Denmark across housekeeping, front office, F&amp;B service, culinary and production.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#contact">Explore your pathway <ArrowIcon /></a>
            <a className="text-link" href="tel:+919037364529"><PhoneIcon /> Talk to an advisor</a>
          </div>
          <div className="quick-facts" aria-label="Key benefits">
            <div><strong>3</strong><span>Destinations</span></div><div><strong>5</strong><span>Departments</span></div><div><strong>1:1</strong><span>Guidance</span></div>
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
          <p><strong>Internway is a Calicut-based hospitality career pathway company for hotel management students.</strong> We currently guide internship enquiries for Vietnam, Hong Kong and Denmark across key hotel departments.</p>
          <div className="answer-facts" aria-label="Internway at a glance">
            <div><span>Based in</span><strong>Calicut, Kerala</strong></div>
            <div><span>Current locations</span><strong>Vietnam · Hong Kong · Denmark</strong></div>
            <div><span>Internship domain</span><strong>Hotel management</strong></div>
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pathways section" id="pathways">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Hotel management internships</p><h2>Choose the department that fits <em>your ambition.</em></h2></div>
          <p>Explore five core hotel departments, then speak with our team about the right location and pathway for your qualification.</p>
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

      <section className="stories-section section" id="stories" aria-labelledby="stories-title">
        <div className="stories-heading">
          <div><p className="eyebrow"><span /> Stories from Internway</p><h2 id="stories-title">Guidance, experience and <em>student progress.</em></h2></div>
          <p>Hear directly from our founders and see how international hospitality pathways take shape in the real world.</p>
        </div>
        <div className="stories-grid">
          {stories.map((story, index) => (
            <article className="story-card" key={story.embed}>
              <div className="story-video">
                <iframe
                  src={story.embed}
                  title={`${story.title} — Instagram Reel ${index + 1}`}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="story-copy">
                <span>{story.speaker}</span>
                <h3>{story.title}</h3>
                <p>{story.copy}</p>
                <strong>{story.note}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="world-section">
        <div className="world-copy">
          <p className="eyebrow light"><span /> Current internship locations</p><h2>Three destinations.<br />One <em>global direction.</em></h2>
          <p>Explore current hospitality internship opportunities in Vietnam, Hong Kong and Denmark.</p>
          <div className="destination-list" aria-label="Current internship locations"><span>Vietnam</span><span>Hong Kong</span><span>Denmark</span></div>
          <a className="button button-light" href="#contact">See what’s possible <ArrowIcon /></a>
        </div>
        <div className="world-art" aria-hidden="true"><Image src="/global-pathways.jpg" alt="" fill sizes="(max-width: 719px) 100vw, 58vw" /></div>
      </section>

      <section className="gallery-section section" id="gallery" aria-labelledby="gallery-title">
        <div className="section-heading gallery-heading">
          <div><p className="eyebrow"><span /> Internway gallery</p><h2 id="gallery-title">Learning, travelling and <em>growing globally.</em></h2></div>
          <p>Real moments from our students’ hospitality journey, training, cultural experiences and professional development.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-media gallery-feature">
            <video controls playsInline preload="metadata" poster="/gallery/students-arrival.jpeg">
              <source src="/gallery/internway-student-journey.mp4" type="video/mp4" />
              <track kind="captions" src="/gallery/internway-student-journey.vtt" srcLang="en" label="English" default />
              Your browser does not support embedded video.
            </video>
            <figcaption>Student journey · Internway</figcaption>
          </figure>
          {galleryPhotos.map((photo, index) => (
            <figure className={`gallery-media${index === galleryPhotos.length - 1 ? " gallery-wide" : ""}`} key={photo.src}>
              <Image src={photo.src} alt={photo.alt} fill sizes={index === galleryPhotos.length - 1 ? "(max-width: 719px) 100vw, 100vw" : "(max-width: 719px) 100vw, 33vw"} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading compact"><div><p className="eyebrow"><span /> Simple by design</p><h2>Three steps to your <em>next chapter.</em></h2></div></div>
        <div className="steps">
          <article><span>01</span><div><h3>Tell us about you</h3><p>Share your contact details, education qualification and current location.</p></div></article>
          <article><span>02</span><div><h3>Explore the fit</h3><p>Review suitable destinations and hotel departments with our team.</p></div></article>
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
            <a href="mailto:internwayint@gmail.com"><EmailIcon /><span><small>Email us</small>internwayint@gmail.com</span></a>
            <div><span className="pin">⌖</span><span><small>Visit us</small>HiLITE Business Park, Calicut, Kerala</span></div>
          </div>
        </div>
        <LeadForm />
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-crop"><Image src="/internway-logo.jpg" alt="Internway" width={132} height={132} /></span><p>Bridging education and employment.</p></div>
        <div className="footer-links"><a href="#about">About</a><a href="#leadership">Leadership</a><a href="#pathways">Pathways</a><a href="#stories">Stories</a><a href="#gallery">Gallery</a><a href="#process">How it works</a><a href="#faq">FAQs</a><a href="https://www.instagram.com/internway_int/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
        <p className="copyright">© 2026 Internway. All rights reserved.</p>
      </footer>

      <div className="floating-actions" aria-label="Quick contact">
        <a className="fab fab-call" href="tel:+919037364529" aria-label="Call Internway"><PhoneIcon /></a>
        <a className="fab fab-whatsapp" href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Internway, I'd like to know more about your international hospitality pathways.")}`} target="_blank" rel="noreferrer" aria-label="Message Internway on WhatsApp"><span className="whatsapp-glyph" aria-hidden="true" /></a>
      </div>
    </main>
  );
}
