"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

const orbitPanels = [
  { title: "Scene morphing", meta: "hero state logic", x: "-38%", y: "12%" },
  { title: "Reactive modules", meta: "hover split layers", x: "73%", y: "18%" },
  { title: "Signal wipes", meta: "scroll reveal system", x: "66%", y: "78%" },
  { title: "Config engine", meta: "theme / mode switch", x: "-18%", y: "76%" },
];

export default function OrbitalHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 110, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 110, damping: 18 });

  const aura = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(125, 211, 252, 0.24), rgba(8, 12, 22, 0) 32%)`;

  useEffect(() => {
    mouseX.set(50);
    mouseY.set(30);
  }, [mouseX, mouseY]);

  return (
    <section
      className="hero-section"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
        mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
    >
      <motion.div className="hero-aura" style={{ background: aura }} />

      <div className="hero-copy">
        <div className="pill-row">
          <span className="interface-pill">
            <Sparkles size={14} /> impossible-grade interface
          </span>
          <span className="interface-pill">
            <Zap size={14} /> built for GitHub + Vercel
          </span>
        </div>

        <h1>
          Enter the <span>living OS portal</span>
          <br />
          where motion becomes the product.
        </h1>

        <p>
          A cinematic interface built to feel like a launch event, not a landing
          page - layered depth, reactive energy, scene changes, and premium
          control surfaces tuned for Kryvexis.
        </p>

        <div className="hero-actions">
          <MagneticButton href="#launch">Launch the portal</MagneticButton>
          <MagneticButton href="#modules" secondary>
            Inspect the system <ArrowRight size={16} />
          </MagneticButton>
        </div>

        <div className="hero-metrics">
          <div>
            <strong>03</strong>
            <span>signature set-pieces</span>
          </div>
          <div>
            <strong>60fps</strong>
            <span>motion-first target</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>future-facing aesthetic</span>
          </div>
        </div>
      </div>

      <div className="hero-stage">
        <motion.div
          className="core-shell"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        >
          <div className="core-ring ring-one" />
          <div className="core-ring ring-two" />

          <motion.div
            className="core-sphere"
            animate={{
              scale: [1, 1.06, 1],
              boxShadow: [
                "0 0 40px rgba(56,189,248,.4)",
                "0 0 90px rgba(167,139,250,.55)",
                "0 0 40px rgba(56,189,248,.4)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
          >
            <div className="sphere-grid" />
          </motion.div>

          {orbitPanels.map((panel, index) => (
            <motion.div
              key={panel.title}
              className="orbit-panel"
              style={{ left: panel.x, top: panel.y }}
              animate={{ y: [0, index % 2 === 0 ? -14 : 14, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
