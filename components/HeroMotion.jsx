"use client";

import { useEffect, useState } from "react";

export default function HeroMotion() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * 18;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 18;
      setOffset({ x, y });
    };

    const handleTouch = (e) => {
      const t = e.touches?.[0];
      if (!t) return;
      const x = ((t.clientX / window.innerWidth) - 0.5) * 18;
      const y = ((t.clientY / window.innerHeight) - 0.5) * 18;
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
      <div className="halo halo-a" style={{ transform: `translate(${offset.x * -0.8}px, ${offset.y * -0.8}px)` }} />
      <div className="halo halo-b" style={{ transform: `translate(${offset.x * 0.6}px, ${offset.y * 0.6}px)` }} />
      <div className="live-orbit orbit-a" />
      <div className="live-orbit orbit-b" />
      <div className="live-orbit orbit-c" />
      <div className="scan-beam beam-a" />
      <div className="scan-beam beam-b" />

      <div className="panel-shell">
        <div className="glass-card command-card" style={{ transform: `translate(${offset.x * 0.32}px, ${offset.y * 0.32}px)` }}>
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

        <div className="glass-card stat-card stat-c" style={{ transform: `translate(${offset.x * -0.16}px, ${offset.y * -0.16}px)` }}>
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
      </div>
    </div>
  );
}
