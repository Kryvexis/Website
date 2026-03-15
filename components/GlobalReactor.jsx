"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function GlobalReactor() {
  const x = useMotionValue(50);
  const y = useMotionValue(35);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (clientX, clientY) => {
      x.set((clientX / window.innerWidth) * 100);
      y.set((clientY / window.innerHeight) * 100);
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

  const bg = useMotionTemplate`
    radial-gradient(580px circle at ${sx}% ${sy}%,
      rgba(56,189,248,0.22),
      rgba(168,85,247,0.12) 24%,
      rgba(6,10,20,0) 60%)
  `;

  return <motion.div className="cursor-aura" style={{ background: bg }} />;
}
