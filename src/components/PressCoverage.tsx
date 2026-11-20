import SectionHeading from "./SectionHeading";
import { pressCoverage } from "../data/siteConfig";

export default function PressCoverage() {
  return (
    <section id="press" className="section section-muted">
      <div className="container-page">
        <SectionHeading
          eyebrow="Media recognition"
          title="Press"
          accent="Coverage"
          subtitle="Selected newspaper features on my debate and public-affairs work."
        />
        <div className="press-grid">
          {pressCoverage.map((item) => (
            <article className="press-card" key={item.publisher}>
              <a href={item.image} target="_blank" rel="noreferrer" aria-label={`Open ${item.publisher} newspaper clipping`}>
                <img src={item.image} alt={`${item.publisher} newspaper clipping`} loading="lazy" />
              </a>
              <h3>{item.publisher}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
