import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { publicSpeakingWorkshopPhotos, workshopPhotos } from "../data/siteConfig";

type WorkshopPhoto = { image: string; caption: string };

function PhotoGallery({ photos }: { photos: readonly WorkshopPhoto[] }) {
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

export default function Workshops() {
  return (
    <section id="workshops" className="section section-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Learning & communication"
          title="Workshops &"
          accent="Sessions"
          subtitle="Selected moments from student workshops, training sessions, and learning events."
        />
        <div className="subsection subsection-first">
          <SectionHeading
            eyebrow="Workshop highlight"
            title="Public Speaking"
            accent="Workshop"
            subtitle="Conducted a public speaking workshop for student participants."
          />
          <PhotoGallery photos={publicSpeakingWorkshopPhotos} />
        </div>
        <div className="subsection">
          <SectionHeading eyebrow="More moments" title="Workshops &" accent="Sessions" />
          <PhotoGallery photos={workshopPhotos} />
        </div>
      </div>
    </section>
  );
}
