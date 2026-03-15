"use client";

import { motion } from "framer-motion";

const points = Array.from({ length: 72 }).map((_, i) => ({
  id: i,
  left: `${(i * 5) % 100}%`,
  top: `${(i * 11) % 100}%`,
  size: 2 + (i % 7),
  duration: 5 + (i % 11),
  delay: (i % 9) * 0.16,
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
            y: [0, -46 - (p.id % 30), 0],
            x: [0, p.id % 2 === 0 ? 20 : -20, 0],
            opacity: [0.06, 0.95, 0.06],
            scale: [1, 1.75, 1],
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
