import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import NowRefining from "@/components/portfolio/NowRefining";
import OffTheClock from "@/components/portfolio/OffTheClock";
import Contact from "@/components/portfolio/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Alexis Echano";
    const desc =
      "Alexis Echano — Investor at Ardent, ex-Palo Alto Networks PM, ex-Meta engineer, Stanford CS '23.";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen scanline">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <NowRefining />
      <OffTheClock />
      <Contact />
    </main>
  );
};

export default Index;
