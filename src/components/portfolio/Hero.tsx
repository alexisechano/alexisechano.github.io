import { useEffect, useState } from "react";

const phrases = [
  "shipping AI products",
  "writing the next scene",
  "reading the next pitch",
  "currently refining",
  "analyzing the market",
  "meeting exceptional builders"
];

const Hero = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % phrases.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden">
      {/* floating quirky shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 right-[8%] w-40 h-40 rounded-full bg-primary-soft blur-3xl opacity-70 animate-drift" />
        <div className="absolute bottom-10 left-[5%] w-56 h-56 rounded-full bg-accent blur-3xl opacity-60 animate-drift" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative">
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
        </div>

        <h1 className="display-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.98] text-foreground max-w-5xl animate-fade-up" style={{ animationDelay: "0.05s" }}>
          Alexis Echano.<br />
          <span className="italic text-primary">Product</span> mind,<br />
          <span className="italic text-primary">storyteller</span> at heart.
        </h1>

        <div className="mt-10 max-w-2xl space-y-5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Investor at Ardent. Stanford alum with a toolbelt forged in early-stage startups and sharpened at Meta and Palo Alto Networks, shipping code to shipping strategy.
          </p>

          <div className="flex items-center gap-3 font-mono text-sm">
            <span className="text-muted-foreground">{">"}</span>
            <span className="text-foreground terminal-cursor min-w-[200px] inline-block">
              {phrases[idx]}
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-sm font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary transition-colors"
          >
            About Me
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-sm font-mono text-xs uppercase tracking-[0.18em] hover:border-primary hover:text-primary transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* meta strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border animate-fade-up" style={{ animationDelay: "0.35s" }}>
          {[
            ["Status", "Open to chats"],
            ["Based in", "San Francisco Bay Area"],
            ["Currently", "Investing @ Ardent"],
            ["Listening to", "Beyonce, Doechii, Zara Larsson"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-4">
              <div className="label-mono mb-1">{k}</div>
              <div className="text-sm text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
