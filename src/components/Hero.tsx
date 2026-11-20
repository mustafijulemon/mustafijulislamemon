import { useState } from "react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { brandIcons } from "./BrandIcons";
import { siteConfig, stats } from "../data/siteConfig";

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = siteConfig.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section id="home" className="hero-section">
      <div className="container-page">
        <div className="hero-layout">
          <div className="hero-content">
            <p className="eyebrow">CSE Student · Software Developer · Student Leader</p>
            <p className="hero-intro">Hello, I am</p>
            <h1>{siteConfig.name}</h1>
            <h2>{siteConfig.role}</h2>
            <p className="hero-summary">{siteConfig.tagline}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                <Download size={16} /> Download CV
              </a>
              <a className="button button-secondary" href="#work">
                View Projects <ArrowDown size={16} />
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={16} /> {siteConfig.location}</span>
              <div className="social-links" aria-label="Social profiles">
                {siteConfig.socials.map((social) => {
                  const Icon = brandIcons[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={social.label}
                      title={social.label}
                    >
                      {Icon && <Icon size={17} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-frame">
              {!imageFailed && siteConfig.avatarUrl ? (
                <img
                  src={siteConfig.avatarUrl}
                  alt={siteConfig.name}
                  className="hero-image"
                  onError={() => setImageFailed(true)}
                  fetchPriority="high"
                />
              ) : (
                <div className="hero-image-fallback">{initials}</div>
              )}
            </div>
            <div className="president-note">
              <strong>President</strong>
              <span>Debating Club of BUBT</span>
            </div>
          </div>
        </div>

        <div className="stats-row" aria-label="Key highlights">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
