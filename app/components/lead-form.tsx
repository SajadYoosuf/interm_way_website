"use client";

import { FormEvent, useState } from "react";

const PHONE = "919037364529";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const course = String(data.get("course") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = `Hi Internway, I'm ${name}. I'm studying ${course} and interested in ${interest}. Please help me explore the right international hospitality pathway.`;

    setSubmitted(true);
    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-header"><span>✦</span><p>Let’s find your pathway</p></div>
      <label>Full name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
      <label>What are you studying?<input name="course" type="text" autoComplete="organization-title" placeholder="e.g. Hotel Management" required /></label>
      <label>I’m interested in<select name="interest" defaultValue="" required><option value="" disabled>Select a pathway</option><option>International Hospitality Internship</option><option>Culinary Career Pathway</option><option>Hotel Operations Pathway</option><option>Not sure — I need guidance</option></select></label>
      <button className="button button-gold" type="submit">Start on WhatsApp <span className="whatsapp-glyph" aria-hidden="true" /></button>
      <small className="form-note" aria-live="polite">{submitted ? "WhatsApp opened — send the prepared message to connect." : "No spam. Just a helpful conversation about your next step."}</small>
    </form>
  );
}
