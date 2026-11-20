import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  debateEventRoles,
  interDepartmentDebatePhotos,
  invitationalDebatePhotos,
  tvDebatePhotos,
} from "../data/siteConfig";

type DebatePhoto = { image: string; caption: string };

function PhotoGallery({ photos }: { photos: readonly DebatePhoto[] }) {
  return (
    <Reveal className="gallery-reveal">
    <div className="photo-gallery">
      {photos.map((photo) => (
        <figure className="photo-card" key={photo.image}>
          <a href={photo.image} target="_blank" rel="noreferrer" aria-label={`Open photo: ${photo.caption}`}>
            <img src={photo.image} alt={photo.caption} loading="lazy" />
          </a>
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
    </Reveal>
  );
}

export default function TvDebate() {
  return (
    <section id="tv-debate" className="section section-muted">
      <div className="container-page">
        <SectionHeading
          eyebrow="Debate & public speaking"
          title="National TV"
          accent="Debate"
          subtitle="Selected moments from national televised debate competitions, including BTV and ATN Bangla."
        />
        <PhotoGallery photos={tvDebatePhotos} />

        <div className="subsection">
          <SectionHeading
            eyebrow="Event organisation"
            title="Invitational Debate"
            accent="Competition"
            subtitle="Organised an invitational debate competition, bringing speakers and students together for debate and recognition."
          />
          <PhotoGallery photos={invitationalDebatePhotos} />
        </div>

        <div className="subsection">
          <SectionHeading
            eyebrow="Convener · 5th BUBTDC"
            title="Inter-Department"
            accent="Debate Competition"
            subtitle="Organised the 5th BUBTDC Inter-Department Debate Competition as convener with the Debating Club of BUBT."
          />
          <PhotoGallery photos={interDepartmentDebatePhotos} />
        </div>

        <div className="subsection">
          <SectionHeading
            eyebrow="Across competitions"
            title="Event Roles"
            accent="& Responsibilities"
            subtitle="Mentoring, adjudicating, and competing—my role varies from event to event."
          />
          <Reveal className="role-gallery-reveal">
          <div className="role-gallery">
            {debateEventRoles.map((item) => (
              <article className="role-card" key={item.event}>
                <a href={item.image} target="_blank" rel="noreferrer">
                  <img src={item.image} alt={`${item.event} — ${item.role}`} loading="lazy" />
                </a>
                <div>
                  <span>{item.role}</span>
                  <h3>{item.event}</h3>
                </div>
              </article>
            ))}
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
