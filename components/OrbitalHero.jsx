"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Orbit, Sparkles, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

const panels = [
  { title: "Cursor voltage", meta: "reactive lighting", x: "6%", y: "16%" },
  { title: "Orbit matrix", meta: "parallax fragments", x: "74%", y: "11%" },
  { title: "Story rooms", meta: "scroll-state transitions", x: "72%", y: "75%" },
  { title: "Signal core", meta: "live pulse engine", x: "4%", y: "73%" },
];

export default function OrbitalHero() {
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const sx = useSpring(mx, { stiffness: 110, damping: 18 });
  const sy = useSpring(my, { stiffness: 110, damping: 18 });
  const glow = useMotionTemplate`radial-gradient(circle at ${sx}% ${sy}%, rgba(167,139,250,0.24), rgba(8,12,22,0) 36%)`;

  return (
    <section
      className="hero-section"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - rect.left) / rect.width) * 100);
        my.set(((e.clientY - rect.top) / rect.height) * 100);
      }}
    >
      <motion.div className="hero-aura" style={{ background: glow }} />
      <div className="hero-copy">
        <div className="pill-row">
          <span className="interface-pill"><Sparkles size={14} /> cinematic interaction engine</span>
          <span className="interface-pill"><Zap size={14} /> deploy-ready for GitHub + Vercel</span>
          <span className="interface-pill"><Orbit size={14} /> multi-layer portal depth</span>
        </div>
        <h1>
          Break the landing page.
          <span> Build the portal.</span>
        </h1>
        <p>
          V3 pushes harder: ambient particles, cursor voltage, holographic modules, scan sweeps,
          layered orbital motion, animated data rails, and a launch section that behaves like a reveal room.
        </p>
        <div className="hero-actions">
          <MagneticButton href="#launch">Enter launch chamber</MagneticButton>
          <MagneticButton href="#systems" secondary>Inspect systems <ArrowRight size={16} /></MagneticButton>
        </div>
        <div className="hero-metrics">
          <div><strong>5</strong><span>interactive subsystems</span></div>
          <div><strong>V3</strong><span>motion-first portal build</span></div>
          <div><strong>∞</strong><span>brandable future energy</span></div>
        </div>
      </div>

      <div className="hero-stage">
        <motion.div
          className="core-shell"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          <div className="core-ring ring-one" />
          <div className="core-ring ring-two" />
          <div className="core-ring ring-three" />

          <motion.div
            className="core-sphere"
            animate={{ scale: [1, 1.06, 1], rotate: [0, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="sphere-grid" />
            <div className="sphere-heart" />
          </motion.div>

          {[0,1,2,3,4,5].map((i) => (
            <motion.span
              key={i}
              className={`orbit-shard shard-${i + 1}`}
              animate={{ y: [0, i % 2 ? -16 : 16, 0], rotate: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 4 + i * 0.6, ease: "easeInOut" }}
            />
          ))}

          {panels.map((panel, i) => (
            <motion.div
              key={panel.title}
              className="orbit-panel"
              style={{ left: panel.x, top: panel.y }}
              animate={{ y: [0, i % 2 ? 10 : -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 + i, ease: "easeInOut" }}
            >
              <span>{panel.meta}</span>
              <strong>{panel.title}</strong>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
