const G = {
    injectStyles: () => {
      if (document.getElementById("pf-styles")) return;
      const style = document.createElement("style");
      style.id = "pf-styles";
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400&family=Syne:wght@400;600;800&display=swap');
  
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  
        :root {
          --bg: #0d0d0b;
          --surface: #141412;
          --border: #232320;
          --cream: #e8dcc8;
          --cream-dim: #9a8f7a;
          --cream-faint: #3a3630;
          --text: #c8bfae;
          --white: #f5f0e8;
          --accent: #e8dcc8;
          --serif: 'Playfair Display', Georgia, serif;
          --mono: 'DM Mono', monospace;
          --sans: 'Syne', sans-serif;
        }
  
        html { scroll-behavior: smooth; }
  
        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--mono);
          font-size: 14px;
          line-height: 1.6;
          cursor: none;
          overflow-x: hidden;
        }
  
        ::selection { background: var(--cream-faint); color: var(--cream); }
  
        /* CURSOR */
        .cursor-dot {
          position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999;
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--cream); mix-blend-mode: difference;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease;
        }
        .cursor-ring {
          position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9998;
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(232,220,200,0.4);
          transform: translate(-50%, -50%);
          transition: transform 0.15s ease, width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
        }
        body:has(a:hover, button:hover) .cursor-dot { width: 12px; height: 12px; }
        body:has(a:hover, button:hover) .cursor-ring { width: 54px; height: 54px; opacity: 0.6; }
  
        /* NOISE */
        .noise {
          position: fixed; inset: 0; pointer-events: none; z-index: 100;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }
  
        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 28px 48px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.4s, background 0.4s, backdrop-filter 0.4s;
        }
        nav.scrolled {
          border-color: var(--border);
          background: rgba(13,13,11,0.85);
          backdrop-filter: blur(12px);
        }
        .nav-logo {
          font-family: var(--serif);
          font-size: 18px;
          color: var(--white);
          letter-spacing: -0.02em;
          text-decoration: none;
        }
        .nav-logo span { font-style: italic; color: var(--cream-dim); }
        .nav-links {
          display: flex; gap: 36px; list-style: none;
        }
        .nav-links a {
          color: var(--cream-dim); font-family: var(--mono); font-size: 12px;
          letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--cream); }
  
        /* HERO */
        .hero {
          min-height: 100vh; display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: end;
          padding: 0 48px 80px;
          position: relative;
          overflow: hidden;
        }
        .hero-left { padding-bottom: 0; }
        .hero-tag {
          font-family: var(--mono); font-size: 11px;
          color: var(--cream-dim); letter-spacing: 0.15em;
          text-transform: uppercase; margin-bottom: 40px;
          display: flex; align-items: center; gap: 12px;
        }
        .hero-tag::before {
          content: ''; display: block; width: 32px; height: 1px; background: var(--cream-dim);
        }
        .hero-name {
          font-family: var(--serif);
          font-size: clamp(56px, 8vw, 110px);
          line-height: 0.9;
          color: var(--white);
          letter-spacing: -0.03em;
          margin-bottom: 0;
        }
        .hero-name em {
          font-style: italic; color: var(--cream-dim);
          display: block;
        }
        .hero-right {
          display: flex; flex-direction: column;
          align-items: flex-end; justify-content: flex-end;
          gap: 48px; padding-left: 48px;
        }
        .hero-bio {
          max-width: 320px; text-align: right;
          color: var(--cream-dim); line-height: 1.8; font-size: 13px;
        }
        .hero-stack {
          display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end;
        }
        .stack-tag {
          font-family: var(--mono); font-size: 10px;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 5px 12px; border: 1px solid var(--border);
          color: var(--cream-dim); border-radius: 2px;
          transition: border-color 0.2s, color 0.2s;
        }
        .stack-tag:hover { border-color: var(--cream-faint); color: var(--cream); }
        .hero-scroll {
          position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          color: var(--cream-faint); font-size: 10px; letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .hero-scroll-line {
          width: 1px; height: 48px; background: linear-gradient(to bottom, var(--cream-dim), transparent);
          animation: scrollLine 2s ease-in-out infinite;
        }
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(0.6); }
        }
        .hero-number {
          position: absolute; right: 48px; top: 50%;
          font-family: var(--serif); font-size: 200px; font-weight: 700;
          color: rgba(232,220,200,0.02); line-height: 1;
          pointer-events: none; user-select: none;
          transform: translateY(-50%);
        }
  
        /* TOGGLE */
        .toggle-section {
          padding: 0 48px; margin-bottom: 80px;
          display: flex; align-items: center; gap: 24px;
        }
        .toggle-label {
          font-family: var(--mono); font-size: 11px;
          letter-spacing: 0.12em; text-transform: uppercase;
        }
        .toggle-label.active { color: var(--cream); }
        .toggle-label.inactive { color: var(--cream-faint); }
        .toggle-track {
          width: 52px; height: 26px; border-radius: 13px;
          border: 1px solid var(--border);
          background: var(--surface);
          position: relative; cursor: pointer;
          transition: border-color 0.3s;
        }
        .toggle-track:hover { border-color: var(--cream-faint); }
        .toggle-thumb {
          position: absolute; top: 3px; left: 3px;
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--cream);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .toggle-thumb.art { transform: translateX(26px); }
  
        /* PROJECTS */
        .projects-section { padding: 0 48px 120px; }
        .section-header {
          display: flex; align-items: baseline;
          justify-content: space-between;
          margin-bottom: 64px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 24px;
        }
        .section-title {
          font-family: var(--serif); font-size: clamp(32px, 5vw, 56px);
          color: var(--white); letter-spacing: -0.02em;
        }
        .section-count {
          font-family: var(--mono); font-size: 11px;
          color: var(--cream-faint); letter-spacing: 0.1em;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--border);
        }
        .project-card {
          background: var(--bg);
          padding: 40px;
          position: relative; overflow: hidden;
          transition: background 0.3s;
          cursor: none;
        }
        .project-card:hover { background: var(--surface); }
        .project-card::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px; background: var(--cream);
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .project-card:hover::after { width: 100%; }
        .project-top {
          display: flex; justify-content: space-between;
          align-items: flex-start; margin-bottom: 24px;
        }
        .project-year {
          font-family: var(--mono); font-size: 10px;
          color: var(--cream-faint); letter-spacing: 0.1em;
        }
        .project-arrow {
          width: 20px; height: 20px; color: var(--cream-faint);
          transition: transform 0.2s, color 0.2s;
        }
        .project-card:hover .project-arrow {
          transform: translate(3px, -3px); color: var(--cream);
        }
        .project-type {
          font-family: var(--mono); font-size: 10px;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--cream-dim); margin-bottom: 12px;
        }
        .project-title {
          font-family: var(--serif); font-size: 28px;
          color: var(--white); letter-spacing: -0.01em;
          margin-bottom: 16px; line-height: 1.1;
        }
        .project-desc {
          color: var(--cream-faint); font-size: 13px;
          line-height: 1.7; margin-bottom: 24px;
        }
        .project-tech {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .tech-tag {
          font-family: var(--mono); font-size: 10px;
          color: var(--cream-faint); letter-spacing: 0.08em;
          padding: 3px 8px; border: 1px solid var(--border);
          border-radius: 2px;
        }
  
        /* ABOUT */
        .about-section {
          padding: 120px 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 120px; align-items: start;
          border-top: 1px solid var(--border);
        }
        .about-left {}
        .about-overline {
          font-family: var(--mono); font-size: 11px;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--cream-dim); margin-bottom: 40px;
          display: flex; align-items: center; gap: 12px;
        }
        .about-overline::before {
          content: ''; display: block; width: 24px; height: 1px; background: var(--cream-dim);
        }
        .about-title {
          font-family: var(--serif); font-size: clamp(40px, 5vw, 64px);
          color: var(--white); line-height: 1.05;
          letter-spacing: -0.02em; margin-bottom: 0;
        }
        .about-title em { font-style: italic; color: var(--cream-dim); }
        .about-right { padding-top: 16px; }
        .about-text {
          color: var(--cream-dim); line-height: 1.9;
          font-size: 14px; margin-bottom: 48px;
        }
        .about-facts {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .fact-label {
          font-family: var(--mono); font-size: 10px;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--cream-faint); margin-bottom: 6px;
        }
        .fact-value {
          font-family: var(--sans); font-size: 14px;
          color: var(--cream);
        }
  
        /* BLOG */
        .blog-section {
          padding: 120px 48px;
          border-top: 1px solid var(--border);
        }
        .blog-list { margin-top: 64px; }
        .blog-item {
          display: grid; grid-template-columns: 120px 1fr auto;
          gap: 40px; align-items: start;
          padding: 32px 0;
          border-bottom: 1px solid var(--border);
          transition: background 0.2s;
          cursor: none;
        }
        .blog-item:hover .blog-title { color: var(--cream); }
        .blog-date {
          font-family: var(--mono); font-size: 11px;
          color: var(--cream-faint); padding-top: 4px;
        }
        .blog-tag-badge {
          font-family: var(--mono); font-size: 9px;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--cream-faint); border: 1px solid var(--border);
          padding: 4px 8px; border-radius: 2px;
          white-space: nowrap; margin-top: 2px;
        }
        .blog-title {
          font-family: var(--serif); font-size: 22px;
          color: var(--text); letter-spacing: -0.01em;
          margin-bottom: 8px; transition: color 0.2s;
        }
        .blog-desc { color: var(--cream-faint); font-size: 13px; line-height: 1.7; }
  
        /* CONTACT */
        .contact-section {
          padding: 120px 48px 80px;
          border-top: 1px solid var(--border);
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: start;
        }
        .contact-title {
          font-family: var(--serif);
          font-size: clamp(48px, 6vw, 80px);
          color: var(--white); line-height: 0.95;
          letter-spacing: -0.03em;
        }
        .contact-title em { font-style: italic; color: var(--cream-dim); display: block; }
        .contact-right { padding-top: 8px; }
        .contact-line {
          display: flex; align-items: center; gap: 16px;
          padding: 20px 0; border-bottom: 1px solid var(--border);
        }
        .contact-line:first-child { border-top: 1px solid var(--border); }
        .contact-icon { color: var(--cream-faint); flex-shrink: 0; }
        .contact-link {
          color: var(--cream-dim); font-size: 13px;
          text-decoration: none; transition: color 0.2s;
          letter-spacing: 0.02em;
        }
        .contact-link:hover { color: var(--cream); }
  
        /* FOOTER */
        footer {
          padding: 32px 48px;
          border-top: 1px solid var(--border);
          display: flex; justify-content: space-between; align-items: center;
        }
        .footer-text {
          font-family: var(--mono); font-size: 11px;
          color: var(--cream-faint); letter-spacing: 0.05em;
        }
  
        /* FADE IN */
        .fade-in {
          opacity: 0; transform: translateY(20px);
          animation: fadeIn 0.8s ease forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in:nth-child(1) { animation-delay: 0.1s; }
        .fade-in:nth-child(2) { animation-delay: 0.2s; }
        .fade-in:nth-child(3) { animation-delay: 0.3s; }
        .fade-in:nth-child(4) { animation-delay: 0.4s; }
  
        /* PROJECT TRANSITION */
        .projects-grid {
          transition: opacity 0.3s ease;
        }
        .projects-grid.switching { opacity: 0; }
  
        @media (max-width: 768px) {
          nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .hero { grid-template-columns: 1fr; padding: 120px 24px 80px; }
          .hero-right { align-items: flex-start; }
          .hero-bio { text-align: left; }
          .hero-stack { justify-content: flex-start; }
          .hero-number { display: none; }
          .toggle-section, .projects-section, .about-section,
          .blog-section, .contact-section { padding-left: 24px; padding-right: 24px; }
          .projects-grid { grid-template-columns: 1fr; }
          .about-section { grid-template-columns: 1fr; gap: 48px; }
          .contact-section { grid-template-columns: 1fr; }
          .blog-item { grid-template-columns: 1fr; gap: 8px; }
        }
      `;
      document.head.appendChild(style);
    },
  };

export default G