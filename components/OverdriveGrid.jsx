"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const items = [
  {
    title: "Touch-reactive surfaces",
    text: "On mobile, panels still push, float, and glow under the finger so the system never feels disabled."
  },
  {
    title: "Overloaded atmosphere",
    text: "HUD slices, particle storm, scan bands, beam sweeps, pressure glows, and takeover scenes keep the machine busy."
  },
  {
    title: "Branded reactor identity",
    text: "The Kryvexis logo now sits inside a whole visual shell, not just as a badge dropped onto a page."
  },
  {
    title: "Cinematic conversion",
    text: "The final action zone lands like the end card of a launch trailer instead of a standard CTA block."
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
        <span className="eyebrow">overdrive module 0{index + 1}</span>
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
        <span className="eyebrow">overdrive stack</span>
        <h2>Everything should feel too alive.</h2>
        <p>
          This is deliberate excess: more scan passes, more atmosphere, more pressure, more moving layers, more visual force.
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
