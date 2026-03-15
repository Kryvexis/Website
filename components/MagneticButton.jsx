"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function MagneticButton({ children, href = "#launch", secondary = false }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const update = (clientX, clientY) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.16, y: y * 0.22 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`magnetic-button ${secondary ? "secondary" : ""}`}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 170, damping: 14 }}
      onMouseMove={(e) => update(e.clientX, e.clientY)}
      onTouchMove={(e) => {
        const t = e.touches?.[0];
        if (t) update(t.clientX, t.clientY);
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      onTouchEnd={() => setOffset({ x: 0, y: 0 })}
      whileTap={{ scale: 0.97 }}
    >
      <span className="magnetic-shine" />
      <span className="magnetic-ripple" />
      <span className="magnetic-label">{children}</span>
    </motion.a>
  );
}
