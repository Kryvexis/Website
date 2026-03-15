"use client";

import { motion } from "framer-motion";

const points = Array.from({ length: 58 }).map((_, i) => ({
  id: i,
  left: `${(i * 7) % 100}%`,
  top: `${(i * 13) % 100}%`,
  size: 2 + (i % 6),
  duration: 6 + (i % 10),
  delay: (i % 9) * 0.22,
}));

export default function ParticleStorm() {
  return (
    <div className="particle-field" aria-hidden="true">
      {points.map((p) => (
        <motion.span
          key={p.id}
          className="particle-dot"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{
            y: [0, -40 - (p.id % 28), 0],
            x: [0, p.id % 2 === 0 ? 18 : -18, 0],
            opacity: [0.08, 0.96, 0.08],
            scale: [1, 1.65, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
