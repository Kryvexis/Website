"use client";

import { motion } from "framer-motion";

const items = [
  "cursor light engine",
  "particle network",
  "scanline sweeps",
  "orbital parallax",
  "holographic cards",
  "magnetic CTAs",
  "live mode switching",
  "reveal-room launch section",
];

export default function SignalMarquee() {
  return (
    <div className="marquee-shell">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={item + i}>{item}</span>
        ))}
      </motion.div>
    </div>
  );
}
