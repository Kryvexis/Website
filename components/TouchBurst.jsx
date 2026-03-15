"use client";

import { useEffect } from "react";

export default function TouchBurst() {
  useEffect(() => {
    const makeBurst = (x, y) => {
      const host = document.createElement("div");
      host.className = "burst-host";
      host.style.left = `${x}px`;
      host.style.top = `${y}px`;

      for (let i = 0; i < 14; i++) {
        const ray = document.createElement("span");
        ray.className = "burst-ray";
        ray.style.setProperty("--r", `${i * 25}deg`);
        ray.style.setProperty("--d", `${32 + (i % 5) * 16}px`);
        host.appendChild(ray);
      }

      const ring = document.createElement("span");
      ring.className = "burst-ring";
      host.appendChild(ring);

      const flash = document.createElement("span");
      flash.className = "burst-flash";
      host.appendChild(flash);

      document.body.appendChild(host);
      setTimeout(() => host.remove(), 900);
    };

    const onPointer = (e) => makeBurst(e.clientX, e.clientY);
    const onTouch = (e) => {
      const t = e.touches?.[0];
      if (t) makeBurst(t.clientX, t.clientY);
    };

    window.addEventListener("pointerdown", onPointer, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("touchstart", onTouch);
    };
  }, []);

  return null;
}
