"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function MagneticButton({ children, href = "#launch", secondary = false }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.16, y: y * 0.22 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`magnetic-button ${secondary ? "secondary" : ""}`}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 14 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      whileTap={{ scale: 0.98 }}
    >
      <span className="magnetic-shine" />
      <span className="magnetic-ripple" />
      <span className="magnetic-label">{children}</span>
    </motion.a>
  );
}
