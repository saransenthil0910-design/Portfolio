import { useEffect, useState } from "react";
import Icon from "./Icons.jsx";
import { navLinks, profile } from "../data.js";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Change the navbar appearance while scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close the mobile menu when the screen becomes wide
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const isDark = theme === "dark";

  return (
    <header className={`navbar ${scrolled || open ? "navbar-solid" : ""}`}>
      <div className="container navbar-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden="true">
            S
          </span>
          <span className="brand-name">{profile.shortName}</span>
        </a>

        <div className="nav-right">
          <nav
            id="primary-nav"
            className={`nav-links ${open ? "is-open" : ""}`}
            aria-label="Primary"
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={active === link.id ? "active" : ""}
                    aria-current={active === link.id ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Light theme" : "Dark theme"}
          >
            <Icon name={isDark ? "sun" : "moon"} size={18} />
          </button>

          <button
            type="button"
            className={`hamburger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
