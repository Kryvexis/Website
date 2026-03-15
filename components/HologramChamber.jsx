"use client";

import { motion } from "framer-motion";

const strips = ["immersive reveal", "conversion gravity", "interactive depth", "signal cascade", "soft distortion"];

export default function HologramChamber() {
  return (
    <section className="section-shell chamber-shell" id="chamber">
      <div className="section-intro">
        <span className="eyebrow">hologram room</span>
        <h2>A dedicated chamber where the site feels like it is rendering itself in real time.</h2>
        <p>
          This section adds a premium midpoint: animated panes, scanning bands,
          rotating diagnostics, and structured asymmetry so the world never feels flat.
        </p>
      </div>

      <div className="chamber-grid">
        <motion.div
          className="chamber-core"
          animate={{ rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        >
          <div className="chamber-core-inner" />
          <div className="chamber-scan" />
        </motion.div>

        <div className="chamber-aside">
          {strips.map((item, i) => (
            <motion.div
              key={item}
              className="chamber-strip"
              initial={{ opacity: 0.35, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
