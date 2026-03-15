"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const modules = [
  {
    title: "Touch-reactive panels",
    text: "Mobile users should still feel the system respond. Panels move and glow on touch, not just on hover."
  },
  {
    title: "Overloaded background motion",
    text: "Particles, scan lines, glow rails, masks, beams, and sticky cinematic layers keep the world active."
  },
  {
    title: "Logo-driven identity",
    text: "The Kryvexis mark now anchors the environment so the site feels branded instead of generic."
  }
];

function ModuleCard({ title, text, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18 });
  const sy = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(sy, [-40, 40], [10, -10]);
  const rotateY = useTransform(sx, [-40, 40], [-12, 12]);

  const update = (clientX, clientY, rect) => {
    x.set(clientX - rect.left - rect.width / 2);
    y.set(clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.article
      className="module-card"
      style={{ rotateX, rotateY }}
      whileHover={{ y: -10, scale: 1.01 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        update(e.clientX, e.clientY, rect);
      }}
      onTouchMove={(e) => {
        const t = e.touches?.[0];
        if (!t) return;
        const rect = e.currentTarget.getBoundingClientRect();
        update(t.clientX, t.clientY, rect);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onTouchEnd={() => { x.set(0); y.set(0); }}
    >
      <div className={`module-card-glow glow-${index + 1}`} />
      <div className="module-card-inner">
        <span className="eyebrow">system module 0{index + 1}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </motion.article>
  );
}

export default function TouchModules() {
  return (
    <section className="section-shell">
      <div className="section-intro">
        <span className="eyebrow">motion modules</span>
        <h2>Everything should keep moving, glowing, and reacting.</h2>
        <p>
          The goal is excess with control: enough motion to feel impossible, but structured enough to remain premium.
        </p>
      </div>

      <div className="module-grid">
        {modules.map((module, index) => (
          <ModuleCard key={module.title} {...module} index={index} />
        ))}
      </div>
    </section>
  );
}
