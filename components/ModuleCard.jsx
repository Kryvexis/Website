export default function ModuleCard({ title, text }) {
  return (
    <article className="module-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
