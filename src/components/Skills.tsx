import { Code2, Layout, Server, Wrench, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "../data/siteConfig";

const groupIcons: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  wrench: Wrench,
  code: Code2,
};

export default function Skills() {
  return (
    <section id="skills" className="section section-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Skills &"
          accent="Technologies"
          subtitle="Programming languages, frameworks, databases, tools, and research technologies."
        />
        <Reveal className="skills-reveal">
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.icon] ?? Code2;
            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-heading">
                  <Icon size={19} />
                  <h3>{group.title}</h3>
                </div>
                <ul className="skill-list">
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
