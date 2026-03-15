"use client";

import Image from "next/image";

export default function LiveScreen({ src, alt, title, caption, large = false, className = "" }) {
  return (
    <article className={`live-screen-card ${large ? "large" : ""} ${className}`}>
      <div className="live-screen-wrap">
        <div className="live-screen-topbar" />
        <div className="live-screen-scan live-screen-scan-a" />
        <div className="live-screen-scan live-screen-scan-b" />
        <div className="live-screen-grid" />
        <Image src={src} alt={alt} fill className="live-screen-image" />
      </div>
      <div className="live-screen-copy">
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
    </article>
  );
}
