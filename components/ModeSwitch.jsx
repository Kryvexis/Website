"use client";

import { motion } from "framer-motion";

const modes = {
  flux: { title: "Flux mode", accent: "Cyan / Violet", text: "Maximum projection pressure with the loudest fake-film atmosphere." },
  pulse: { title: "Pulse mode", accent: "Blue / Silver", text: "Cleaner product-tension mood with colder camera language." },
  ember: { title: "Ember mode", accent: "Amber / Rose", text: "Warmer reveal mode for a cinematic end-card feeling." }
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
