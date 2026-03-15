"use client";

import { useEffect, useState } from "react";

export default function AmbientLines() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * 18;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 18;
      setOffset({ x, y });
    };
    const onTouch = (e) => {
      const t = e.touches?.[0];
      if (!t) return;
      const x = ((t.clientX / window.innerWidth) - 0.5) * 18;
      const y = ((t.clientY / window.innerHeight) - 0.5) * 18;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <>
      <div className="ambient-grid" />
      <div className="ambient-noise" />
      <div className="ambient-glow ambient-glow-a" style={{ transform: `translate(${offset.x * -0.8}px, ${offset.y * -0.8}px)` }} />
      <div className="ambient-glow ambient-glow-b" style={{ transform: `translate(${offset.x * 0.7}px, ${offset.y * 0.7}px)` }} />
      <div className="ambient-line ambient-line-a" />
      <div className="ambient-line ambient-line-b" />
      <div className="ambient-line ambient-line-c" />
    </>
  );
}
