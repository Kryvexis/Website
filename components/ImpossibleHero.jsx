"use client";

import { motion } from "framer-motion";
import { MoveRight, Sparkles, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function ImpossibleHero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <div className="pill-row">
          <span className="interface-pill"><Sparkles size={14} /> apple-grade polish</span>
          <span className="interface-pill"><Zap size={14} /> tesla-style product theater</span>
        </div>

        <h1>
          A <span>launch experience</span>
          <br />
          that feels beyond normal web design.
        </h1>

        <p>
          Kryvexis should feel less like a standard homepage and more like an event - a living product reveal
          with bold cinematic typography, disciplined negative space, dynamic light, tactile depth, and motion
          that implies intelligence and precision rather than decoration.
        </p>

        <div className="hero-actions">
          <MagneticButton href="#chapters">Enter the reveal</MagneticButton>
          <MagneticButton href="/testimonials" secondary>
            View proof <MoveRight size={16} />
          </MagneticButton>
        </div>

        <div className="hero-metrics">
          <div><strong>Luxury</strong><span>clean hierarchy, restraint, flawless typography</span></div>
          <div><strong>Power</strong><span>speed, sharp transitions, product confidence</span></div>
          <div><strong>Wonder</strong><span>reactive surfaces, ambient energy, memorable moments</span></div>
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

          <div className="hero-core reactor-core">
            <div className="hero-core-glow" />
            <div className="hero-core-noise" />
            <div className="reactor-center" />
            <div className="reactor-orbit orbit-one" />
            <div className="reactor-orbit orbit-two" />
            <div className="reactor-beam beam-one" />
            <div className="reactor-beam beam-two" />
            <div className="reactor-node node-a" />
            <div className="reactor-node node-b" />
            <div className="reactor-node node-c" />
            <div className="reactor-label">Kryvexis signal core</div>
          </div>

          <div className="hero-chip chip-a">arrival</div>
          <div className="hero-chip chip-b">system reveal</div>
          <div className="hero-chip chip-c">signature moments</div>
          <div className="hero-chip chip-d">offer focus</div>
        </motion.div>
      </div>
    </section>
  );
}
