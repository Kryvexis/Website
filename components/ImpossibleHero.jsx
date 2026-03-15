"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight, Sparkles, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

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
          V10 stops stacking random effects and turns the entire browser into one directed experience:
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

          <div className="hero-core">
            <div className="hero-core-glow" />
            <div className="hero-core-noise" />
            <Image
              src="/kryvexis-logo.png"
              alt="Kryvexis"
              width={780}
              height={360}
              className="hero-logo"
              priority
            />
          </div>

          <div className="hero-chip chip-a">world shell</div>
          <div className="hero-chip chip-b">signal grammar</div>
          <div className="hero-chip chip-c">touch field</div>
          <div className="hero-chip chip-d">launch route</div>
        </motion.div>
      </div>
    </section>
  );
}
