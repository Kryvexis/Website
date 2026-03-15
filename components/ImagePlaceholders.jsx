"use client";

import { motion } from "framer-motion";

const placeholders = [
  {
    title: "Authentication and access",
    tag: "future screenshot 01",
    text: "Replace this block with the secure access / system ignition screen shown in the current deployed interface."
  },
  {
    title: "Dashboard and daily visibility",
    tag: "future screenshot 02",
    text: "Use this slot for the dashboard view that highlights sales overview, daily visibility, and manager-ready operating signals."
  },
  {
    title: "Commercial and operational workspaces",
    tag: "future screenshot 03",
    text: "Drop in your strongest sales, inventory, purchasing, or accounting workspace screen to show the product breadth more clearly."
  },
  {
    title: "Reports, roles, and settings",
    tag: "future screenshot 04",
    text: "This is the best location for reports, close-and-send views, role governance, settings, or workspace administration surfaces."
  }
];

export default function ImagePlaceholders() {
  return (
    <section className="section-shell" id="previews">
      <div className="section-intro">
        <span className="eyebrow">current interface placeholders</span>
        <h2>Reserved spaces for real Kryvexis OS screens.</h2>
        <p>
          The current system overview already references authentication, dashboard, sales, inventory, purchasing, accounting,
          operations, reports, roles, and settings. These placeholders are positioned so the real screens can be dropped in later without redesigning the site.
        </p>
      </div>

      <div className="preview-grid">
        {placeholders.map((item, index) => (
          <motion.article
            key={item.title}
            className="preview-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="preview-screen">
              <div className="preview-noise" />
              <div className="preview-corners corner-tl" />
              <div className="preview-corners corner-tr" />
              <div className="preview-corners corner-bl" />
              <div className="preview-corners corner-br" />
              <div className="preview-placeholder-text">KRYVEXIS OS SCREEN PLACEHOLDER</div>
            </div>

            <div className="preview-copy">
              <span className="eyebrow">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
