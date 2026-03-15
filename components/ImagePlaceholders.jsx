"use client";

import { motion } from "framer-motion";

const placeholders = [
  {
    title: "Kryvexis OS dashboard overview",
    tag: "placeholder image 01",
    text: "Replace this block with your main product dashboard screenshot when ready."
  },
  {
    title: "Client management / workflow view",
    tag: "placeholder image 02",
    text: "Use this slot for the screen that best shows the daily working interface."
  },
  {
    title: "Invoices / quotes / transactions view",
    tag: "placeholder image 03",
    text: "Drop in the money-side or operations screen here once you send the real images."
  },
  {
    title: "Reports / analytics / summary view",
    tag: "placeholder image 04",
    text: "This is the best place for your most impressive stats, charts, or performance screen."
  }
];

export default function ImagePlaceholders() {
  return (
    <section className="section-shell" id="previews">
      <div className="section-intro">
        <span className="eyebrow">future system previews</span>
        <h2>Reserved spaces for real Kryvexis OS screenshots.</h2>
        <p>
          These are intentional placeholders so the site can already feel structured and real.
          Once you send the actual Kryvexis OS images, each panel can be swapped with no redesign needed.
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
              <div className="preview-placeholder-text">IMAGE PLACEHOLDER</div>
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
