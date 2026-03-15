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
  { icon: Clapperboard, title: "Current maturity", body: "Kryvexis OS is best described as advanced foundation, late build, and pre-polish rather than early concept." },
  { icon: Layers3, title: "Strongest remaining work", body: "The key work is no longer ideation. It is trust and finish: auth stability, backend role checks, company isolation, automation reliability, and design consistency." },
  { icon: Sparkles, title: "Recommended priority sequence", body: "Trust layer first, then operational depth, automation reliability, design consistency, and a polished showcase build." },
  { icon: Workflow, title: "Commercial direction", body: "A stable, visually refined showcase build with coherent sample data and role-based demonstrations will accelerate demos and partner conversations." }
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
          Kryvexis OS
        </a>
        <nav>
          <a href="#chapters">Overview</a>
          <a href="#previews">Screens</a>
          <a href="#config">Focus</a>
          <a href="#launch">Roadmap</a>
        </nav>
      </header>

      <ImpossibleHero />
      <ImpossibleChapters />
      <ImagePlaceholders />
      <ResponseGrid />

      <section className="section-shell" id="config">
        <div className="section-intro">
          <span className="eyebrow">presentation focus</span>
          <h2>Choose the story you want Kryvexis OS to lead with.</h2>
          <p>
            The same product can be presented as a commercial showcase, an operational workspace, or a trust-and-rollout platform depending on the audience.
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
            <span className="eyebrow">recommended rollout priorities</span>
            <h2>Trust, operational depth, automation reliability, design consistency, and a showcase build.</h2>
            <p>
              The product already has genuine breadth across commercial execution, stock control, procurement, finance, reporting, operational workflows, and workspace governance. The next step is to prove trust, consistency, and finish before full commercial rollout.
            </p>
          </div>
          <div className="launch-actions">
            <MagneticButton href="https://github.com/Kryvexis/Website">
              View project repo <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#top" secondary>
              Restart overview <Sparkles size={16} />
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
