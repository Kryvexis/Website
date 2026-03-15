"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const phases = [
  "mounting impossible interface shell",
  "projecting kryvexis identity core",
  "arming horizon distortion matrix",
  "binding fake-cinematic transition engine",
  "stabilizing touch-reactive field pressure",
  "assembling takeover chapters",
  "activating visual overdrive lattice",
  "routing launch chamber pathways",
  "finalizing living world handoff",
  "system consciousness online",
];

export default function BootSequence() {
  const [show, setShow] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => Math.min(prev + 1, phases.length - 1));
    }, 640);

    const timer = setTimeout(() => setShow(false), 8200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const progress = useMemo(() => ((step + 1) / phases.length) * 100, [step]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="boot-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.95 } }}
        >
          <div className="boot-noise" />
          <div className="boot-grid" />
          <motion.div
            className="boot-panel"
            initial={{ opacity: 0.82, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.38, scale: 1.04 }}
          >
            <div className="boot-topline">
              <span>KRYVEXIS // IMPOSSIBLE EXPERIENCE</span>
              <span>STAGE // ONE UNIFIED WORLD</span>
            </div>

            <div className="boot-logo-wrap">
              <motion.div
                className="boot-logo-glow"
                animate={{ scale: [1, 1.14, 1], opacity: [0.42, 1, 0.42] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="boot-logo-slice slice-a"
                animate={{ x: [-18, 18, -18], opacity: [0.08, 0.4, 0.08] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="boot-logo-slice slice-b"
                animate={{ x: [18, -18, 18], opacity: [0.08, 0.34, 0.08] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src="/kryvexis-logo.png"
                alt="Kryvexis logo"
                width={500}
                height={240}
                className="boot-logo"
                priority
              />
            </div>

            <div className="boot-title">Impossible environment ignition</div>
            <div className="boot-subtitle">
              Not multiple effects. One coherent machine-world with its own rules.
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
              <span>WORLD STATE LOCKED</span>
              <span>TRAILER MATRIX LIVE</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
