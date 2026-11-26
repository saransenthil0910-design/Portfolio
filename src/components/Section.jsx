import Reveal from "./Reveal.jsx";

export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2 id={`${id}-title`}>{title}</h2>
            <span className="bar" aria-hidden="true" />
            {intro && <p>{intro}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
