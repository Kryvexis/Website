"use client";

import { motion } from "framer-motion";

const modes = {
  flux: { title: "Flux mode", accent: "Cyan / Violet", text: "Maximum neon pressure and event-level visual aggression." },
  pulse: { title: "Pulse mode", accent: "Blue / Silver", text: "Sharper product tension with more restrained system contrast." },
  ember: { title: "Ember mode", accent: "Amber / Rose", text: "Warmer cinematic climax mode for dramatic reveal scenes." }
};

export default function ModeSwitch({ active, setActive }) {
  return (
    <div className="variant-shell">
      <div className="variant-tabs">
        {Object.entries(modes).map(([key, item]) => (
          <button key={key} className={active === key ? "active" : ""} onClick={() => setActive(key)}>
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
