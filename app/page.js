"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clapperboard, Layers3, Sparkles, Workflow } from "lucide-react";
import BootSequence from "@/components/BootSequence";
import CinematicHero from "@/components/CinematicHero";
import CursorAura from "@/components/CursorAura";
import MagneticButton from "@/components/MagneticButton";
import ModeSwitch from "@/components/ModeSwitch";
import ParticleField from "@/components/ParticleField";
import StoryScenes from "@/components/StoryScenes";

const stats = [
  { icon: Clapperboard, title: "Cinematic scroll flow", body: "Sticky chapters and moving compositions make the page feel watched, not merely read." },
  { icon: Layers3, title: "More background action", body: "Particles, layered gradients, picture-forming shapes, and visual frames stay active behind the content." },
  { icon: Sparkles, title: "More original direction", body: "The site acts more like a digital sequence or teaser than a typical animated product page." },
  { icon: Workflow, title: "Still deployable", body: "Clean Next.js structure for GitHub pushes and Vercel deployment without special hosting tricks." },
];

export default function Page() {
  const [mode, setMode] = useState("flux");
  const pageClass = useMemo(() => `portal-root theme-${mode}`, [mode]);

  return (
    <main className={pageClass}>
      <BootSequence />
      <CursorAura />
      <ParticleField />
      <div className="noise-layer" />
      <div className="grid-layer" />

      <header className="portal-nav">
        <a href="#top" className="brand-mark">
          <span className="brand-dot" />
          Kryvexis OS Portal V6
        </a>
        <nav>
          <a href="#story">Story</a>
          <a href="#config">Config</a>
          <a href="#launch">Launch</a>
        </nav>
      </header>

      <CinematicHero />
      <StoryScenes />

      <section className="section-shell" id="config">
        <div className="section-intro">
          <span className="eyebrow">world configuration</span>
          <h2>Change the cinematic atmosphere without replacing the core sequence.</h2>
          <p>
            Use this to steer the world toward sharper product energy, bigger event energy, or warmer reveal energy.
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
              initial={{ opacity: 0, y: 22 }}
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
            <h2>This version pushes closer to a website you watch like a trailer.</h2>
            <p>
              The strongest next move after this would be replacing abstract shapes with your own media, renders,
              screenshots, or product visuals so the cinematic motion tells a real Kryvexis story.
            </p>
          </div>
          <div className="launch-actions">
            <MagneticButton href="https://github.com/Kryvexis/Website">
              Open repo <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#top" secondary>
              Re-run portal <Sparkles size={16} />
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
