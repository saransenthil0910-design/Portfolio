import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import Icon from "./Icons.jsx";
import { education } from "../data.js";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <Reveal>
        <div className="timeline">
          <div className="tl-icon">
            <Icon name="cap" size={26} />
          </div>
          <article className="glass tl-card">
            <p className="tl-year">{education.year}</p>
            <h3>{education.degree}</h3>
            <p className="tl-field">{education.field}</p>
            <p className="tl-college">{education.college}</p>
          </article>
        </div>
      </Reveal>
    </Section>
  );
}
