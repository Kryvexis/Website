"use client";

import { useEffect, useMemo, useState } from "react";

export default function OverdriveFX() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * 20;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 20;
      setOffset({ x, y });
    };

    const handleTouch = (e) => {
      const t = e.touches?.[0];
      if (!t) return;
      const x = ((t.clientX / window.innerWidth) - 0.5) * 20;
      const y = ((t.clientY / window.innerHeight) - 0.5) * 20;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 42 }).map((_, i) => ({
        id: i,
        left: `${(i * 9.2) % 100}%`,
        top: `${(i * 13.7) % 100}%`,
        size: 2 + (i % 5),
        delay: `${(i % 8) * 0.25}s`,
        duration: `${6 + (i % 7)}s`,
      })),
    []
  );

  return (
    <div className="overdrive-fx" aria-hidden="true">
      <div className="overdrive-grid" />
      <div className="overdrive-noise" />
      <div className="overdrive-vignette" />
      <div className="overdrive-glow glow-left" style={{ transform: `translate(${offset.x * -0.8}px, ${offset.y * -0.8}px)` }} />
      <div className="overdrive-glow glow-right" style={{ transform: `translate(${offset.x * 0.7}px, ${offset.y * 0.7}px)` }} />
      <div className="overdrive-glow glow-bottom" style={{ transform: `translate(${offset.x * -0.5}px, ${offset.y * 0.5}px)` }} />

      <div className="overdrive-marquee marquee-top">
        <div>KRYVEXIS OS • CONNECTED WORKFLOWS • ROLE GOVERNED CONTROL • BRANCH AWARE EXECUTION • REPORTING • AUTOMATION • </div>
      </div>
      <div className="overdrive-marquee marquee-bottom">
        <div>COMMAND ENVIRONMENT • SALES • INVENTORY • PROCUREMENT • ACCOUNTING • REPORTS • GOVERNANCE • </div>
      </div>

      <div className="beam-sweep beam-sweep-a" />
      <div className="beam-sweep beam-sweep-b" />
      <div className="beam-sweep beam-sweep-c" />

      <div className="particle-layer">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle-node"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
