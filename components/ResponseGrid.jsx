"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const modules = [
  {
    title: "Commercial core",
    text: "Customer records, quote workflows, invoice workflows, payments, branded documents, and a first POS / sales desk direction create a connected selling-to-cash pipeline."
  },
  {
    title: "Inventory and procurement",
    text: "Stock overview, movement intelligence, low-stock visibility, transfer suggestions, suppliers, reorders, purchase orders, goods received, supplier bills, and procurement decision support turn inventory into an operating core."
  },
  {
    title: "Finance and accounting",
    text: "Debtors, statements, cash up, expenses, creditors, ledger, reconciliation, VAT control, supplier bills, finance exceptions, and period close position finance as an operational cockpit rather than passive records."
  },
  {
    title: "Reports, decisions, and governance",
    text: "Daily close status, email status, branch performance, seller leaderboard, action recommendations, workspace administration, branch management, invites, branding, and role policies support manager and executive oversight."
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
        <span className="eyebrow">capability block 0{index + 1}</span>
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
        <span className="eyebrow">system at a glance</span>
        <h2>Built to unify commercial execution, operations, finance, decision-making, and governance.</h2>
        <p>
          Kryvexis OS is positioned as a unified operating environment rather than a narrow single-module ERP.
          Its breadth is already a strategic asset because it gives the platform a recognizable identity and a serious platform story.
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
