import Icon from "./Icons.jsx";
import SocialLinks from "./SocialLinks.jsx";
import HeroVisual from "./HeroVisual.jsx";
import { profile } from "../data.js";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-hello">Hello, I&rsquo;m 👋</p>
          <h1 id="hero-title" className="gradient-text">
            {profile.name}
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="btn-row">
            <a className="btn btn-primary" href="#projects">
              View Projects
              <Icon name="arrowRight" size={18} />
            </a>
            <a className="btn btn-outline" href="#contact">
              Contact Me
            </a>
            <a
              className="btn btn-outline"
              href="/resume.pdf"

            >
              Resume
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <SocialLinks />
        </div>

        <div className="hero-visual">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
