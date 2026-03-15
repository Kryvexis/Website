"use client";

import { motion } from "framer-motion";

const modes = {
  flux: { title: "Flux mode", accent: "Cyan / Violet", text: "Maximum glow, heavier aura, and event-level spectacle." },
  pulse: { title: "Pulse mode", accent: "Blue / Silver", text: "Sharper product mood with tighter contrast and cleaner signal behavior." },
  ember: { title: "Ember mode", accent: "Amber / Rose", text: "Warm reveal mode for dramatic hero and launch scenes." }
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
