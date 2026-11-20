import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "../data/siteConfig";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const initials = siteConfig.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className="site-header">
      <div className="container-page nav-inner">
        <a className="brand" href="#home" aria-label={`${siteConfig.name} — home`}>
          <span className="brand-mark">{initials}</span>
          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
            <small>Professional Portfolio</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-contact" href="#contact">Contact</a>
        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} className="mobile-nav-link">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mobile-nav-contact">Contact</a>
        </nav>
      )}
    </header>
  );
}
