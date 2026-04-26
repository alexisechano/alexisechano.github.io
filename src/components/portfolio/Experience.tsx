const roles = [
  {
    period: "2026 — Present",
    slug: "INT. ARDENT HQ — SAN FRANCISCO / WASHINGTON D.C. — DAY",
    title: "Investor",
    org: "Ardent",
    orgUrl: "https://ardent.vc/",
    logline:
      "A thesis-driven venture firm backing exceptional founders building AI-native software before the category exists.",
    tags: ["Early-stage", "Artificial Intelligence", "Emerging categories"],
  },
  {
    period: "2023 — 2026",
    slug: "INT. PALO ALTO NETWORKS — SANTA CLARA — DAY",
    title: "Product Manager",
    org: "Palo Alto Networks",
    orgUrl: "https://www.paloaltonetworks.com/",
    logline:
      "Three years embedded in the heart of enterprise security, leveling up the best-of-breed security platform to protect millions of endpoints and users worldwide.",
    tags: ["Artificial Intelligence", "Security", "Enterprise"],
  },
  {
    period: "2022",
    slug: "INT. META HQ — MENLO PARK — DAY",
    title: "Software Engineering Intern",
    org: "Meta",
    orgUrl: "https://www.meta.com/about/",
    logline:
      "A second summer inside one of the most renowned tech companies, this time within the recruiting machine: building the tool that tells the recruiters when the offer lands.",
    tags: ["Internal tools", "Automation", "Enterprise"],
  },
  {
    period: "2022",
    slug: "INT. FORTUNA — MIAMI / PALO ALTO — DAY",
    title: "Product Manager",
    org: "Fortuna",
    orgUrl: "https://www.linkedin.com/company/fortuna-jobs/posts/?feedView=all",
    logline:
      "A seed-stage consumer marketplace for Gen Z. Move fast, listen harder, launch before the trend turns.",
    tags: ["Consumer", "Early-stage", "Marketplace"],
  },
  {
    period: "2020 — 2021",
    slug: "INT. EMPOWER — MCLEAN — DAY",
    title: "Software Engineering Intern",
    org: "Empower",
    orgUrl: "https://driveempower.com/",
    logline:
      "One of the first engineers. First fraud detection engine. First time building a team from scratch. Now, a huge disruptor in the rideshare industry.",
    tags: ["Consumer", "Internal tools", "Automation"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <span className="file-tag">Episodes</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-4 leading-tight max-w-xl">
              The <span className="italic text-primary">work</span>, told as a series.
            </h2>
          </div>
          <span className="label-mono">{`0${roles.length} episodes · sorted desc`}</span>
        </div>

        <div className="space-y-px bg-border border border-border">
          {roles.map((r, i) => (
            <article
              key={i}
              className="group  bg-[hsl(var(--surface))] p-6 md:p-8 grid md:grid-cols-12 gap-4 md:gap-8 hover:bg-card transition-colors"
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
                <a
                  href={r.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-muted-foreground mt-1 underline-grow hover:text-primary transition-colors"
                >
                  {r.org}
                </a>
                <p className="mt-4 text-foreground/90 leading-relaxed italic">
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
