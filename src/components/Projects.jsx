import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import Icon from "./Icons.jsx";
import { MoviePreview, PetPreview } from "./ProjectPreviews.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="project-list">
        {projects.map((p, i) => (
          <Reveal key={p.title}>
            <article className={`pcard ${i % 2 === 1 ? "flip" : ""}`}>
              <div className="pcard-media">
                {p.preview === "movie" ? <MoviePreview /> : <PetPreview />}
              </div>

              <div className="pcard-body">
                <header>
                  <h3>{p.title}</h3>
                  <p className="pcard-sub">{p.subtitle}</p>
                </header>

                <p className="pcard-desc">{p.description}</p>

                <div>
                  <h4>Features</h4>
                  <ul className="feature-list">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Technologies</h4>
                  <ul className="tags">
                    {p.technologies.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>

                {(p.liveUrl || p.githubUrl) && (
                  <div className="btn-row">
                    {p.liveUrl && (
                      <a
                        className="btn btn-primary"
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <Icon name="arrowUpRight" size={18} />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        className="btn btn-outline"
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="github" size={18} />
                        GitHub
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
