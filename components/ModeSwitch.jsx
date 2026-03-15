"use client";

import { motion } from "framer-motion";

const modes = {
  flux: {
    title: "Flux mode",
    accent: "Cyan / Violet",
    text: "High-aura mode with deeper glows, dramatic highlights, and more event energy."
  },
  pulse: {
    title: "Pulse mode",
    accent: "Blue / Silver",
    text: "Sharper enterprise tone with cleaner contrast and more controlled signal behavior."
  },
  ember: {
    title: "Ember mode",
    accent: "Amber / Rose",
    text: "Launch-event mode with warmer premium accents for intense reveal scenes."
  }
};

export default function ModeSwitch({ active, setActive }) {
  return (
    <div className="variant-shell">
      <div className="variant-tabs">
        {Object.entries(modes).map(([key, item]) => (
          <button key={key} onClick={() => setActive(key)} className={active === key ? "active" : ""}>
            {active === key && <motion.span layoutId="mode-pill" className="active-pill-bg" />}
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      <div className="variant-panel">
        <span className="eyebrow">active world state</span>
        <h3>{modes[active].title}</h3>
        <strong>{modes[active].accent}</strong>
        <p>{modes[active].text}</p>
      </div>
    </div>
  );
}
