import { useState } from "react";
import Reveal from "./Reveal.jsx";
import Icon from "./Icons.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { profile, socials } from "../data.js";

const whatsapp = socials.find((s) => s.id === "whatsapp");

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setSent(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // No backend: this opens the visitor's email app with the message filled in.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio message from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <header className="section-head section-head-center">
            <h2 id="contact-title" className="gradient-text">
              Let&rsquo;s Connect!
            </h2>
            <span className="bar" aria-hidden="true" />
            <p>Feel free to reach out for opportunities or just to say hello!</p>
          </header>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="contact-side">
              <ul className="contact-list">
                <li>
                  <a className="glass contact-item" href={`mailto:${profile.email}`}>
                    <span className="ci-ico">
                      <Icon name="mail" />
                    </span>
                    <span className="ci-text">
                      <span className="ci-label">Email</span>
                      <span className="ci-value">{profile.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="glass contact-item" href={profile.phoneHref}>
                    <span className="ci-ico">
                      <Icon name="phone" />
                    </span>
                    <span className="ci-text">
                      <span className="ci-label">Phone</span>
                      <span className="ci-value">{profile.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="glass contact-item"
                    href={whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="ci-ico">
                      <Icon name="whatsapp" />
                    </span>
                    <span className="ci-text">
                      <span className="ci-label">WhatsApp</span>
                      <span className="ci-value">{profile.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="glass contact-item">
                    <span className="ci-ico">
                      <Icon name="pin" />
                    </span>
                    <span className="ci-text">
                      <span className="ci-label">Location</span>
                      <span className="ci-value">{profile.location}</span>
                    </span>
                  </div>
                </li>
              </ul>
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="glass form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
                <Icon name="arrowRight" size={18} />
              </button>
              <p className="form-note" role="status">
                {sent
                  ? "Your email app should open with the message ready to send. If it does not, email me directly at the address shown."
                  : "This form opens your email app with the message filled in. Messages are not stored on this website."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
