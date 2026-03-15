"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, href = "#launch", secondary = false }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.16, y: y * 0.22 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`magnetic-button ${secondary ? "secondary" : ""}`}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 170, damping: 13 }}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      whileTap={{ scale: 0.98 }}
    >
      <span className="magnetic-shine" />
      <span className="magnetic-ripple" />
      <span className="magnetic-ripple ripple-two" />
      <span className="magnetic-label">{children}</span>
    </motion.a>
  );
}
