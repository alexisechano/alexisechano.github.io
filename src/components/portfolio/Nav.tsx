const links = [
  { href: "#about", label: "Cold Open" },
  { href: "#experience", label: "Episodes" },
  { href: "#offline", label: "Off-the-clock" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border">
      <div className="container flex items-center justify-between h-14">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-soft" aria-hidden />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-foreground">
            alexis<span className="text-muted-foreground"> echano</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground underline-grow transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="font-mono text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 border border-border rounded-sm hover:border-primary hover:text-primary transition-colors"
        >
          Say hi →
        </a>
      </div>
    </header>
  );
};

export default Nav;
