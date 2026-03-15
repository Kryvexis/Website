"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const phases = [
  "engaging synthetic projection deck",
  "mounting fake video scene renderer",
  "binding kryvexis signal identity",
  "arming scan-wipe camera cuts",
  "calibrating touch-reactive overlays",
  "routing cinematic takeover rails",
  "injecting frame-noise atmosphere",
  "finalizing horizon ignition",
  "unlocking scene transition matrix",
  "system handoff ready"
];

export default function BootSequence() {
  const [show, setShow] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => Math.min(prev + 1, phases.length - 1));
    }, 620);

    const timer = setTimeout(() => setShow(false), 7600);

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
          <div className="boot-scan-sheet" />
          <motion.div
            className="boot-panel"
            initial={{ opacity: 0.82, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4, scale: 1.04 }}
          >
            <div className="boot-topline">
              <span>KRYVEXIS PORTAL V9</span>
              <span>FAKE VIDEO SCENE ENGINE</span>
            </div>

            <div className="boot-logo-wrap">
              <motion.div
                className="boot-logo-glow"
                animate={{ scale: [1, 1.14, 1], opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="boot-logo-slice slice-a"
                animate={{ x: [-16, 16, -16], opacity: [0.1, 0.45, 0.1] }}
                transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="boot-logo-slice slice-b"
                animate={{ x: [18, -18, 18], opacity: [0.1, 0.36, 0.1] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src="/kryvexis-logo.png"
                alt="Kryvexis logo"
                width={480}
                height={220}
                className="boot-logo"
                priority
              />
            </div>

            <div className="boot-title">Projection engine ignition</div>
            <div className="boot-subtitle">
              Building a website that behaves like a trailer.
            </div>

            <div className="boot-lines">
              {phases.map((line, index) => (
                <motion.div
                  key={line}
                  className={`boot-line ${index <= step ? "active" : ""}`}
                  initial={{ opacity: 0.2, x: -12 }}
                  animate={{ opacity: index <= step ? 1 : 0.2, x: 0 }}
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
              <span>TRAILER MATRIX LIVE</span>
              <span>VISUAL OVERRIDE ENABLED</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
