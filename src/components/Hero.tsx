import DATA from "./Data";
import type { Theme } from "../themes";

type HeroProps = {
  activeSection: string;
  setActiveSection: (s: any) => void;
  layout: Theme["layout"];
};

export default function Hero({ layout }: HeroProps) {
  if (layout.heroLayout === "centered") return <HeroCentered layout={layout} />;
  if (layout.heroLayout === "stacked") return <HeroStacked layout={layout} />;
  return <HeroSplit layout={layout} />;
}

// ─── SPLIT (dark-cream) ──────────────────────────────────────────────────────
function HeroSplit({ layout }: { layout: Theme["layout"] }) {
  return (
    <section className="hero hero--split" id="top">
      <div className="hero-number">GR</div>
      <div className="hero-left fade-in">
        <div className="hero-tag">Full Stack Developer · São Paulo, BR</div>
        <h1
          className="hero-name"
          style={{ fontSize: layout.heroNameSize, textAlign: layout.heroNameAlign }}
        >
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

// ─── CENTERED (blanc-editorial) ──────────────────────────────────────────────
function HeroCentered({ layout }: { layout: Theme["layout"] }) {
  return (
    <section className="hero hero--centered" id="top">
      <div className="hero-centered-inner fade-in">
        <div className="hero-tag hero-tag--center">
          Full Stack Developer · São Paulo, BR
        </div>
        <h1
          className="hero-name hero-name--stamp"
          style={{ fontSize: layout.heroNameSize }}
        >
          Gabriel
          <br />
          <em>Renato</em>
        </h1>
        <p className="hero-bio hero-bio--center">{DATA.bio}</p>
        <div className="hero-stack hero-stack--center">
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

// ─── STACKED (void-green) ────────────────────────────────────────────────────
function HeroStacked({ layout }: { layout: Theme["layout"] }) {
  return (
    <section className="hero hero--stacked" id="top">
      <div className="hero-stacked-top fade-in">
        <div className="hero-tag hero-tag--mono">
          <span className="hero-tag-prompt">~/gabriel-santo</span>
          <span className="hero-tag-cursor">█</span>
        </div>
        <h1
          className="hero-name hero-name--mono"
          style={{ fontSize: layout.heroNameSize }}
        >
          GABRIEL_<br />
          <span className="hero-name-dim">RENATO</span>
        </h1>
      </div>
      <div className="hero-stacked-bottom fade-in">
        <p className="hero-bio hero-bio--mono">{DATA.bio}</p>
        <div className="hero-stack">
          {DATA.stack.map((s) => (
            <span key={s} className="stack-tag stack-tag--mono">{s}</span>
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