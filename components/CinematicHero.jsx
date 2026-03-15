"use client";

import { motion } from "framer-motion";
import { Clapperboard, MoveRight, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function CinematicHero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <div className="pill-row">
          <span className="interface-pill"><Clapperboard size={14} /> website like a trailer</span>
          <span className="interface-pill"><Sparkles size={14} /> background scenes everywhere</span>
        </div>

        <h1>
          A <span>scroll film</span>
          <br />
          disguised as a website.
        </h1>

        <p>
          V6 pushes toward a more cinematic experience: layered animated backgrounds, sticky scene chapters,
          visual compositions that form as you scroll, and motion that feels closer to watching a sequence unfold.
        </p>

        <div className="hero-actions">
          <MagneticButton href="#story">Watch the sequence</MagneticButton>
          <MagneticButton href="#launch" secondary>
            Open launch mode <MoveRight size={16} />
          </MagneticButton>
        </div>

        <div className="hero-metrics">
          <div><strong>Film</strong><span>scene-based motion design</span></div>
          <div><strong>Sticky</strong><span>scroll chapters</span></div>
          <div><strong>V6</strong><span>visual progression system</span></div>
        </div>
      </div>

      <div className="hero-stage">
        <div className="cinema-frame frame-one" />
        <div className="cinema-frame frame-two" />
        <div className="cinema-frame frame-three" />
        <motion.div
          className="hero-ribbon hero-ribbon-a"
          animate={{ scaleX: [0.94, 1.08, 0.94], opacity: [0.3, 0.82, 0.3] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-ribbon hero-ribbon-b"
          animate={{ scaleY: [0.92, 1.1, 0.92], opacity: [0.2, 0.74, 0.2] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="hero-surface">
          <div className="surface-grid" />
          <div className="surface-blur" />
        </div>
      </div>
    </section>
  );
}
