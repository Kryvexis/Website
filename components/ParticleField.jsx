"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 28 }).map((_, i) => ({
  id: i,
  left: `${(i * 13) % 100}%`,
  top: `${(i * 29) % 100}%`,
  size: 2 + (i % 5),
  duration: 8 + (i % 7),
  delay: (i % 6) * 0.35,
}));

export default function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="particle-dot"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{
            y: [0, -26 - (p.id % 18), 0],
            x: [0, (p.id % 2 === 0 ? 10 : -10), 0],
            opacity: [0.18, 0.9, 0.18],
            scale: [1, 1.45, 1],
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
