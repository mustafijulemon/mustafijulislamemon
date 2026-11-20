import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { about, education, siteConfig } from "../data/siteConfig";

export default function About() {
  return (
    <section id="about" className="section section-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Profile"
          title="About"
          accent="Me"
          subtitle={about.body}
        />

        <div className="about-layout">
          <div className="about-biography">
            <h3>{about.headline}</h3>
            {siteConfig.bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <div className="about-focus-grid">
              {about.cards.map((card) => (
                <article className="focus-item" key={card.title}>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="education-panel">
            <div className="panel-heading">
              <GraduationCap size={20} />
              <h3>Education</h3>
            </div>
            {education.map((item) => (
              <article className="education-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.org}</p>
                <span>{item.period}</span>
                {item.note && <strong>{item.note}</strong>}
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
