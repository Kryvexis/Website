"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clapperboard, MoveRight, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function SystemHero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <div className="pill-row">
          <span className="interface-pill"><Clapperboard size={14} /> fake video atmosphere</span>
          <span className="interface-pill"><Sparkles size={14} /> fullscreen cinematic cuts</span>
        </div>

        <h1>
          A <span>system film</span>
          <br />
          wearing website code.
        </h1>

        <p>
          V9 turns the portal into a fake video experience: giant poster frames, simulated camera wipes,
          cinematic scene cuts, moving projection layers, and branded motion pressure everywhere.
        </p>

        <div className="hero-actions">
          <MagneticButton href="#cinema">Play the fake film</MagneticButton>
          <MagneticButton href="#launch" secondary>
            Enter launch chamber <MoveRight size={16} />
          </MagneticButton>
        </div>

        <div className="hero-metrics">
          <div><strong>FILM</strong><span>scene progression system</span></div>
          <div><strong>CUTS</strong><span>fake camera wipe transitions</span></div>
          <div><strong>V9</strong><span>projection-engine mode</span></div>
        </div>
      </div>

      <div className="hero-stage">
        <motion.div
          className="projector-reactor"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="hero-reel reel-a" />
          <div className="hero-reel reel-b" />
          <div className="hero-frame frame-a" />
          <div className="hero-frame frame-b" />
          <div className="hero-frame frame-c" />

          <motion.div
            className="hero-wipe wipe-a"
            animate={{ x: ["-20%", "120%"] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="hero-wipe wipe-b"
            animate={{ x: ["120%", "-20%"] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "linear" }}
          />

          <div className="logo-shell">
            <div className="logo-shell-glow" />
            <div className="logo-screen-noise" />
            <Image
              src="/kryvexis-logo.png"
              alt="Kryvexis"
              width={760}
              height={340}
              className="hero-logo"
              priority
            />
          </div>

          <div className="hero-chip chip-a">projection deck</div>
          <div className="hero-chip chip-b">scene renderer</div>
          <div className="hero-chip chip-c">touch horizon</div>
          <div className="hero-chip chip-d">fake film mode</div>
        </motion.div>
      </div>
    </section>
  );
}
