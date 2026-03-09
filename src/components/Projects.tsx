import { useState, useEffect } from "react";
import Toggle from "./Toggle";
import DATA from "./data";

function ProjectCard({ project }) {
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

function Projects({ activeSection, setActiveSection }) {
    const [switching, setSwitching] = useState(false);
    const [displayed, setDisplayed] = useState(activeSection);

    useEffect(() => {
        if (activeSection !== displayed) {
            setSwitching(true);
            setTimeout(() => {
                setDisplayed(activeSection);
                setSwitching(false);
            }, 300);
        }
    }, [activeSection]);

    const projects = displayed === "code" ? DATA.codeProjects : DATA.artProjects;
    const title = displayed === "code" ? "Selected Work" : "Creative Work";

    return (
        <section className="projects-section">
            <Toggle activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="section-header">
                <h2 className="section-title">{title}</h2>
                <span className="section-count">0{projects.length} projects</span>
            </div>
            <div className={`projects-grid ${switching ? "switching" : ""}`}>
                {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </section>
    );
}

export default Projects