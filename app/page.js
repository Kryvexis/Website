"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers3, Radar, Sparkles, Workflow } from "lucide-react";
import BootSequence from "@/components/BootSequence";
import CursorAura from "@/components/CursorAura";
import HologramChamber from "@/components/HologramChamber";
import MagneticButton from "@/components/MagneticButton";
import ModeSwitch from "@/components/ModeSwitch";
import OrbitalHero from "@/components/OrbitalHero";
import ParticleField from "@/components/ParticleField";
import SceneCard from "@/components/SceneCard";
import SignalMarquee from "@/components/SignalMarquee";

const modules = [
  {
    eyebrow: "signature interaction 01",
    title: "Portal breach hero",
    description: "The hero behaves like a live system event, with orbit lines, floating shards, pressure glows, and layered depth.",
    bullets: ["orbits and shards", "central energy core", "set-piece arrival"]
  },
  {
    eyebrow: "signature interaction 02",
    title: "Hologram chamber",
    description: "A mid-page room for asymmetric diagnostics, scanning surfaces, and premium motion that breaks the normal landing-page rhythm.",
    bullets: ["rotating diagnostics", "scan sweeps", "room-like composition"]
  },
  {
    eyebrow: "signature interaction 03",
    title: "Kinetic conversion controls",
    description: "Buttons, cards, and launch surfaces all react physically, creating tension and reward around interaction.",
    bullets: ["magnetic CTA", "tilting modules", "energy ripple cues"]
  }
];

const stats = [
  { icon: Cpu, title: "Motion-minded structure", body: "The experience is layered for drama without relying on heavy 3D runtime dependencies." },
  { icon: Layers3, title: "Depth language", body: "Foreground, midground, background, and atmospheric passes all move on separate tempos." },
  { icon: Radar, title: "Interactive identity", body: "The site no longer uses animation as garnish. Motion becomes the product language." },
  { icon: Workflow, title: "Deploy discipline", body: "Still structured cleanly for GitHub commits and frictionless Vercel deployment." }
];

export default function Page() {
  const [mode, setMode] = useState("flux");
  const className = useMemo(() => `portal-root theme-${mode}`, [mode]);

  return (
    <main className={className}>
      <BootSequence />
      <CursorAura />
      <ParticleField />
      <div className="noise-layer" />
      <div className="grid-layer" />

      <header className="portal-nav">
        <a href="#top" className="brand-mark">
          <span className="brand-dot" />
          Kryvexis OS Portal V4
        </a>
        <nav>
          <a href="#modules">Modules</a>
          <a href="#chamber">Chamber</a>
          <a href="#config">Config</a>
          <a href="#launch">Launch</a>
        </nav>
      </header>

      <OrbitalHero />
      <SignalMarquee />

      <section className="section-shell" id="modules">
        <div className="section-intro">
          <span className="eyebrow">motion architecture</span>
          <h2>V4 upgrades the site from a futuristic page into a richer interactive world.</h2>
          <p>
            The portal is designed as a sequence of scenes. Each block changes posture, pacing,
            and light behavior so the user feels like they are entering new states, not just reading sections.
          </p>
        </div>

        <div className="scene-grid">
          {modules.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
            >
              <SceneCard {...item} index={index} />
            </motion.div>
          ))}
        </div>
      </section>

      <HologramChamber />

      <section className="section-shell system-band">
        <div className="system-copy">
          <span className="eyebrow">scene flow engine</span>
          <h2>The website changes mood as the user travels through it.</h2>
          <p>
            Entry creates awe. Midpoint creates tension. Final panels focus action. The world keeps
            evolving so the interface feels intentional and alive instead of decorative.
          </p>
        </div>

        <div className="timeline-panel">
          {["Arrival pulse", "Hero breach", "Signal ribbon", "Hologram chamber", "Launch conversion"].map((item, index) => (
            <motion.div
              key={item}
              className="timeline-step"
              initial={{ opacity: 0.45, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell" id="config">
        <div className="section-intro">
          <span className="eyebrow">world configuration</span>
          <h2>Change the visual atmosphere in real time.</h2>
          <p>
            The portal can switch between aggressive event styling and cleaner product styling.
            That makes it easier to evolve the experience without replacing the core system.
          </p>
        </div>
        <ModeSwitch active={mode} setActive={setMode} />
      </section>

      <section className="section-shell">
        <div className="stats-grid">
          {stats.map(({ icon: Icon, title, body }, index) => (
            <motion.div
              key={title}
              className="stat-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
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
          transition={{ duration: 0.7 }}
        >
          <div className="launch-copy">
            <span className="eyebrow">launch sequence</span>
            <h2>This is the strongest foundation yet for a one-of-one Kryvexis website.</h2>
            <p>
              Drop in your real copy, brand story, product blocks, client proof, and media.
              Then push straight to GitHub and import to Vercel using the default Next.js flow.
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
