import { useEffect, useState } from "react";

const phrases = [
  "shipping AI products",
  "writing the next scene",
  "reading the next pitch",
  "currently refining",
  "analyzing the market",
  "meeting exceptional builders"
];

type TabKey = "code" | "doc" | "sheet" | "music";

const tabs: { key: TabKey; label: string; file: string }[] = [
  { key: "code", label: "alexis.py", file: "~/alexis/alexis.py" },
  { key: "doc", label: "pilot.fdx", file: "~/writing/pilot.fdx" },
  { key: "sheet", label: "deals.xlsx", file: "~/ardent/deals.xlsx" },
  { key: "music", label: "now_playing", file: "spotify://now" },
];

const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [tab, setTab] = useState<TabKey>("code");

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % phrases.length), 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setTab((prev) => {
        const order: TabKey[] = ["code", "doc", "sheet", "music"];
        return order[(order.indexOf(prev) + 1) % order.length];
      });
    }, 5200);
    return () => clearInterval(t);
  }, []);

  const activeTab = tabs.find((t) => t.key === tab)!;

  return (
    <section id="top" className="relative pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden">
      {/* floating quirky shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 right-[8%] w-40 h-40 rounded-full bg-primary-soft blur-3xl opacity-70 animate-drift" />
        <div className="absolute bottom-10 left-[5%] w-56 h-56 rounded-full bg-accent blur-3xl opacity-60 animate-drift" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: copy */}
          <div className="lg:col-span-7">

            <h1 className="display-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem] font-light leading-[0.98] text-foreground animate-fade-up" style={{ animationDelay: "0.05s" }}>
              Alexis Echano.<br />
              <span className="italic text-primary">Product</span> mind,<br />
              <span className="italic text-primary">storyteller</span> at heart.
            </h1>

            <div className="mt-10 max-w-2xl space-y-5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Investor at Ardent. Stanford alum with a toolbelt forged in early-stage startups and sharpened at Meta and Palo Alto Networks.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-sm font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary transition-colors"
              >
                About me
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-sm font-mono text-xs uppercase tracking-[0.18em] hover:border-primary hover:text-primary transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* RIGHT: multi-tab desktop panel (lg+ only) */}
          <aside
            className="hidden lg:block lg:col-span-5 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="panel scanline relative rounded-sm overflow-hidden">
              {/* window chrome */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-[hsl(var(--surface))]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                </div>
                <span className="label-mono">{activeTab.file}</span>
              </div>

              {/* tab bar */}
              <div className="flex border-b border-border bg-[hsl(var(--surface))]/40 overflow-x-auto">
                {tabs.map((t) => {
                  const active = t.key === tab;
                  return (
                    <button
                      key={t.key}
                      onClick={() => setTab(t.key)}
                      className={`px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] border-r border-border whitespace-nowrap transition-colors ${
                        active
                          ? "bg-background text-foreground border-b-2 border-b-primary -mb-px"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>

              {/* body */}
              <div className="min-h-[320px]">
                {tab === "code" && (
                  <div className="flex font-mono text-[12px] text-foreground/90">
                    {/* line numbers */}
                    <div className="py-5 px-3 border-r border-border bg-[hsl(var(--surface))]/50 text-right text-muted-foreground/60 select-none space-y-1">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="leading-5">{String(i + 1).padStart(2, "0")}</div>
                      ))}
                    </div>
                    {/* code */}
                    <div className="py-5 px-4 space-y-1 leading-5 flex-1 min-w-0">
                      <div><span className="text-muted-foreground"># alexis.py</span></div>
                      <div><span className="text-primary">class</span> <span className="text-foreground">Alexis</span><span className="text-muted-foreground">:</span></div>
                      <div className="pl-4"><span className="text-foreground">role</span> <span className="text-muted-foreground">=</span> <span className="text-accent-foreground">"SWE → PM → VC"</span></div>
                      <div className="pl-4"><span className="text-foreground">stack</span> <span className="text-muted-foreground">=</span> <span className="text-muted-foreground">[</span><span className="text-accent-foreground">"AI"</span><span className="text-muted-foreground">,</span> <span className="text-accent-foreground">"prose"</span><span className="text-muted-foreground">]</span></div>
                      <div>&nbsp;</div>
                      <div className="pl-4"><span className="text-primary">def</span> <span className="text-foreground">now</span><span className="text-muted-foreground">(self) -&gt;</span> <span className="text-primary">str</span><span className="text-muted-foreground">:</span></div>
                      <div className="pl-8"><span className="text-primary">return</span> <span className="text-accent-foreground">"open to chats"</span></div>
                      <div>&nbsp;</div>
                      <div><span className="text-muted-foreground">&gt;&gt;&gt;</span> <span className="text-foreground">Alexis</span><span className="text-muted-foreground">().now()</span></div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground"># →</span>
                        <span className="text-foreground terminal-cursor min-w-[180px] inline-block normal-case">
                          {phrases[idx]}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {tab === "doc" && (
                  <div className="p-6 font-mono text-[12px] text-foreground/90 space-y-4">
                    <div className="label-mono">pilot.fdx — draft v.2026</div>
                    <div className="uppercase tracking-wider">INT. SAN FRANCISCO — CONTINUOUS</div>
                    <p className="leading-relaxed text-muted-foreground normal-case tracking-normal">
                      A laptop hums. Two browser tabs: one a pitch deck, the other a screenplay.
                      ALEXIS toggles between them without breaking eye contact.
                    </p>
                    <div className="text-center uppercase tracking-[0.2em] pt-2">Alexis</div>
                    <div className="text-center text-muted-foreground italic normal-case">(to no one in particular)</div>
                    <p className="text-center px-6 leading-relaxed normal-case tracking-normal">
                      "Every roadmap is a three-act structure.<br />
                      You just have to squint."
                    </p>
                    <div className="flex items-center justify-between pt-2 label-mono">
                      <span>scene 001 / A</span>
                    </div>
                  </div>
                )}

                {tab === "sheet" && (
                  <div className="font-mono text-[11px] text-foreground/90">
                    <div className="grid grid-cols-[2.5rem_1fr_5rem_4rem] border-b border-border bg-[hsl(var(--surface))]/50 label-mono">
                      <div className="px-2 py-1.5 border-r border-border text-center">#</div>
                      <div className="px-2 py-1.5 border-r border-border">Company</div>
                      <div className="px-2 py-1.5 border-r border-border">Stage</div>
                      <div className="px-2 py-1.5">Status</div>
                    </div>
                    {[
                      ["01", "stealth.ai", "Seed", "✓ in"],
                      ["02", "pluribus", "Pre-seed", "diligence"],
                      ["03", "lumon industries", "Series A", "passing"],
                      ["04", "pawnee inc.", "Seed", "✓ in"],
                      ["05", "ender's game", "Pre-seed", "intro'd"],
                      ["06", "dune.dev", "Seed", "diligence"],
                      ["07", "the force", "Pre-seed", "tracking"],
                    ].map(([n, c, s, st]) => (
                      <div key={n} className="grid grid-cols-[2.5rem_1fr_5rem_4rem] border-b border-border/60 hover:bg-[hsl(var(--surface))]/40 transition-colors">
                        <div className="px-2 py-1.5 border-r border-border text-muted-foreground text-center">{n}</div>
                        <div className="px-2 py-1.5 border-r border-border">{c}</div>
                        <div className="px-2 py-1.5 border-r border-border text-muted-foreground">{s}</div>
                        <div className={`px-2 py-1.5 ${st === "✓ in" ? "text-primary" : "text-muted-foreground"}`}>{st}</div>
                      </div>
                    ))}
                    <div className="px-3 py-2 label-mono flex justify-between">
                      <span>Sheet 1 of 3 — Q2 pipeline</span>
                      <span>SF · GMT-7</span>
                    </div>
                  </div>
                )}

                {tab === "music" && (
                  <div className="p-6 space-y-5 font-mono text-[12px]">
                    <div className="flex items-center gap-4">
                      {/* album art */}
                      <div className="relative h-20 w-20 rounded-sm overflow-hidden border border-border shrink-0 bg-gradient-to-br from-primary-soft to-accent">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-10 w-10 rounded-full border-2 border-background/70 flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-background/70" />
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="label-mono mb-1">now playing</div>
                        <div className="text-foreground text-sm normal-case tracking-normal truncate">Snooze</div>
                        <div className="text-muted-foreground normal-case tracking-normal truncate">SZA — SOS</div>
                      </div>
                    </div>

                    {/* progress bar */}
                    <div>
                      <div className="h-1 bg-border rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-primary" />
                      </div>
                      <div className="flex justify-between mt-1.5 label-mono">
                        <span>2:14</span>
                        <span>3:24</span>
                      </div>
                    </div>

                    {/* up next */}
                    <div className="space-y-1.5">
                      <div className="label-mono">up next</div>
                      {[
                        ["Midnight Sun", "Zara Larsson"],
                        ["CUFF IT", "Beyoncé"],
                        ["XS", "Rina Sawayama"],
                      ].map(([song, artist]) => (
                        <div key={song} className="flex justify-between text-[11px] normal-case tracking-normal">
                          <span className="text-foreground truncate">{song}</span>
                          <span className="text-muted-foreground truncate ml-3">{artist}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* corner ticks */}
              <div className="absolute top-0 left-0 h-3 w-3 border-t border-l border-primary/60" />
              <div className="absolute top-0 right-0 h-3 w-3 border-t border-r border-primary/60" />
              <div className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-primary/60" />
              <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-primary/60" />
            </div>

            {/* status bar */}
            <div className="mt-3 flex items-center justify-between label-mono">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
                LIVE
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;