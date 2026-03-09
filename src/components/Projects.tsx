import { useState, useEffect } from "react";
import Toggle from "./Toggle";
import DATA from "./Data";

type Section = "code" | "art";

interface ProjectItem {
  id: string | number;
  title: string;
  desc: string;
  year: string | number;
  type: string;
  tech: string[];
  url?: string;
}

type ProjectsProps = {
  activeSection: Section;
  setActiveSection: (s: Section) => void;
  projectsLayout: "grid" | "list" | "indexed";
};

function ProjectCardGrid({ project }: { project: ProjectItem }) {
  const Card = project.url ? "a" : "div";
  return (
    <Card
      className="project-card"
      href={project.url}
      target={project.url ? "_blank" : undefined}
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div className="project-top">
        <span className="project-year">{project.year}</span>
        {project.url && (
          <svg className="project-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 16L16 4M16 4H8M16 4v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <div className="project-type">{project.type}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </Card>
  );
}

function ProjectCardList({ project }: { project: ProjectItem }) {
  const Card = project.url ? "a" : "div";
  return (
    <Card
      className="project-list-item"
      href={project.url}
      target={project.url ? "_blank" : undefined}
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div className="project-list-meta">
        <span className="project-year">{project.year}</span>
        <span className="project-type">{project.type}</span>
      </div>
      <div className="project-list-main">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
      </div>
      <div className="project-list-right">
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        {project.url && (
          <svg className="project-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 16L16 4M16 4H8M16 4v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </Card>
  );
}

function ProjectCardIndexed({ project, index }: { project: ProjectItem; index: number }) {
  const Card = project.url ? "a" : "div";
  return (
    <Card
      className="project-indexed-item"
      href={project.url}
      target={project.url ? "_blank" : undefined}
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <span className="project-indexed-num">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="project-indexed-body">
        <div className="project-type">{project.type}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
      <div className="project-indexed-right">
        <span className="project-year">{project.year}</span>
        {project.url && (
          <svg className="project-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 16L16 4M16 4H8M16 4v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </Card>
  );
}

export default function Projects({ activeSection, setActiveSection, projectsLayout }: ProjectsProps) {
  const [switching, setSwitching] = useState(false);
  const [displayed, setDisplayed] = useState<Section>(activeSection);

  useEffect(() => {
    if (activeSection !== displayed) {
      setSwitching(true);
      const timer = setTimeout(() => {
        setDisplayed(activeSection);
        setSwitching(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeSection, displayed]);

  const projects = displayed === "code" ? DATA.codeProjects : DATA.artProjects;
  const title = displayed === "code" ? "Selected Work" : "Creative Work";

  return (
    <section className="projects-section">
      <Toggle activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <span className="section-count">0{projects.length} projects</span>
      </div>
      <div className={`projects-container projects-container--${projectsLayout} ${switching ? "switching" : ""}`}>
        {projects.map((p: ProjectItem, i: number) => {
          if (projectsLayout === "list") return <ProjectCardList key={p.id} project={p} />;
          if (projectsLayout === "indexed") return <ProjectCardIndexed key={p.id} project={p} index={i} />;
          return <ProjectCardGrid key={p.id} project={p} />;
        })}
      </div>
    </section>
  );
}