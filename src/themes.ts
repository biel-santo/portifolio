export type Theme = {
    name: string;
    vars: Record<string, string>;
    layout: {
      heroNameSize: string;
      heroNameAlign: "left" | "center" | "right";
      heroLayout: "split" | "centered" | "stacked";
      projectsLayout: "grid" | "list" | "indexed";
      fontSerif: string;
      fontMono: string;
      fontSans: string;
    };
  };
  
  export const THEMES: Theme[] = [
    {
      name: "dark-cream",
      vars: {
        "--bg": "#0d0d0b",
        "--surface": "#141412",
        "--border": "#232320",
        "--cream": "#e8dcc8",
        "--cream-dim": "#9a8f7a",
        "--cream-faint": "#3a3630",
        "--text": "#c8bfae",
        "--white": "#f5f0e8",
        "--accent": "#e8dcc8",
        "--serif": "'Playfair Display', Georgia, serif",
        "--mono": "'DM Mono', monospace",
        "--sans": "'Syne', sans-serif",
      },
      layout: {
        heroNameSize: "clamp(56px, 8vw, 110px)",
        heroNameAlign: "left",
        heroLayout: "split",
        projectsLayout: "grid",
        fontSerif: "Playfair+Display:ital,wght@0,400;0,700;1,400",
        fontMono: "DM+Mono:wght@300;400",
        fontSans: "Syne:wght@400;600;800",
      },
    },
    {
      name: "blanc-editorial",
      vars: {
        "--bg": "#f2ede4",
        "--surface": "#e8e2d6",
        "--border": "#d4cdc0",
        "--cream": "#8b1a1a",
        "--cream-dim": "#5a3a2a",
        "--cream-faint": "#c4bdb0",
        "--text": "#2a2420",
        "--white": "#1a1410",
        "--accent": "#8b1a1a",
        "--serif": "'Cormorant Garamond', Georgia, serif",
        "--mono": "'IBM Plex Mono', monospace",
        "--sans": "'Archivo', sans-serif",
      },
      layout: {
        heroNameSize: "clamp(80px, 14vw, 180px)",
        heroNameAlign: "center",
        heroLayout: "centered",
        projectsLayout: "list",
        fontSerif: "Cormorant+Garamond:ital,wght@0,300;0,600;1,300",
        fontMono: "IBM+Plex+Mono:wght@300;400",
        fontSans: "Archivo:wght@400;600;900",
      },
    },
    {
      name: "void-green",
      vars: {
        "--bg": "#000000",
        "--surface": "#060606",
        "--border": "#0d1a0d",
        "--cream": "#4aff6e",
        "--cream-dim": "#2a8a3e",
        "--cream-faint": "#0d2010",
        "--text": "#8aaa8a",
        "--white": "#c8f0c8",
        "--accent": "#4aff6e",
        "--serif": "'Space Grotesk', sans-serif",
        "--mono": "'JetBrains Mono', monospace",
        "--sans": "'Space Grotesk', sans-serif",
      },
      layout: {
        heroNameSize: "clamp(48px, 7vw, 96px)",
        heroNameAlign: "left",
        heroLayout: "stacked",
        projectsLayout: "indexed",
        fontSerif: "Space+Grotesk:wght@300;400;700",
        fontMono: "JetBrains+Mono:wght@300;400",
        fontSans: "Space+Grotesk:wght@300;400;700",
      },
    },
  ];
  
  export function pickTheme(): Theme {
    return THEMES[Math.floor(Math.random() * THEMES.length)];
  }
  
  export function applyTheme(theme: Theme) {
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.setAttribute("data-theme", theme.name);
    root.style.setProperty("--hero-name-size", theme.layout.heroNameSize);
  }
  
  export function loadFonts(theme: Theme) {
    const id = `fonts-${theme.name}`;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    const fonts = [
      theme.layout.fontSerif,
      theme.layout.fontMono,
      theme.layout.fontSans,
    ]
      .filter(Boolean)
      .join("&family=");
    link.href = `https://fonts.googleapis.com/css2?family=${fonts}&display=swap`;
    document.head.appendChild(link);
  }