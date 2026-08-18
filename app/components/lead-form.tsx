"use client";

import { FormEvent, useState } from "react";

const PHONE = "919037364529";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const education = String(data.get("education") || "").trim();
    const location = String(data.get("location") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = `Hi Internway, I would like to enquire about an international hospitality internship.\n\nName: ${name}\nPhone: ${phone}\nEducation qualification: ${education}\nLocation: ${location}\nEmail: ${email}`;

    setSubmitted(true);
    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-header"><span>✦</span><p>Start your internship enquiry</p></div>
      <label>Full name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
      <label>Phone number<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Your phone number" required /></label>
      <label>Education qualification<input name="education" type="text" autoComplete="organization-title" placeholder="e.g. Diploma in Hotel Management" required /></label>
      <label>Your location<input name="location" type="text" autoComplete="address-level2" placeholder="City, state or country" required /></label>
      <label>Email address<input name="email" type="email" inputMode="email" autoComplete="email" placeholder="you@example.com" required /></label>
      <button className="button button-gold" type="submit">Start on WhatsApp <span className="whatsapp-glyph" aria-hidden="true" /></button>
      <small className="form-note" aria-live="polite">{submitted ? "WhatsApp opened — send the prepared message to connect." : "No spam. Just a helpful conversation about your next step."}</small>
    </form>
  );
}
