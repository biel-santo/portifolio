function About() {
    return (
      <section className="about-section" id="about">
        <div className="about-left">
          <div className="about-overline">About</div>
          <h2 className="about-title">
            Code &<em>Canvas</em>
          </h2>
        </div>
        <div className="about-right">
          <p className="about-text">
            I build scalable web applications and experiment with 3D art, game development, and visual design.
            My work lives at the intersection of engineering rigour and creative intuition — shaped by a background
            in cybersecurity, systems, and the SAGA design program.
          </p>
          <div className="about-facts">
            <div>
              <div className="fact-label">Education</div>
              <div className="fact-value">ADS · UNIP</div>
            </div>
            <div>
              <div className="fact-label">Postgrad</div>
              <div className="fact-value">Cybersecurity · USP</div>
            </div>
            <div>
              <div className="fact-label">Languages</div>
              <div className="fact-value">PT · EN · ES</div>
            </div>
            <div>
              <div className="fact-label">Location</div>
              <div className="fact-value">São Paulo, BR</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
export default About