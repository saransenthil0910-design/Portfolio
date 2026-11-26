import Reveal from "./Reveal.jsx";
import Icon from "./Icons.jsx";
import { ReactMark, SkillIcon } from "./TechLogos.jsx";
import { aboutTech, profile } from "../data.js";

function AboutVisual() {
  return (
    <div
      className="av"
      role="img"
      aria-label="Decorative developer illustration with a code symbol, laptop and React logo"
    >
      <div className="av-ring av-ring-1" />
      <div className="av-ring av-ring-2" />
      <div className="av-core">
        <span>&lt;/&gt;</span>
      </div>
      <div className="av-chip av-a1" style={{ "--fd": "0s" }}>
        <Icon name="laptop" size={26} />
      </div>
      <div className="av-chip av-a2" style={{ "--fd": "1.4s" }}>
        <svg viewBox="-11.5 -10.2 23 20.4" focusable="false">
          <ReactMark />
        </svg>
      </div>
      <div className="av-chip av-a3 hv-text" style={{ "--fd": "2.4s" }}>
        {"{ }"}
      </div>
      <div className="av-chip av-a4" style={{ "--fd": "0.8s" }}>
        <Icon name="code" size={24} />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal>
          <AboutVisual />
        </Reveal>

        <Reveal delay={120}>
          <div className="about-copy">
            <span className="badge">About Me</span>
            <h2 id="about-title">Frontend Developer</h2>
            <span className="bar" aria-hidden="true" />
            <p>{profile.about}</p>

            <ul className="tech-cards" aria-label="Technologies">
              {aboutTech.map((t) => (
                <li className="tech-card" key={t.name}>
                  <span className="tech-ico">
                    <SkillIcon name={t.icon} />
                  </span>
                  {t.name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
