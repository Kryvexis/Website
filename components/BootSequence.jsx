"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const phases = [
  "awakening synthetic horizon",
  "engaging reactor lattice",
  "arming visual overdrive channels",
  "stitching logo-based signal shell",
  "mounting cinematic story engine",
  "enabling touch-reactive field map",
  "calibrating HUD overlays",
  "opening deep scan corridors",
  "routing launch pressure",
  "finalizing system handoff"
];

export default function BootSequence() {
  const [show, setShow] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => Math.min(prev + 1, phases.length - 1));
    }, 560);

    const timer = setTimeout(() => setShow(false), 6800);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const progress = useMemo(() => ((step + 1) / phases.length) * 100, [step]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="boot-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9 } }}
        >
          <div className="boot-noise" />
          <motion.div
            className="boot-grid-flash"
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="boot-panel"
            initial={{ opacity: 0.84, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.44, scale: 1.04 }}
          >
            <div className="boot-topline">
              <span>KRYVEXIS SYSTEM PORTAL V8</span>
              <span>STAGE // OVERDRIVE</span>
            </div>

            <div className="boot-logo-wrap">
              <motion.div
                className="boot-logo-glow"
                animate={{ scale: [1, 1.12, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="boot-logo-slice slice-a"
                animate={{ x: [-12, 12, -12], opacity: [0.15, 0.4, 0.15] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="boot-logo-slice slice-b"
                animate={{ x: [14, -14, 14], opacity: [0.12, 0.32, 0.12] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src="/kryvexis-logo.png"
                alt="Kryvexis logo"
                width={460}
                height={210}
                className="boot-logo"
                priority
              />
            </div>

            <div className="boot-title">Deep system ignition</div>
            <div className="boot-subtitle">
              Not a landing page. A machine entering consciousness.
            </div>

            <div className="boot-lines">
              {phases.map((line, index) => (
                <motion.div
                  key={line}
                  className={`boot-line ${index <= step ? "active" : ""}`}
                  initial={{ opacity: 0.18, x: -10 }}
                  animate={{ opacity: index <= step ? 1 : 0.18, x: 0 }}
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
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="boot-footer">
              <span>{Math.round(progress)}%</span>
              <span>VISUAL OVERRIDE ACTIVE</span>
              <span>TOUCH FIELD LIVE</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
