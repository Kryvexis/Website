"use client";

import { motion } from "framer-motion";

const modes = {
  flux: {
    title: "Flux mode",
    accent: "Cyan / Violet / White",
    text: "Maximum atmospheric energy. Stronger aura bloom, vivid lines, louder sci-fi mood."
  },
  pulse: {
    title: "Pulse mode",
    accent: "Blue / Steel / Ice",
    text: "Cleaner premium enterprise feel. Tighter contrast and sharper module edges."
  },
  solar: {
    title: "Solar mode",
    accent: "Gold / Ember / Rose",
    text: "Launch-event mode. High drama, luxury tone, warmer reveal energy."
  }
};

export default function ModeConsole({ active, setActive }) {
  return (
    <div className="mode-console">
      <div className="mode-tabs">
        {Object.entries(modes).map(([key, mode]) => (
          <button key={key} onClick={() => setActive(key)} className={active === key ? "active" : ""}>
            {active === key && <motion.span layoutId="modeBg" className="mode-bg" />}
            <span>{mode.title}</span>
          </button>
        ))}
      </div>
      <div className="mode-info">
        <span className="eyebrow">live environment</span>
        <h3>{modes[active].title}</h3>
        <strong>{modes[active].accent}</strong>
        <p>{modes[active].text}</p>
      </div>
    </div>
  );
}
