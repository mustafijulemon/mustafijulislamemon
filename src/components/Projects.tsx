import { useMemo, useState } from "react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "../data/siteConfig";

type Filter = "all" | Project["category"];
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Applications" },
  { id: "tooling", label: "Tooling" },
  { id: "design", label: "Design" },
  { id: "mobile", label: "Mobile" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = useMemo(
    () => filter === "all" ? projects : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="work" className="section section-muted">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects &"
          accent="Development"
          subtitle="Academic and personal software projects across management, healthcare, transportation, and web applications."
        />

        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              className={`filter-button${filter === item.id ? " is-active" : ""}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <span>{project.category}</span>
                {project.featured && <span className="project-featured">Featured</span>}
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  {project.year && <span className="project-year">{project.year}</span>}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noreferrer">
                      Live Demo <ArrowUpRight size={15} />
                    </a>
                  )}
                  {project.links.repo && (
                    <a href={project.links.repo} target="_blank" rel="noreferrer">
                      <FolderGit2 size={15} /> Source Code <ArrowUpRight size={14} />
                    </a>
                  )}
                  {!project.links.demo && !project.links.repo && <a href="#contact">Discuss Project <ArrowUpRight size={14} /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
