"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroMotion() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * 28;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 28;
      setOffset({ x, y });
    };
    const handleTouch = (e) => {
      const t = e.touches?.[0];
      if (!t) return;
      const x = ((t.clientX / window.innerWidth) - 0.5) * 28;
      const y = ((t.clientY / window.innerHeight) - 0.5) * 28;
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
      <div className="hero-pulse hero-pulse-a" style={{ transform: `translate(${offset.x * -0.9}px, ${offset.y * -0.9}px)` }} />
      <div className="hero-pulse hero-pulse-b" style={{ transform: `translate(${offset.x * 0.8}px, ${offset.y * 0.8}px)` }} />
      <div className="hero-pulse hero-pulse-c" style={{ transform: `translate(${offset.x * -0.6}px, ${offset.y * 0.6}px)` }} />
      <div className="live-orbit orbit-a" />
      <div className="live-orbit orbit-b" />
      <div className="live-orbit orbit-c" />
      <div className="scan-beam beam-a" />
      <div className="scan-beam beam-b" />

      <div className="hero-screen-shell" style={{ transform: `translate(${offset.x * 0.22}px, ${offset.y * 0.22}px)` }}>
        <div className="hero-screen-topbar" />
        <div className="hero-screen-grid" />
        <Image src="/hero-intro.png" alt="Kryvexis OS intro" fill className="hero-screen-image" />
      </div>

      <div className="glass-card command-card" style={{ transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)` }}>
        <span>Command environment</span>
        <strong>One governed workspace for commercial execution and visibility.</strong>
      </div>

      <div className="glass-card stat-card stat-a" style={{ transform: `translate(${offset.x * -0.24}px, ${offset.y * 0.2}px)` }}>
        <span>Connected workflows</span>
        <strong>Customer activity → stock impact → finance visibility → reporting</strong>
      </div>

      <div className="glass-card stat-card stat-b" style={{ transform: `translate(${offset.x * 0.22}px, ${offset.y * -0.22}px)` }}>
        <span>Branch-aware control</span>
        <strong>Role-based access, settings control, and workspace structure.</strong>
      </div>
    </div>
  );
}
