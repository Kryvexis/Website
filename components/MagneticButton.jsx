"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  secondary = false,
  href = "#launch",
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.18, y: y * 0.25 });
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      className={`magnetic-button ${secondary ? "secondary" : ""}`}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 160, damping: 12, mass: 0.2 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      whileTap={{ scale: 0.98 }}
    >
      <span className="magnetic-shine" />
      <span className="magnetic-ripple" />
      <span className="magnetic-label">{children}</span>
    </motion.a>
  );
}
