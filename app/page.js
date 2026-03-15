"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clapperboard, Layers3, Sparkles, Workflow } from "lucide-react";
import BootSequence from "@/components/BootSequence";
import ImpossibleChapters from "@/components/ImpossibleChapters";
import ImpossibleHero from "@/components/ImpossibleHero";
import ImagePlaceholders from "@/components/ImagePlaceholders";
import MagneticButton from "@/components/MagneticButton";
import ModeSwitch from "@/components/ModeSwitch";
import ResponseGrid from "@/components/ResponseGrid";
import WorldFX from "@/components/WorldFX";

const stats = [
  { icon: Clapperboard, title: "One directed experience", body: "The site behaves like a cinematic machine-world instead of a landing page with effects." },
  { icon: Layers3, title: "Unified motion grammar", body: "Backgrounds, wipes, panels, glow fields, and interactions now all speak the same language." },
  { icon: Sparkles, title: "Interactive on every device", body: "Touch still feels expressive, while desktop keeps full motion pressure and tilt response." },
  { icon: Workflow, title: "Still deployable", body: "Despite the spectacle, the structure remains simple for GitHub and Vercel deployment." }
];

export default function Page() {
  const [mode, setMode] = useState("flux");
  const pageClass = useMemo(() => `portal-root theme-${mode}`, [mode]);

  return (
    <main className={pageClass}>
      <BootSequence />
      <WorldFX />
      <div className="noise-layer" />
      <div className="grid-layer" />
      <div className="horizon-band band-a" />
      <div className="horizon-band band-b" />
      <div className="flash-wash wash-a" />
      <div className="flash-wash wash-b" />
      <div className="scan-sheet" />
      <div className="vignette-mask" />

      <header className="portal-nav">
        <a href="#top" className="brand-mark">
          <span className="brand-dot" />
          Kryvexis Impossible V10
        </a>
        <nav>
          <a href="#chapters">Chapters</a>
          <a href="#previews">Previews</a>
          <a href="#config">Config</a>
          <a href="#launch">Launch</a>
        </nav>
      </header>

      <ImpossibleHero />
      <ImpossibleChapters />
      <ImagePlaceholders />
      <ResponseGrid />

      <section className="section-shell" id="config">
        <div className="section-intro">
          <span className="eyebrow">world configuration</span>
          <h2>Shift the entire machine mood live.</h2>
          <p>
            The same structure can feel colder, sharper, or hotter without breaking the world it lives in.
          </p>
        </div>
        <ModeSwitch active={mode} setActive={setMode} />
      </section>

      <section className="section-shell">
        <div className="stats-grid">
          {stats.map(({ icon: Icon, title, body }, index) => (
            <motion.div
              className="stat-card"
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="stat-icon"><Icon size={18} /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell" id="launch">
        <motion.div
          className="launch-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="launch-copy">
            <span className="eyebrow">launch sequence</span>
            <h2>This is the strongest one-concept version yet.</h2>
            <p>
              The next leap after this is no longer more abstraction. It is plugging real Kryvexis media, UI, renders, and product story into this world.
            </p>
          </div>
          <div className="launch-actions">
            <MagneticButton href="https://github.com/Kryvexis/Website">
              Open repo <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#top" secondary>
              Reboot the world <Sparkles size={16} />
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
