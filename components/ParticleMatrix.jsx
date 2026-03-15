"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  left: `${(i * 9) % 100}%`,
  top: `${(i * 17) % 100}%`,
  size: 2 + (i % 6),
  duration: 7 + (i % 9),
  delay: (i % 7) * 0.3,
}));

export default function ParticleMatrix() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="particle-dot"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{
            y: [0, -30 - (p.id % 14), 0],
            x: [0, p.id % 2 === 0 ? 14 : -14, 0],
            opacity: [0.15, 0.9, 0.15],
            scale: [1, 1.5, 1],
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
