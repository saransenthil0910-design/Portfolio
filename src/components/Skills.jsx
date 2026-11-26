import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { SkillIcon } from "./TechLogos.jsx";
import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skill-groups">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 120}>
            <div className="glass skill-panel">
              <h3>{group.title}</h3>
              <ul className="skill-grid">
                {group.skills.map((skill) => (
                  <li className="skill" key={skill.name}>
                    <span className="skill-ico">
                      <SkillIcon name={skill.icon} />
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
