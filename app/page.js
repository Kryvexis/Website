"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Workflow, Clapperboard, Layers3 } from "lucide-react";
import BootSequence from "@/components/BootSequence";
import GlobalReactor from "@/components/GlobalReactor";
import MagneticButton from "@/components/MagneticButton";
import ModeSwitch from "@/components/ModeSwitch";
import ParticleMatrix from "@/components/ParticleMatrix";
import SystemHero from "@/components/SystemHero";
import SystemStory from "@/components/SystemStory";
import TouchModules from "@/components/TouchModules";

const stats = [
  { icon: Clapperboard, title: "Longer cinematic loading", body: "A slower, more dramatic startup makes the world feel like it is actually powering on." },
  { icon: Layers3, title: "System not website", body: "Large frames, motion rails, overlays, beams, and branded surfaces make it feel like software." },
  { icon: Sparkles, title: "Touch + mouse reactive", body: "Mobile users still get motion response instead of a stripped-down static experience." },
  { icon: Workflow, title: "Still deployable", body: "Next.js structure stays clean for GitHub pushes and Vercel deployment." }
];

export default function Page() {
  const [mode, setMode] = useState("flux");
  const pageClass = useMemo(() => `portal-root theme-${mode}`, [mode]);

  return (
    <main className={pageClass}>
      <BootSequence />
      <GlobalReactor />
      <ParticleMatrix />
      <div className="noise-layer" />
      <div className="grid-layer" />
      <div className="horizon-band band-a" />
      <div className="horizon-band band-b" />

      <header className="portal-nav">
        <a href="#top" className="brand-mark">
          <span className="brand-dot" />
          Kryvexis System Portal V7
        </a>
        <nav>
          <a href="#story">Story</a>
          <a href="#config">Config</a>
          <a href="#launch">Launch</a>
        </nav>
      </header>

      <SystemHero />
      <SystemStory />
      <TouchModules />

      <section className="section-shell" id="config">
        <div className="section-intro">
          <span className="eyebrow">world configuration</span>
          <h2>Switch the whole atmosphere live.</h2>
          <p>
            This changes the system mood without changing the structure, so you can steer between spectacle and control.
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
            <h2>Over the top, branded, animated, and far less like a normal website.</h2>
            <p>
              This version is designed as a base for the final insane version: add your real media, screenshots,
              product shots, or video textures and it will feel even more like a living Kryvexis system.
            </p>
          </div>
          <div className="launch-actions">
            <MagneticButton href="https://github.com/Kryvexis/Website">
              Open repo <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#top" secondary>
              Re-run system <Sparkles size={16} />
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
