const roles = [
  {
    period: "May 2026 — Present",
    slug: "INT. ARDENT HQ — SAN FRANCISCO / WASHINGTON D.C. — DAY",
    title: "Investor",
    org: "Ardent",
    logline:
      "A thesis-driven venture firm backing exceptional founders building AI-native software before the category exists.",
    tags: ["Early-stage", "AI-native", "Software"],
  },
  {
    period: "Aug 2023 — May 2026",
    slug: "INT. PALO ALTO NETWORKS — SANTA CLARA — DAY",
    title: "Product Manager",
    org: "Palo Alto Networks",
    logline:
      "Three years embedded in the heart of enterprise security — leveling up the best-of-breed security platform.",
    tags: ["Machine learning", "Security", "Enterprise"],
  },
  {
    period: "Jun 2022 — Sep 2022",
    slug: "INT. META HQ — MENLO PARK — DAY",
    title: "Software Engineering Intern",
    org: "Meta",
    logline:
      "A summer inside the recruiting machine — building the tool that tells the recruiters when the offer lands.",
    tags: ["Internal tools", "PHP", "Enterprise"],
  },
  {
    period: "Jan 2022 — Jun 2022",
    slug: "INT. FORTUNA — MIAMI / PALO ALTO — DAY",
    title: "Product Manager",
    org: "Fortuna",
    logline:
      "A seed-stage consumer marketplace for Gen Z. Move fast, listen harder, ship before the trend turns.",
    tags: ["Consumer", "Seed-stage", "Marketplace"],
  },
  {
    period: "Jun 2020 — Jun 2021",
    slug: "INT. EMPOWER — MCLEAN — DAY",
    title: "Software Engineering Intern",
    org: "Empower",
    logline:
      "First real engineering job. First fraud detection engine. First time building a team from scratch.",
    tags: ["Azure", "Fraud detection", "Team-building"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <span className="file-tag">Episodes</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-4 leading-tight max-w-xl">
              The <span className="italic text-primary">work</span>, told as a series.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
              Each role is a scene. Characters, logline, story beats. Read it like a script —
              because honestly, that's how I remember it.
            </p>
          </div>
          <span className="label-mono">{`0${roles.length} episodes · sorted desc`}</span>
        </div>

        <div className="space-y-px bg-border border border-border">
          {roles.map((r, i) => (
            <article
              key={i}
              className="group bg-background p-6 md:p-8 grid md:grid-cols-12 gap-4 md:gap-8 hover:bg-card transition-colors"
            >
              <div className="md:col-span-3">
                <div className="font-mono text-xs text-primary tracking-wider">{r.period}</div>
                <div className="label-mono mt-2">EP · {String(roles.length - i).padStart(2, "0")}</div>
              </div>
              <div className="md:col-span-6">
                {/* screenplay slug line */}
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/80 mb-3 pb-2 border-b border-dashed border-border">
                  {r.slug}
                </div>
                <h3 className="display-serif text-2xl md:text-3xl text-foreground leading-snug">
                  {r.title}
                </h3>
                <div className="text-sm text-muted-foreground mt-1">{r.org}</div>
                <p className="mt-4 text-foreground/90 leading-relaxed italic">
                  <span className="not-italic font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mr-2">Logline —</span>
                  {r.logline}
                </p>
              </div>
              <div className="md:col-span-3 flex md:flex-col flex-wrap gap-2 md:items-end">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 border border-border rounded-sm text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 font-mono text-[11px] text-muted-foreground tracking-wider">
          {">"} the work is mysterious and important.
        </div>
      </div>
    </section>
  );
};

export default Experience;
