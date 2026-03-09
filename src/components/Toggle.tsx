type Section = "code" | "art";

interface ToggleProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void; // Mudamos de string para Section
}

function Toggle({ activeSection, setActiveSection }: ToggleProps) {
    return (
        <div className="toggle-section" id="work">
            <span className={`toggle-label ${activeSection === "code" ? "active" : "inactive"}`}>
                Code
            </span>
            <div
                className="toggle-track"
                // O TypeScript agora entenderá que esse toggle só alterna entre os valores válidos
                onClick={() => setActiveSection(activeSection === "code" ? "art" : "code")}
                role="switch"
                aria-checked={activeSection === "art"}
            >
                <div className={`toggle-thumb ${activeSection === "art" ? "art" : ""}`} />
            </div>
            <span className={`toggle-label ${activeSection === "art" ? "active" : "inactive"}`}>
                Art
            </span>
        </div>
    );
}

export default Toggle;