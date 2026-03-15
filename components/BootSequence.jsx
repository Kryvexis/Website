"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function BootSequence() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 9) + 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, 220);

    const timer = setTimeout(() => setShow(false), 4200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const padded = useMemo(() => String(progress).padStart(3, "0"), [progress]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="boot-overlay minimal-boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <div className="boot-noise" />
          <motion.div
            className="boot-minimal-shell"
            initial={{ opacity: 0.84, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.42, scale: 1.03 }}
          >
            <motion.div
              className="boot-minimal-glow"
              animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.9, 0.45] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              src="/kryvexis-logo.png"
              alt="Kryvexis logo"
              width={520}
              height={240}
              className="boot-minimal-logo"
              priority
            />

            <div className="boot-minimal-progress-row">
              <span className="boot-minimal-number">{padded}</span>
              <span className="boot-minimal-percent">%</span>
            </div>

            <div className="boot-minimal-bar-shell">
              <motion.div
                className="boot-minimal-bar"
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.24 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
