"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight, Sparkles, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function SystemHero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <div className="pill-row">
          <span className="interface-pill"><Sparkles size={14} /> insane system theater</span>
          <span className="interface-pill"><Zap size={14} /> touch + scroll + glow overload</span>
        </div>

        <h1>
          A <span>reactive machine</span>
          <br />
          pretending to be a website.
        </h1>

        <p>
          V8 goes harder: aggressive HUD layers, branded reactor frames, fake scan passes,
          full-screen takeover scenes, motion overload, and a much bigger sense of “this thing is alive.”
        </p>

        <div className="hero-actions">
          <MagneticButton href="#takeover">Open takeover</MagneticButton>
          <MagneticButton href="#launch" secondary>
            Enter launch chamber <MoveRight size={16} />
          </MagneticButton>
        </div>

        <div className="hero-metrics">
          <div><strong>6.8s</strong><span>deep boot sequence</span></div>
          <div><strong>HUD</strong><span>overloaded system interface</span></div>
          <div><strong>V8</strong><span>go insane mode</span></div>
        </div>
      </div>

      <div className="hero-stage">
        <motion.div
          className="logo-reactor"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="hero-rail rail-a" />
          <div className="hero-rail rail-b" />
          <div className="hero-rail rail-c" />

          <motion.div
            className="hero-hud hud-a"
            animate={{ rotate: [0, 2, 0], opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero-hud hud-b"
            animate={{ rotate: [0, -2, 0], opacity: [0.24, 0.72, 0.24] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero-hud hud-c"
            animate={{ scale: [0.98, 1.03, 0.98], opacity: [0.18, 0.5, 0.18] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="logo-shell">
            <div className="logo-shell-glow" />
            <motion.div
              className="scan-slice scan-slice-a"
              animate={{ x: ["-18%", "118%"] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="scan-slice scan-slice-b"
              animate={{ x: ["118%", "-18%"] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "linear" }}
            />
            <Image
              src="/kryvexis-logo.png"
              alt="Kryvexis"
              width={760}
              height={340}
              className="hero-logo"
              priority
            />
          </div>

          <div className="hero-chip chip-a">visual horizon</div>
          <div className="hero-chip chip-b">reactor map</div>
          <div className="hero-chip chip-c">touch grid</div>
          <div className="hero-chip chip-d">launch overdrive</div>
        </motion.div>
      </div>
    </section>
  );
}
