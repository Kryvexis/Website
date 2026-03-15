"use client";

import { useEffect } from "react";

export default function TouchBurst() {
  useEffect(() => {
    const makeBurst = (x, y) => {
      const host = document.createElement("div");
      host.className = "burst-host";
      host.style.left = `${x}px`;
      host.style.top = `${y}px`;

      for (let i = 0; i < 18; i++) {
        const ray = document.createElement("span");
        ray.className = "burst-ray";
        ray.style.setProperty("--r", `${i * 20}deg`);
        ray.style.setProperty("--d", `${34 + (i % 5) * 18}px`);
        host.appendChild(ray);
      }

      for (let i = 0; i < 10; i++) {
        const dot = document.createElement("span");
        dot.className = "burst-dot";
        dot.style.setProperty("--r", `${i * 36}deg`);
        dot.style.setProperty("--d", `${24 + (i % 4) * 22}px`);
        host.appendChild(dot);
      }

      const ring = document.createElement("span");
      ring.className = "burst-ring";
      host.appendChild(ring);

      const ring2 = document.createElement("span");
      ring2.className = "burst-ring burst-ring-2";
      host.appendChild(ring2);

      const flash = document.createElement("span");
      flash.className = "burst-flash";
      host.appendChild(flash);

      document.body.appendChild(host);
      setTimeout(() => host.remove(), 1000);
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
