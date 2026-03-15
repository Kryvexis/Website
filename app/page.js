"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Gauge, Layers3, Radar, ScanLine, Sparkles } from "lucide-react";
import BootSequence from "@/components/BootSequence";
import CursorLight from "@/components/CursorLight";
import InteractiveCard from "@/components/InteractiveCard";
import MagneticButton from "@/components/MagneticButton";
import ModeConsole from "@/components/ModeConsole";
import OrbitalHero from "@/components/OrbitalHero";
import ParticleField from "@/components/ParticleField";
import SignalMarquee from "@/components/SignalMarquee";

const modules = [
  {
    eyebrow: "signature layer 01",
    title: "Shockwave CTA physics",
    description: "Buttons lean toward the cursor, emit ripples, and feel charged instead of merely clickable.",
    points: ["cursor pull", "stacked ripple rings", "conversion with presence"]
  },
  {
    eyebrow: "signature layer 02",
    title: "Holographic system cards",
    description: "Cards tilt in 3D, generate local glow, and feel like detached control modules hovering over the page.",
    points: ["depth illusion", "hover voltage", "modular visual grammar"]
  },
  {
    eyebrow: "signature layer 03",
    title: "Ambient particle fabric",
    description: "A living background field creates constant motion and quiet complexity without turning into a lag machine.",
    points: ["canvas particles", "line linking", "mouse drift response"]
  }
];

const stats = [
  { icon: Cpu, label: "Visual engine", value: "Framer Motion + canvas ambient layer + transform-driven lighting." },
  { icon: Layers3, label: "Depth system", value: "Foreground, orbitals, UI glass, and atmosphere all move independently." },
  { icon: Radar, label: "Interaction map", value: "Cursor aura, magnetic controls, live tabs, reveal rooms, and reactive cards." },
  { icon: Gauge, label: "Deployment target", value: "Next.js app optimized to run cleanly through GitHub and Vercel." },
];

export default function Page() {
  const [mode, setMode] = useState("flux");
  const themeClass = useMemo(() => `theme-${mode}`, [mode]);

  return (
    <main className={`portal-root ${themeClass}`}>
      <BootSequence />
      <ParticleField />
      <CursorLight />
      <div className="noise-layer" />
      <div className="grid-layer" />
      <div className="scanline-layer" />

      <header className="portal-nav">
        <a href="#top" className="brand-mark"><span className="brand-dot" />Kryvexis OS Portal // V3</a>
        <nav>
          <a href="#systems">Systems</a>
          <a href="#console">Console</a>
          <a href="#launch">Launch</a>
        </nav>
      </header>

      <section id="top">
        <OrbitalHero />
      </section>

      <SignalMarquee />

      <section className="section-shell" id="systems">
        <div className="section-intro">
          <span className="eyebrow">system architecture</span>
          <h2>Everything should move, but it should move like it belongs to the same machine.</h2>
          <p>
            V3 is designed around coherent motion language: glow, orbit, pulse, sweep, hover depth, and scan energy.
            The site feels like a product demo room, not a layout with animations sprinkled on top.
          </p>
        </div>

        <div className="card-grid">
          {modules.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <InteractiveCard item={item} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell split-shell">
        <div className="story-room">
          <span className="eyebrow">reveal sequence</span>
          <h2>Scroll through rooms, not sections.</h2>
          <p>
            The portal escalates from arrival to system overview to launch chamber. Each band introduces a new
            emotional state so the page feels choreographed and expensive.
          </p>
          <div className="sequence-rail">
            {["Arrival pulse", "System decode", "Signal tension", "Offer lock", "Launch chamber"].map((step, i) => (
              <motion.div
                key={step}
                className="sequence-step"
                initial={{ opacity: 0.5, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="holo-stage">
          <motion.div
            className="holo-slab"
            animate={{ rotateX: [0, 4, 0], rotateY: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="holo-grid" />
            <div className="holo-ring r1" />
            <div className="holo-ring r2" />
            <div className="holo-dot d1" />
            <div className="holo-dot d2" />
            <div className="holo-dot d3" />
            <div className="holo-caption">
              <span className="eyebrow">signal object</span>
              <strong>Launch-ready visual centerpiece</strong>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell" id="console">
        <div className="section-intro">
          <span className="eyebrow">mood controller</span>
          <h2>Switch the entire portal atmosphere live.</h2>
          <p>
            This gives the site product-like behavior. You can tune the portal for enterprise, sci-fi, or premium launch-event energy.
          </p>
        </div>
        <ModeConsole active={mode} setActive={setMode} />
      </section>

      <section className="section-shell">
        <div className="stats-grid">
          {stats.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              className="stat-card"
              key={label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <div className="stat-icon"><Icon size={18} /></div>
              <h3>{label}</h3>
              <p>{value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell" id="launch">
        <motion.div
          className="launch-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="launch-copy">
            <span className="eyebrow">launch chamber</span>
            <h2>Push this into Vercel and keep evolving the spectacle.</h2>
            <p>
              V3 is a stronger base for the “no-one-has-seen-this” direction. It is still structured cleanly enough for
              deployment, editing, and future sections like testimonials, product demos, AI modules, or a quote engine.
            </p>
          </div>

          <div className="launch-actions">
            <MagneticButton href="https://github.com/Kryvexis/Website">Open repo <ArrowUpRight size={16} /></MagneticButton>
            <MagneticButton href="#top" secondary>Reboot portal <ScanLine size={16} /></MagneticButton>
            <MagneticButton href="#console" secondary>Switch mode <Sparkles size={16} /></MagneticButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
