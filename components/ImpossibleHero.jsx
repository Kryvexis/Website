"use client";

import { motion } from "framer-motion";
import { MoveRight, Sparkles, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

const sidePanels = [
  { label: "signal pressure", pos: "panel-a" },
  { label: "reactive surfaces", pos: "panel-b" },
  { label: "touch field", pos: "panel-c" },
  { label: "launch route", pos: "panel-d" },
];

export default function ImpossibleHero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <div className="pill-row">
          <span className="interface-pill"><Sparkles size={14} /> one coherent impossible world</span>
          <span className="interface-pill"><Zap size={14} /> touch + scroll + light-pressure</span>
        </div>

        <h1>
          A <span>living system world</span>
          <br />
          built inside a website.
        </h1>

        <p>
          V10 stops stacking random effects and turns the browser into one directed experience:
          branded signal language, takeover chapters, fake-film transitions, and interaction pressure everywhere.
        </p>

        <div className="hero-actions">
          <MagneticButton href="#chapters">Enter the impossible world</MagneticButton>
          <MagneticButton href="#launch" secondary>
            Open the final chamber <MoveRight size={16} />
          </MagneticButton>
        </div>

        <div className="hero-metrics">
          <div><strong>ONE</strong><span>unified motion language</span></div>
          <div><strong>WORLD</strong><span>not page sections</span></div>
          <div><strong>V10</strong><span>flagship concept build</span></div>
        </div>
      </div>

      <div className="hero-stage">
        <motion.div
          className="reactor-shell"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="hero-frame frame-a" />
          <div className="hero-frame frame-b" />
          <div className="hero-frame frame-c" />
          <div className="hero-ring ring-a" />
          <div className="hero-ring ring-b" />
          <motion.div className="hero-wipe wipe-a" animate={{ x: ["-24%", "124%"] }} transition={{ duration: 4.6, repeat: Infinity, ease: "linear" }} />
          <motion.div className="hero-wipe wipe-b" animate={{ x: ["124%", "-24%"] }} transition={{ duration: 5.4, repeat: Infinity, ease: "linear" }} />

          <div className="hero-core chamber-core">
            <div className="hero-core-glow" />
            <div className="hero-core-noise" />
            <div className="reactor-grid" />
            <motion.div
              className="reactor-orbit orbit-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="reactor-orbit orbit-2"
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="reactor-orbit orbit-3"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="reactor-core"
              animate={{
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 0 40px rgba(56,189,248,.30)",
                  "0 0 110px rgba(168,85,247,.42)",
                  "0 0 40px rgba(56,189,248,.30)"
                ]
              }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="reactor-core-inner" />
            </motion.div>

            {sidePanels.map((item, index) => (
              <motion.div
                key={item.label}
                className={`reactor-side-panel ${item.pos}`}
                animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>kryvexis</span>
                <strong>{item.label}</strong>
              </motion.div>
            ))}

            <div className="subtle-brand-stamp">KRYVEXIS // SIGNAL CORE</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
