"use client";

export default function ScreenPlaceholder({ title, caption }) {
  return (
    <article className="screen-shot-card">
      <div className="screen-shot-placeholder">
        <div className="screen-topbar" />
        <div className="screen-grid-lines" />
        <div className="screen-label">Replace with real Kryvexis OS screenshot</div>
      </div>
      <h3>{title}</h3>
      <p>{caption}</p>
    </article>
  );
}
