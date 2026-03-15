"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const modules = [
  {
    title: "System-grade interaction",
    text: "Desktop hover, mobile touch, and continuous background motion all obey the same visual rules."
  },
  {
    title: "Directed spectacle",
    text: "The user does not move through sections. They move through a deliberate sequence of moods and states."
  },
  {
    title: "Kryvexis-branded atmosphere",
    text: "The logo is not decoration. It acts like a machine core that the world is built around."
  },
  {
    title: "Over-the-top but cohesive",
    text: "The point is not chaos. It is controlled excess, where every layer belongs to the same machine."
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
        <span className="eyebrow">world rules</span>
        <h2>This should feel impossible because it feels unified.</h2>
        <p>
          The strongest version is not the loudest single effect. It is the moment everything feels like it belongs to the same world.
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
