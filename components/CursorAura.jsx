"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorAura() {
  const x = useMotionValue(50);
  const y = useMotionValue(30);
  const sx = useSpring(x, { stiffness: 140, damping: 20 });
  const sy = useSpring(y, { stiffness: 140, damping: 20 });

  useEffect(() => {
    const handleMove = (event) => {
      x.set((event.clientX / window.innerWidth) * 100);
      y.set((event.clientY / window.innerHeight) * 100);
    };

    const handleTouch = (event) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      x.set((touch.clientX / window.innerWidth) * 100);
      y.set((touch.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, [x, y]);

  const bg = useMotionTemplate`
    radial-gradient(480px circle at ${sx}% ${sy}%,
      rgba(96,165,250,0.20),
      rgba(168,85,247,0.12) 24%,
      rgba(6,10,20,0) 60%)
  `;

  return <motion.div className="cursor-aura" style={{ background: bg }} />;
}
