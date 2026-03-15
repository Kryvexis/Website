"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function CursorLight() {
  const x = useMotionValue(50);
  const y = useMotionValue(35);
  const sx = useSpring(x, { stiffness: 120, damping: 25, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 120, damping: 25, mass: 0.3 });

  const bg = useMotionTemplate`radial-gradient(540px circle at ${sx}% ${sy}%, rgba(99,212,255,0.16), rgba(8,12,22,0) 40%)`;

  return (
    <motion.div
      className="cursor-light"
      style={{ background: bg }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - rect.left) / rect.width) * 100);
        y.set(((e.clientY - rect.top) / rect.height) * 100);
      }}
    />
  );
}
