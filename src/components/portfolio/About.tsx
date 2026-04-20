const traits = [
  { k: "Investing", v: "Early-stage at Ardent: AI-native software." },
  { k: "Operating", v: "Discovery, prioritization, ship the thing." },
  { k: "Wiring", v: "I read the code, architect the product." },
  { k: "Imagining", v: "Creative endeavors after hours, watching or writing." },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="file-tag">COLD OPEN</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-4 leading-tight">
              A short <span className="italic text-primary">logline</span> for the record.
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-6">
            {/* screenplay slugline */}
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary border-b border-border pb-3">
              INT. SAN FRANCISCO — DAY
            </div>

            <p className="text-lg leading-relaxed text-foreground">
              ALEXIS ECHANO sits between two open tabs: a product roadmap
              and a story draft. She has spent the last few years shipping
              <em className="text-primary not-italic font-medium"> AI security products</em> at
              Palo Alto Networks, and the years before that
              <em className="text-primary not-italic font-medium"> writing code</em> at Meta.
            </p>
            <p className="font-mono text-xs text-muted-foreground tracking-wider italic border-l-2 border-primary pl-4">
              {">"} CUT TO: a spreadsheet, a thesis doc, and a half-finished story — all open.
            </p>

            <ul className="mt-8 divide-y divide-border border-y border-border">
              {traits.map((t) => (
                <li key={t.k} className="grid grid-cols-12 py-4 items-baseline">
                  <span className="col-span-4 md:col-span-3 label-mono">{t.k}</span>
                  <span className="col-span-8 md:col-span-9 text-foreground">{t.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
