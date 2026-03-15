"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "KRYVEXIS // cinematic world boot",
  "arming scene engine",
  "mapping visual trail",
  "binding scroll states",
  "rendering atmosphere",
  "experience ready"
];

export default function BootSequence() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="boot-overlay" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            className="boot-panel"
            initial={{ opacity: 0.85, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.45, scale: 1.04 }}
          >
            <div className="boot-kicker">KRYVEXIS V6</div>
            <div className="boot-title">Scene engine initialized</div>
            <div className="boot-lines">
              {lines.map((line, index) => (
                <motion.div
                  key={line}
                  className="boot-line"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.14 }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{line}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="boot-progress"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
