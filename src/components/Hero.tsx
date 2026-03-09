import DATA from "./data";

function Hero({ activeSection, setActiveSection }) {
    return (
        <section className="hero" id="top">
            <div className="hero-number">GR</div>
            <div className="hero-left fade-in">
                <div className="hero-tag">Full Stack Developer · São Paulo, BR</div>
                <h1 className="hero-name">
                    Gabriel
                    <em>Renato</em>
                </h1>
            </div>
            <div className="hero-right fade-in">
                <p className="hero-bio">{DATA.bio}</p>
                <div className="hero-stack">
                    {DATA.stack.map((s) => (
                        <span key={s} className="stack-tag">{s}</span>
                    ))}
                </div>
            </div>
            <div className="hero-scroll">
                <div className="hero-scroll-line" />
                <span>scroll</span>
            </div>
        </section>
    );
}

export default Hero