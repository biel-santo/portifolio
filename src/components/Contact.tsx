import DATA from "./data";

function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div>
                <h2 className="contact-title">
                    Let's
                    <em>work.</em>
                </h2>
            </div>
            <div className="contact-right">
                <div className="contact-line">
                    <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a href={`mailto:${DATA.email}`} className="contact-link">{DATA.email}</a>
                </div>
                <div className="contact-line">
                    <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                    </svg>
                    <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                        linkedin.com/in/gabrielrsanto
                    </a>
                </div>
                <div className="contact-line">
                    <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="contact-link">São Paulo, Brasil</span>
                </div>
            </div>
        </section>
    );
}

export default Contact