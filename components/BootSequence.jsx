"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const messages = [
  "engaging cinematic world shell",
  "mounting touch-reactive layers",
  "calibrating logo pulse field",
  "synchronizing glow channels",
  "mapping scene transitions",
  "arming launch modules",
  "stabilizing system horizon",
  "portal handoff ready",
];

export default function BootSequence() {
  const [show, setShow] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => Math.min(prev + 1, messages.length));
    }, 520);

    const timer = setTimeout(() => setShow(false), 5200);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const progress = useMemo(() => Math.min(((step + 1) / (messages.length + 1)) * 100, 100), [step]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="boot-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <div className="boot-noise" />
          <motion.div
            className="boot-panel"
            initial={{ opacity: 0.85, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.45, scale: 1.04 }}
          >
            <div className="boot-logo-wrap">
              <motion.div
                className="boot-logo-glow"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src="/kryvexis-logo.png"
                alt="Kryvexis logo"
                width={420}
                height={180}
                className="boot-logo"
                priority
              />
            </div>

            <div className="boot-kicker">KRYVEXIS SYSTEM WORLD</div>
            <div className="boot-title">Spectacular environment loading</div>

            <div className="boot-lines">
              {messages.map((line, index) => (
                <motion.div
                  key={line}
                  className={`boot-line ${index <= step ? "active" : ""}`}
                  initial={{ opacity: 0.22, x: -10 }}
                  animate={{
                    opacity: index <= step ? 1 : 0.22,
                    x: 0
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{line}</p>
                </motion.div>
              ))}
            </div>

            <div className="boot-progress-shell">
              <motion.div
                className="boot-progress"
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.35 }}
              />
            </div>

            <div className="boot-footer">
              <span>{Math.round(progress)}%</span>
              <span>DO NOT INTERRUPT SYSTEM HANDOFF</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
