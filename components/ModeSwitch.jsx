"use client";

import { motion } from "framer-motion";

const modes = {
  flux: { title: "Commercial showcase mode", accent: "Sales / control / visibility", text: "Use this mood for demos, partner conversations, and high-impact commercial storytelling." },
  pulse: { title: "Operational workspace mode", accent: "Depth / discipline / execution", text: "Use this mood to emphasize live KPIs, recommended actions, recent activity, and exception handling inside each main module." },
  ember: { title: "Trust and rollout mode", accent: "Hardening / readiness / finish", text: "Use this mood when presenting the roadmap around authentication, authorization, tenant isolation, automation resilience, and premium finish work." }
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
        <span className="eyebrow">presentation lens</span>
        <h3>{modes[active].title}</h3>
        <strong>{modes[active].accent}</strong>
        <p>{modes[active].text}</p>
      </div>
    </div>
  );
}
