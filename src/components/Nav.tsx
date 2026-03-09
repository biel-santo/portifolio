import { useState, useEffect } from "react";

function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={scrolled ? "scrolled" : ""}>
            <a href="#" className="nav-logo">
                gabriel<span>.santo</span>
            </a>
            <ul className="nav-links">
                {["Work", "About", "Writing", "Contact"].map((l) => (
                    <li key={l}>
                        <a href={`#${l.toLowerCase()}`}>{l}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav