"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const modules = [
  {
    title: "Build the design as a system",
    text: "Navigation, buttons, chips, data cards, overlays, and CTAs should all speak the same visual language."
  },
  {
    title: "Create a motion grammar",
    text: "Define which elements drift, which pulse, which wipe, and which interactions are reserved for major moments only."
  },
  {
    title: "Develop flagship set-pieces",
    text: "One great animation is not enough. The experience needs at least three memorable visual moments users can describe afterwards."
  },
  {
    title: "Keep the writing sparse and premium",
    text: "Remove filler copy. The hierarchy should stay ruthless so the spectacle amplifies the message instead of burying it."
  }
];

function Card({ title, text, index }) {
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
      className="response-card"
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
      <div className={`response-glow glow-${(index % 4) + 1}`} />
      <div className="response-inner">
        <span className="eyebrow">world rule 0{index + 1}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </motion.article>
  );
}

export default function ResponseGrid() {
  return (
    <section className="section-shell">
      <div className="section-intro">
        <span className="eyebrow">production gap list</span>
        <h2>What still needs to be true for the experience to feel exceptional.</h2>
        <p>
          The strongest version needs more than effects. It needs a custom brand story, disciplined copywriting,
          premium abstraction or real product assets, and a performance architecture that keeps everything smooth.
        </p>
      </div>

      <div className="response-grid">
        {modules.map((module, index) => (
          <Card key={module.title} {...module} index={index} />
        ))}
      </div>
    </section>
  );
}
