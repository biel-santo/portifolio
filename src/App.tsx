import { useState, useEffect } from "react";
import './App.css'
import G from "./components/Styles";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Cursor";

function App() {
  const [activeSection, setActiveSection] = useState("code");

  useEffect(() => {
    G.injectStyles();
  }, []);

  return (
    <div>
      <div className="noise" />
      <Cursor />
      <Nav />
      <main>
        <Hero activeSection={activeSection} setActiveSection={setActiveSection} />
        <Projects activeSection={activeSection} setActiveSection={setActiveSection} />
        <About />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
