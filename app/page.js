"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clapperboard, Layers3, Sparkles, Workflow } from "lucide-react";
import BootSequence from "@/components/BootSequence";
import FakeVideoScenes from "@/components/FakeVideoScenes";
import MagneticButton from "@/components/MagneticButton";
import ModeSwitch from "@/components/ModeSwitch";
import OverdriveGrid from "@/components/OverdriveGrid";
import ParticleStorm from "@/components/ParticleStorm";
import SystemHero from "@/components/SystemHero";
import SystemReactor from "@/components/SystemReactor";

const stats = [
  { icon: Clapperboard, title: "Fake video scene flow", body: "Sticky cinematic cuts and poster compositions make the site feel edited like a trailer." },
  { icon: Layers3, title: "More projection pressure", body: "The background now carries stronger scanlines, wipes, light passes, and screen noise." },
  { icon: Sparkles, title: "Still reactive on mobile", body: "Touch keeps the machine expressive instead of stripping the experience down." },
  { icon: Workflow, title: "Still deploy-ready", body: "Even with the spectacle turned up, the structure stays simple for GitHub and Vercel." }
];

export default function Page() {
  const [mode, setMode] = useState("flux");
  const pageClass = useMemo(() => `portal-root theme-${mode}`, [mode]);

  return (
    <main className={pageClass}>
      <BootSequence />
      <SystemReactor />
      <ParticleStorm />
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
          Kryvexis System Portal V9
        </a>
        <nav>
          <a href="#cinema">Cinema</a>
          <a href="#config">Config</a>
          <a href="#launch">Launch</a>
        </nav>
      </header>

      <SystemHero />
      <FakeVideoScenes />
      <OverdriveGrid />

      <section className="section-shell" id="config">
        <div className="section-intro">
          <span className="eyebrow">world configuration</span>
          <h2>Change the film mood live.</h2>
          <p>
            Shift the whole trailer language between cold reactor, sharp product tension, and warmer reveal energy.
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
            <h2>Now it behaves more like a trailer projected through a machine.</h2>
            <p>
              The next jump after this is feeding in real Kryvexis imagery, renders, or screenshots so the fake video system
              starts telling a true brand story instead of a pure atmospheric one.
            </p>
          </div>
          <div className="launch-actions">
            <MagneticButton href="https://github.com/Kryvexis/Website">
              Open repo <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#top" secondary>
              Reboot film engine <Sparkles size={16} />
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
