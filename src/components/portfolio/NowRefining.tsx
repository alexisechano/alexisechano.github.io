{/* Not in use */}
const items = [
  { label: "Investing", value: "Sourcing AI-native founders and companies for Ardent." },
  { label: "Reading", value: "Founder memos, research papers, and a stack of stories." },
  { label: "Building", value: "Theses on agentic workflows and the next wave of tools." },
  { label: "Writing", value: "A screenplay. Slowly. Honestly. (Act II is hard.)" },
  { label: "Watching for", value: "Founders who can both ship and tell the story." },
];

const NowRefining = () => {
  return (
    <section id="now" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <span className="file-tag">NOW PLAYING</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-4 leading-tight">
              Currently <span className="italic text-primary">refining</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              What I'm up to these days.
            </p>

            <div className="mt-8 panel-soft p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="label-mono">Season 02 · in production</span>
                <span className="font-mono text-xs text-primary">62%</span>
              </div>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                <div className="h-full bg-gradient-accent rounded-full" style={{ width: "62%" }} />
              </div>
              <div className="mt-3 font-mono text-[10px] text-muted-foreground tracking-wider">
                {">"} please enjoy each transition equally.
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ul className="divide-y divide-border border-y border-border">
              {items.map((it) => (
                <li key={it.label} className="py-5 grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-4 md:col-span-3 label-mono">{it.label}</span>
                  <span className="col-span-8 md:col-span-9 text-foreground">{it.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowRefining;
