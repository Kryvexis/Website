"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const steps = [
  "mounting ambient particle fabric",
  "linking control-surface motion graphs",
  "arming holographic conversion panels",
  "syncing cursor light engine",
  "portal status // unstable in a good way",
];

export default function BootSequence() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="boot-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          <motion.div
            className="boot-panel"
            initial={{ scale: 0.96, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.03, opacity: 0.35 }}
          >
            <span className="eyebrow">kryvexis // live launch system</span>
            <h2>Booting the impossible interface.</h2>
            <div className="boot-lines">
              {steps.map((step, i) => (
                <motion.div
                  key={step}
                  className="boot-line"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.18 }}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="boot-progress"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.9, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
