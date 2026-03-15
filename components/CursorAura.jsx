"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function CursorAura() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(30);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const background = useMotionTemplate`
    radial-gradient(
      420px circle at ${smoothX}% ${smoothY}%,
      rgba(96, 165, 250, 0.22),
      rgba(168, 85, 247, 0.12) 24%,
      rgba(6, 10, 20, 0) 58%
    )
  `;

  return (
    <motion.div
      className="cursor-aura"
      style={{ background }}
      onMouseMove={(event) => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        mouseX.set((event.clientX / w) * 100);
        mouseY.set((event.clientY / h) * 100);
      }}
    />
  );
}
