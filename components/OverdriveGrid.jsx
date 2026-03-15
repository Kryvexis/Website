"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const items = [
  {
    title: "Fake camera language",
    text: "The visuals now move more like edited film moments than typical website sections."
  },
  {
    title: "Poster-frame layering",
    text: "Large composition panels create the feeling of frozen video frames or teaser stills."
  },
  {
    title: "Touch and pointer pressure",
    text: "Phones still get the same system energy because panels, buttons, and atmosphere react under the finger."
  },
  {
    title: "Branded machine identity",
    text: "The Kryvexis mark is integrated as a projected system signal, not just placed as a logo."
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
      className="overdrive-card"
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
      <div className={`overdrive-glow glow-${(index % 4) + 1}`} />
      <div className="overdrive-inner">
        <span className="eyebrow">video module 0{index + 1}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </motion.article>
  );
}

export default function OverdriveGrid() {
  return (
    <section className="section-shell">
      <div className="section-intro">
        <span className="eyebrow">projection modules</span>
        <h2>Built to feel watched, not browsed.</h2>
        <p>
          V9 leans into the illusion that the browser is projecting a trailer instead of rendering a landing page.
        </p>
      </div>

      <div className="overdrive-grid">
        {items.map((item, index) => (
          <Card key={item.title} {...item} index={index} />
        ))}
      </div>
    </section>
  );
}
