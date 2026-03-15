"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function SystemReactor() {
  const x = useMotionValue(50);
  const y = useMotionValue(36);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const move = (cx, cy) => {
      x.set((cx / window.innerWidth) * 100);
      y.set((cy / window.innerHeight) * 100);
    };

    const onMouse = (e) => move(e.clientX, e.clientY);
    const onTouch = (e) => {
      const t = e.touches?.[0];
      if (t) move(t.clientX, t.clientY);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [x, y]);

  const aura = useMotionTemplate`
    radial-gradient(680px circle at ${sx}% ${sy}%,
      rgba(56,189,248,0.24),
      rgba(168,85,247,0.14) 20%,
      rgba(245,158,11,0.08) 34%,
      rgba(6,10,20,0) 60%)
  `;

  return <motion.div className="cursor-aura" style={{ background: aura }} />;
}
