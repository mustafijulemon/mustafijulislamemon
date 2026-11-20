import { ArrowUp } from "lucide-react";
import { navLinks, siteConfig } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page footer-main">
        <div className="footer-identity">
          <strong>{siteConfig.name}</strong>
          <p>{siteConfig.role} at Bangladesh University of Business & Technology (BUBT).</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map((link) => <a href={`#${link.id}`} key={link.id}>{link.label}</a>)}
        </nav>
      </div>
      <div className="container-page footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <a href="#home">Back to top <ArrowUp size={15} /></a>
      </div>
    </footer>
  );
}
