import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import TvDebate from "./components/TvDebate";
import Workshops from "./components/Workshops";
import PressCoverage from "./components/PressCoverage";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import { siteConfig } from "./data/siteConfig";

export default function App() {
  useEffect(() => {
    document.title = `${siteConfig.name} | Professional Portfolio`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", siteConfig.tagline);
  }, []);

  return (
    <div className="site-shell">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <TvDebate />
        <Workshops />
        <PressCoverage />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
