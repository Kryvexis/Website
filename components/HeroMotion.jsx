"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroMotion() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * 24;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 24;
      setOffset({ x, y });
    };

    const handleTouch = (e) => {
      const t = e.touches?.[0];
      if (!t) return;
      const x = ((t.clientX / window.innerWidth) - 0.5) * 24;
      const y = ((t.clientY / window.innerHeight) - 0.5) * 24;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  return (
    <div className="motion-stage">
      <div className="hero-pulse hero-pulse-a" style={{ transform: `translate(${offset.x * -0.8}px, ${offset.y * -0.8}px)` }} />
      <div className="hero-pulse hero-pulse-b" style={{ transform: `translate(${offset.x * 0.6}px, ${offset.y * 0.6}px)` }} />
      <div className="hero-pulse hero-pulse-c" style={{ transform: `translate(${offset.x * -0.4}px, ${offset.y * 0.4}px)` }} />

      <div className="live-orbit orbit-a" />
      <div className="live-orbit orbit-b" />
      <div className="live-orbit orbit-c" />
      <div className="live-orbit orbit-d" />

      <div className="scan-beam beam-a" />
      <div className="scan-beam beam-b" />
      <div className="scan-beam beam-c" />

      <div className="signal-column signal-left">
        <span />
        <span />
        <span />
      </div>

      <div className="signal-column signal-right">
        <span />
        <span />
        <span />
      </div>

      <div className="hero-screen-shell" style={{ transform: `translate(${offset.x * 0.18}px, ${offset.y * 0.18}px)` }}>
        <div className="hero-screen-topbar" />
        <div className="hero-screen-grid" />
        <div className="hero-screen-scan hero-screen-scan-a" />
        <div className="hero-screen-scan hero-screen-scan-b" />
        <Image src="/hero-intro.png" alt="Kryvexis OS operating intelligence intro" fill className="hero-screen-image" />
      </div>

      <div className="panel-shell">
        <div className="glass-card command-card" style={{ transform: `translate(${offset.x * 0.34}px, ${offset.y * 0.34}px)` }}>
          <span>Command environment</span>
          <strong>Operating intelligence online, with one command surface for daily execution and visibility.</strong>
        </div>

        <div className="glass-card stat-card stat-a" style={{ transform: `translate(${offset.x * -0.26}px, ${offset.y * 0.2}px)` }}>
          <span>Connected workflows</span>
          <strong>Customer activity → stock impact → finance visibility → reporting</strong>
        </div>

        <div className="glass-card stat-card stat-b" style={{ transform: `translate(${offset.x * 0.22}px, ${offset.y * -0.22}px)` }}>
          <span>Branch-aware control</span>
          <strong>Role-based access, settings control, and workspace structure.</strong>
        </div>

        <div className="glass-card stat-card stat-c" style={{ transform: `translate(${offset.x * -0.18}px, ${offset.y * -0.18}px)` }}>
          <span>Operational visibility</span>
          <strong>Day-close status, summary signals, branch comparison, and action-ready reporting.</strong>
        </div>

        <div className="glass-card mini-card mini-a">
          <span>Live signal</span>
          <strong>Close and summary flow</strong>
        </div>

        <div className="glass-card mini-card mini-b">
          <span>Status</span>
          <strong>Role policies active</strong>
        </div>

        <div className="glass-card mini-card mini-c">
          <span>Automation</span>
          <strong>Delivery pipelines moving</strong>
        </div>
      </div>
    </div>
  );
}
