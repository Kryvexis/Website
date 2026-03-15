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
          <span className="interface-pill"><Sparkles size={14} /> system-grade visuals</span>
          <span className="interface-pill"><Zap size={14} /> touch + scroll reactive</span>
        </div>

        <h1>
          This should feel like a <span>modern system</span>
          <br />
          not a normal website.
        </h1>

        <p>
          V7 replaces the ordinary hero with a living command environment built around the Kryvexis logo,
          moving data rails, touch-reactive surfaces, and a much longer, more dramatic loading handoff.
        </p>

        <div className="hero-actions">
          <MagneticButton href="#story">Enter the system</MagneticButton>
          <MagneticButton href="#launch" secondary>
            Launch sequence <MoveRight size={16} />
          </MagneticButton>
        </div>

        <div className="hero-metrics">
          <div><strong>5s+</strong><span>cinematic load screen</span></div>
          <div><strong>LIVE</strong><span>glow / motion environment</span></div>
          <div><strong>V7</strong><span>system-world concept</span></div>
        </div>
      </div>

      <div className="hero-stage">
        <motion.div
          className="logo-core-shell"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="system-frame frame-a" />
          <div className="system-frame frame-b" />
          <div className="system-frame frame-c" />
          <motion.div
            className="scan-rail rail-a"
            animate={{ x: ["-20%", "110%"] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="scan-rail rail-b"
            animate={{ x: ["110%", "-20%"] }}
            transition={{ duration: 5.1, repeat: Infinity, ease: "linear" }}
          />
          <div className="logo-display">
            <div className="logo-display-glow" />
            <Image
              src="/kryvexis-logo.png"
              alt="Kryvexis"
              width={680}
              height={310}
              className="hero-logo"
              priority
            />
          </div>
          <div className="hero-system-tag top-left">adaptive visual shell</div>
          <div className="hero-system-tag top-right">motion reactor online</div>
          <div className="hero-system-tag bottom-left">touch field enabled</div>
          <div className="hero-system-tag bottom-right">launch path armed</div>
        </motion.div>
      </div>
    </section>
  );
}
