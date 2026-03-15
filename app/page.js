"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Gauge, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import BootSequence from "@/components/BootSequence";
import ImpossibleChapters from "@/components/ImpossibleChapters";
import ImpossibleHero from "@/components/ImpossibleHero";
import MagneticButton from "@/components/MagneticButton";
import ModeSwitch from "@/components/ModeSwitch";
import ResponseGrid from "@/components/ResponseGrid";
import WorldFX from "@/components/WorldFX";

const credibility = [
  {
    icon: Sparkles,
    title: "Immediate impact",
    body: "The first screen should feel premium and memorable within two seconds.",
  },
  {
    icon: Layers3,
    title: "Coherence",
    body: "All parts of the site should appear to belong to the same world; nothing should feel bolted on.",
  },
  {
    icon: Gauge,
    title: "Motion quality",
    body: "Animations should feel smooth, deliberate, and hierarchy-aware - never random or overused.",
  },
  {
    icon: ShieldCheck,
    title: "Believability",
    body: "Even if the experience is futuristic, it still needs to feel intentional, usable, and professionally engineered.",
  },
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
          <a href="#chapters">Story</a>
          <a href="#config">Config</a>
          <a href="#credibility">Credibility</a>
          <a href="/testimonials">Testimonials</a>
        </nav>
      </header>

      <ImpossibleHero />
      <ImpossibleChapters />
      <ResponseGrid />

      <section className="section-shell" id="config">
        <div className="section-intro">
          <span className="eyebrow">configurator / variant switch</span>
          <h2>Let users toggle themes, states, and visual pressure without breaking the world.</h2>
          <p>
            A premium experience should feel responsive. The strongest version lets people switch
            between colder product tension, warmer reveal energy, and full launch-mode intensity.
          </p>
        </div>
        <ModeSwitch active={mode} setActive={setMode} />
      </section>

      <section className="section-shell" id="credibility">
        <div className="section-intro">
          <span className="eyebrow">specs / credibility</span>
          <h2>Anchor the fantasy in believable detail, performance, and proof.</h2>
          <p>
            To feel like something no one has ever seen, the site needs more than effects. It needs a
            clear world, a strong product story, a disciplined motion language, and a few unforgettable moments
            executed at a premium level.
          </p>
        </div>

        <div className="stats-grid">
          {credibility.map(({ icon: Icon, title, body }, index) => (
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
            <span className="eyebrow">final call to action</span>
            <h2>Finish with a singular, high-confidence action.</h2>
            <p>
              The site should not reveal everything immediately. It should feel paced - every section should earn the next one,
              and the final action should feel inevitable rather than forced.
            </p>
          </div>
          <div className="launch-actions">
            <MagneticButton href="/testimonials">
              View testimonials
            </MagneticButton>
            <MagneticButton href="https://github.com/Kryvexis/Website" secondary>
              Open repo <ArrowUpRight size={16} />
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
