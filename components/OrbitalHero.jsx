"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

const shards = [
  { left: "9%", top: "14%", w: 140, h: 54, delay: 0.2 },
  { left: "78%", top: "18%", w: 162, h: 58, delay: 0.5 },
  { left: "69%", top: "77%", w: 154, h: 60, delay: 0.8 },
  { left: "15%", top: "80%", w: 148, h: 56, delay: 1.1 },
];

export default function OrbitalHero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <div className="pill-row">
          <span className="interface-pill"><Sparkles size={14} /> cinematic interface world</span>
          <span className="interface-pill"><Zap size={14} /> deploy-ready on Vercel</span>
        </div>

        <h1>
          Step into the <span>portal breach</span>
          <br />
          and let the website move like software.
        </h1>

        <p>
          V4 pushes the experience further into a living interface: stronger scene transitions,
          a holographic chamber, kinetic cards, signal ribbons, and layered motion everywhere.
        </p>

        <div className="hero-actions">
          <MagneticButton href="#launch">Enter launch mode</MagneticButton>
          <MagneticButton href="#chamber" secondary>
            View the chamber <ArrowRight size={16} />
          </MagneticButton>
        </div>

        <div className="hero-metrics">
          <div><strong>04</strong><span>major set-pieces</span></div>
          <div><strong>LIVE</strong><span>mode-reactive atmosphere</span></div>
          <div><strong>V4</strong><span>motion world system</span></div>
        </div>
      </div>

      <div className="hero-stage">
        <motion.div
          className="core-shell"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <div className="core-ring ring-one" />
          <div className="core-ring ring-two" />
          <div className="core-ring ring-three" />

          <motion.div
            className="core-sphere"
            animate={{
              scale: [1, 1.06, 1],
              boxShadow: [
                "0 0 40px rgba(96,165,250,.4)",
                "0 0 110px rgba(168,85,247,.55)",
                "0 0 40px rgba(96,165,250,.4)"
              ]
            }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="sphere-grid" />
            <div className="sphere-beam" />
          </motion.div>

          {shards.map((shard, i) => (
            <motion.div
              key={i}
              className="orbit-panel"
              style={{ left: shard.left, top: shard.top, width: shard.w, height: shard.h }}
              animate={{ y: [0, i % 2 === 0 ? -14 : 14, 0], rotate: [0, i % 2 === 0 ? -2 : 2, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: shard.delay }}
            >
              <span>signal shard 0{i + 1}</span>
              <strong>Active atmosphere</strong>
            </motion.div>
          ))}

          <motion.div
            className="orbit-line orbit-line-a"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          />
          <motion.div
            className="orbit-line orbit-line-b"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
