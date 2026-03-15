"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function SceneCard({ title, eyebrow, description, bullets }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 160, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 160, damping: 18 });

  const rotateX = useTransform(smoothY, [-40, 40], [10, -10]);
  const rotateY = useTransform(smoothX, [-40, 40], [-12, 12]);
  const glowX = useTransform(smoothX, [-50, 50], ["35%", "70%"]);
  const glowY = useTransform(smoothY, [-50, 50], ["30%", "70%"]);

  return (
    <motion.article
      className="scene-card"
      style={{ rotateX, rotateY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left - rect.width / 2);
        mouseY.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      whileHover={{ y: -8 }}
    >
      <motion.span
        className="scene-card-glow"
        style={{ left: glowX, top: glowY }}
      />
      <div className="scene-card-layer layer-one" />
      <div className="scene-card-layer layer-two" />

      <div className="scene-card-content">
        <span className="eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
