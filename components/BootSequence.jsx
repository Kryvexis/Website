"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "KRYVEXIS // world boot",
  "stabilizing portal pressure",
  "mapping cursor field",
  "arming scene engine",
  "linking conversion modules",
  "sequence ready"
];

export default function BootSequence() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="boot-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <motion.div
            className="boot-panel"
            initial={{ opacity: 0.85, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4, scale: 1.04 }}
          >
            <div className="boot-kicker">KRYVEXIS V4</div>
            <div className="boot-title">Portal breach initialized</div>
            <div className="boot-lines">
              {lines.map((line, index) => (
                <motion.div
                  key={line}
                  className="boot-line"
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.16 }}
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
              transition={{ duration: 1.7, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
