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
      <div className="panel-shell">
        <div className="glass-card command-card" style={{ transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)` }}>
          <span>Command environment</span>
          <strong>One governed workspace for commercial execution and visibility.</strong>
        </div>

        <div className="glass-card stat-card stat-a" style={{ transform: `translate(${offset.x * -0.2}px, ${offset.y * 0.2}px)` }}>
          <span>Connected workflows</span>
          <strong>Customer activity → stock impact → finance visibility → reporting</strong>
        </div>

        <div className="glass-card stat-card stat-b" style={{ transform: `translate(${offset.x * 0.2}px, ${offset.y * -0.2}px)` }}>
          <span>Branch-aware control</span>
          <strong>Role-based access, settings control, and workspace structure.</strong>
        </div>

        <div className="glass-card stat-card stat-c" style={{ transform: `translate(${offset.x * -0.15}px, ${offset.y * -0.15}px)` }}>
          <span>Operational visibility</span>
          <strong>Day-close status, summary signals, branch comparison, and action-ready reporting.</strong>
        </div>
      </div>
    </div>
  );
}
