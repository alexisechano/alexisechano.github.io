const links = [
  { label: "Email", value: "alexis.echano@gmail.com", href: "mailto:alexis.echano@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/aechano", href: "https://www.linkedin.com/in/aechano/" },
  { label: "GitHub", value: "github.com/alexisechano", href: "https://github.com/alexisechano" },
  { label: "Resume", value: "View PDF →", href: "https://alexisechano.github.io/resume.pdf" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-6">
            <h2 className="display-serif text-5xl md:text-6xl mt-4 leading-[1.02]">
              Let's talk about <br />
              <span className="italic text-primary">products</span>, <span className="italic text-primary">pitches</span>,<br />
              or <span className="italic text-primary">pilot scripts</span>.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
              Founders, fellow operators, investors, screenwriters, and people with a
              great sci-fi theory — all welcome.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <div className="panel p-6">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse-soft" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  channels open
                </span>
              </div>
              <ul className="space-y-4">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-baseline justify-between gap-4 py-2 hover:text-primary transition-colors"
                    >
                      <span className="label-mono">{l.label}</span>
                      <span className="font-mono text-sm text-foreground group-hover:text-primary underline-grow text-right">
                        {l.value}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 font-mono text-[10px] text-muted-foreground tracking-wider">
              {">"} response time: usually within a workday. occasionally faster than expected.
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Alexis Echano · all files refined locally</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
            system: nominal
          </span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
