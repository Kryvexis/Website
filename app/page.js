"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Gauge, Layers3, Radar, Sparkles } from "lucide-react";
import BootSequence from "@/components/BootSequence";
import OrbitalHero from "@/components/OrbitalHero";
import SceneCard from "@/components/SceneCard";
import VariantSwitch from "@/components/VariantSwitch";
import MagneticButton from "@/components/MagneticButton";

const modules = [
  {
    eyebrow: "signature moment 01",
    title: "Shockwave controls",
    description:
      "Buttons and calls to action feel physical. Clicks trigger soft ripple bursts, cursor pull, and neon charge-up.",
    bullets: ["magnetic hover", "energy rings", "premium CTA logic"],
  },
  {
    eyebrow: "signature moment 02",
    title: "Layer-split cards",
    description:
      "Every important card behaves like a stacked module with detached glow planes, tilt response, and inner motion.",
    bullets: ["depth illusion", "hover parallax", "modular system language"],
  },
  {
    eyebrow: "signature moment 03",
    title: "Scene choreography",
    description:
      "Instead of static sections, the portal transitions in phases. Each zone feels like a room in a larger operating system.",
    bullets: ["scroll pacing", "wipe transitions", "state-based visual shifts"],
  },
];

const stats = [
  {
    icon: Cpu,
    label: "GPU-friendly layers",
    value: "Composed from gradients, transforms, and lightweight motion values.",
  },
  {
    icon: Layers3,
    label: "Depth grammar",
    value: "Foreground, midground, and atmospheric surfaces all move on different rhythms.",
  },
  {
    icon: Gauge,
    label: "Performance discipline",
    value: "Built to feel extreme without collapsing on deployment or lower-end devices.",
  },
  {
    icon: Radar,
    label: "Interaction hooks",
    value: "Cursor lights, set-pieces, active states, and variant switching are all native.",
  },
];

export default function Page() {
  const [activeMode, setActiveMode] = useState("flux");
  const themeClass = useMemo(() => `theme-${activeMode}`, [activeMode]);

  return (
    <main className={`portal-root ${themeClass}`}>
      <BootSequence />
      <div className="noise-layer" />
      <div className="grid-layer" />

      <header className="portal-nav">
        <a href="#top" className="brand-mark">
          <span className="brand-dot" />
          Kryvexis OS Portal
        </a>
        <nav>
          <a href="#modules">Modules</a>
          <a href="#config">Config</a>
          <a href="#launch">Launch</a>
        </nav>
      </header>

      <section id="top">
        <OrbitalHero />
      </section>

      <section className="section-shell" id="modules">
        <div className="section-intro">
          <span className="eyebrow">portal architecture</span>
          <h2>Three signature interactions that make the site feel impossible to copy.</h2>
          <p>
            This is not decoration pasted onto a template. Every module shares
            the same world: energy, precision, restraint, and surprise.
          </p>
        </div>

        <div className="scene-grid">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >
              <SceneCard {...module} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell system-band">
        <div className="system-copy">
          <span className="eyebrow">living interface state</span>
          <h2>Every scroll step changes the room.</h2>
          <p>
            The interface shifts from arrival to reveal to conversion. Ambient
            rings rotate. Bands sweep across the viewport. Data modules surface
            exactly when attention peaks.
          </p>
        </div>

        <div className="timeline-panel">
          {["Arrival pulse", "Core reveal", "Offer focus", "Variant shift", "Launch close"].map(
            (step, index) => (
              <motion.div
                key={step}
                className="timeline-step"
                initial={{ opacity: 0.4, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </motion.div>
            )
          )}
        </div>
      </section>

      <section className="section-shell" id="config">
        <div className="section-intro">
          <span className="eyebrow">variant engine</span>
          <h2>Switch the portal mood in real time.</h2>
          <p>
            A premium experience should respond like a product. This control
            changes the overall environment, giving you a configurable launch
            language.
          </p>
        </div>

        <VariantSwitch active={activeMode} setActive={setActiveMode} />
      </section>

      <section className="section-shell">
        <div className="stats-grid">
          {stats.map(({ icon: Icon, label, value }, index) => (
            <motion.div
              className="stat-card"
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="stat-icon">
                <Icon size={18} />
              </div>
              <h3>{label}</h3>
              <p>{value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell" id="launch">
        <motion.div
          className="launch-panel"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="launch-copy">
            <span className="eyebrow">launch sequence</span>
            <h2>Make the website feel like a product unveiling.</h2>
            <p>
              This V2 starter is designed as the foundation for a much bigger
              Kryvexis experience. Swap in your final copy, product story, and
              media, then push directly through GitHub into Vercel.
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
