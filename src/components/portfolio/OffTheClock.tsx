const cards = [
  {
    cat: "Craft",
    title: "Writing",
    note: "Pilots, prose, and the occasional poetry.",
    accent: "from-primary-soft to-accent",
  },
  {
    cat: "TV",
    title: "Sci-fi",
    note: "Shows that break my brain in the best way from Severance to Foundation.",
    accent: "from-primary-soft to-accent",
  },
  {
    cat: "Comfort",
    title: "Sitcoms forever",
    note: "The 22-minute reset button. Tightly written, deeply re-watchable, secretly hard to make.",
    accent: "from-accent to-primary-soft",
  },
  {
    cat: "Movement",
    title: "Gymnastics & Golf",
    note: "Two sports that punish the same thing: a wandering mind. Great for resetting one.",
    accent: "from-accent to-primary-soft",
  },
  {
    cat: "Experiences",
    title: "Travel",
    note: "Experiencing new cultures and foods with loved ones. One country at a time.",
    accent: "from-accent to-primary-soft",
  },
  {
    cat: "Play",
    title: "Dogs",
    note: "Surrounded by poodle mixes, dog toys, and love...and lots of fur too.",
    accent: "from-accent to-primary-soft",
  },
];

const OffTheClock = () => {
  return (
    <section id="offline" className="py-24 md:py-32 border-t border-border bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <span className="file-tag">OFF-THE-CLOCK</span>
          <h2 className="display-serif text-4xl md:text-5xl mt-4 leading-tight">
            What I do when nobody's <span className="italic text-primary">measuring</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {cards.map((c) => (
            <article key={c.title} className="group relative bg-background p-7 overflow-hidden hover:bg-card transition-colors">
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${c.accent} opacity-50 blur-2xl group-hover:opacity-90 transition-opacity`} />
              <div className="relative">
                <div className="label-mono">{c.cat}</div>
                <h3 className="display-serif text-2xl mt-3 text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.note}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 font-mono text-xs text-muted-foreground tracking-wider">
          {">"} the work is mysterious and important.
        </p>
      </div>
    </section>
  );
};

export default OffTheClock;
