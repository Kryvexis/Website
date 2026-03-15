"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const particles = Array.from({ length: 88 }).map((_, i) => ({
  id: i,
  left: `${(i * 4.7) % 100}%`,
  top: `${(i * 9.3) % 100}%`,
  size: 2 + (i % 7),
  duration: 4.6 + (i % 10),
  delay: (i % 8) * 0.15,
}));

export default function WorldFX() {
  const x = useMotionValue(50);
  const y = useMotionValue(35);
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
    radial-gradient(760px circle at ${sx}% ${sy}%,
      rgba(56,189,248,0.22),
      rgba(168,85,247,0.14) 20%,
      rgba(245,158,11,0.08) 34%,
      rgba(6,10,20,0) 60%)
  `;

  return (
    <>
      <motion.div className="cursor-aura" style={{ background: aura }} />
      <div className="particle-field" aria-hidden="true">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="particle-dot"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{
              y: [0, -48 - (p.id % 34), 0],
              x: [0, p.id % 2 === 0 ? 20 : -20, 0],
              opacity: [0.05, 0.95, 0.05],
              scale: [1, 1.8, 1],
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
    </>
  );
}
