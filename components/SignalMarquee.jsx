"use client";

import { motion } from "framer-motion";

const items = [
  "portal breach",
  "kinetic layers",
  "hologram chamber",
  "magnetic CTA",
  "cursor atmosphere",
  "signal ribbons",
  "scroll choreography",
  "launch-grade visuals"
];

export default function SignalMarquee() {
  const loop = [...items, ...items];
  return (
    <section className="signal-band">
      <motion.div
        className="signal-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </motion.div>
    </section>
  );
}
