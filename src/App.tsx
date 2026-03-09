import { useState, useEffect } from "react";
import { THEMES, pickTheme, applyTheme, loadFonts, type Theme } from "./themes";
// import './App.css'
//import G from "./components/Styles";
import Cursor from "./components/Cursor";
import Noise from "./components/Noise";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
//import Footer from "./components/Cursor";

export type Section = "code" | "art";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("code");
  const [theme, setTheme] = useState<Theme>(THEMES[0]);

  useEffect(() => {
    const picked = pickTheme();
    loadFonts(picked);
    applyTheme(picked);
    setTheme(picked);
  }, []);

  return (
    <div data-theme={theme.name}>
      <Noise />
      <Cursor />
      <Nav />
      <main>
        <Hero
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          layout={theme.layout}
        />
        <Projects
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          projectsLayout={theme.layout.projectsLayout}
        />
        <About />
        <Blog />
        <Contact />
      </main>
      <footer className="footer">
        <span className="footer-text">© 2026 Gabriel Renato Santo</span>
        <span className="footer-text">Designed & built by hand</span>
      </footer>
    </div>
  );
}

export default App
