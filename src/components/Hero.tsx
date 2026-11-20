import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Download, MapPin, Sparkles } from "lucide-react";
import { brandIcons } from "./BrandIcons";
import { siteConfig, stats } from "../data/siteConfig";
import Reveal from "./Reveal";

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const initials = siteConfig.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % siteConfig.roles.length);
    }, 2800);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container-page">
        <div className="hero-layout">
          <div className="hero-content">
            <div className="hero-presence"><span className="presence-dot" /> Open to meaningful opportunities</div>
            <p className="eyebrow">CSE STUDENT <span className="eyebrow-divider">/</span> SOFTWARE DEVELOPER <span className="eyebrow-divider">/</span> STUDENT LEADER</p>
            <p className="hero-intro">Hello, I'm</p>
            <h1>{siteConfig.name.split(" ").slice(0, -1).join(" ")} <span>{siteConfig.name.split(" ").slice(-1)}</span></h1>
            <div className="hero-role-line" aria-live="off" aria-atomic="true">
              <span className="hero-role-prefix">Currently </span>
              <span key={roleIndex} className="hero-rotating-role">{siteConfig.roles[roleIndex]}</span>
              <span className="hero-caret" aria-hidden="true" />
            </div>
            <p className="hero-summary">{siteConfig.tagline}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                <Download size={16} /> Download CV <ArrowUpRight size={14} className="button-arrow" />
              </a>
              <a className="button button-secondary" href="#work">Explore My Work <ArrowDown size={16} /></a>
            </div>

            <div className="hero-meta">
              <span className="hero-location"><MapPin size={15} /> {siteConfig.location}</span>
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

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <div className="hero-image-glow" aria-hidden="true" />
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
              <div className="image-index"><span>PROFILE</span><strong>01 / 01</strong></div>
            </div>
            <div className="president-note">
              <div className="president-note-icon"><Sparkles size={17} /></div>
              <div><strong>President</strong><span>Debating Club of BUBT</span></div>
              <span className="president-note-year">2026—27</span>
            </div>
            <div className="hero-floating-tag"><span className="floating-tag-icon"><Sparkles size={15} /></span><span><strong>Ideas into impact</strong><small>Technology · Communication · Leadership</small></span></div>
          </div>
        </div>

        <Reveal className="stats-reveal" delay={160} y={18}>
          <div className="stats-row" aria-label="Key highlights">
            {stats.map((stat, index) => (
              <div className="stat-item" key={stat.label}>
                <span className="stat-index">0{index + 1}</span>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <a className="hero-scroll-cue" href="#about" aria-label="Scroll to About"><span /> Scroll to explore</a>
    </section>
  );
}
