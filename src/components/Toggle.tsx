function Toggle({ activeSection, setActiveSection }) {
    return (
        <div className="toggle-section" id="work">
            <span className={`toggle-label ${activeSection === "code" ? "active" : "inactive"}`}>
                Code
            </span>
            <div
                className="toggle-track"
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

export default Toggle