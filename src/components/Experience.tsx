import { BriefcaseBusiness, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experiences } from "../data/siteConfig";

export default function Experience() {
  return (
    <section id="experience" className="section section-muted">
      <div className="container-page">
        <SectionHeading
          eyebrow="Career & leadership"
          title="Experience"
          accent="& Involvement"
          subtitle="Professional roles, student leadership, competitive programming, debate, and event organisation."
        />

        <Reveal className="experience-reveal">
        <div className="experience-list">
          {experiences.map((exp) => (
            <article className="experience-item" key={`${exp.role}-${exp.company}`}>
              <div className="experience-topline">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="experience-company"><BriefcaseBusiness size={15} /> {exp.company}</p>
                </div>
                <span className="date-label">{exp.period}</span>
              </div>
              <p className="experience-location"><MapPin size={14} /> {exp.location}</p>
              <p className="experience-summary">{exp.summary}</p>
              {exp.highlights.length > 0 && (
                <ul className="detail-list">
                  {exp.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
