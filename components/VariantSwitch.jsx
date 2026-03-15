"use client";

import { motion } from "framer-motion";

const variants = {
  flux: {
    name: "Flux mode",
    accent: "Cyan / Violet",
    desc: "Maximum atmospheric glow, faster pulses, stronger aura response.",
  },
  pulse: {
    name: "Pulse mode",
    accent: "Blue / Silver",
    desc: "Sharper enterprise mood with clean contrast and tighter highlight logic.",
  },
  solar: {
    name: "Solar mode",
    accent: "Gold / Ember",
    desc: "Rare event mode for launch moments, premium reveals, and big CTA scenes.",
  },
};

export default function VariantSwitch({ active, setActive }) {
  return (
    <div className="variant-shell">
      <div className="variant-tabs">
        {Object.entries(variants).map(([key, item]) => (
          <button
            key={key}
            className={active === key ? "active" : ""}
            onClick={() => setActive(key)}
          >
            {active === key && (
              <motion.span layoutId="activeVariant" className="active-pill-bg" />
            )}
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      <div className="variant-panel">
        <span className="eyebrow">active environment</span>
        <h3>{variants[active].name}</h3>
        <strong>{variants[active].accent}</strong>
        <p>{variants[active].desc}</p>
      </div>
    </div>
  );
}
