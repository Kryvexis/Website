export const metadata = {
  title: "Testimonials | Kryvexis OS"
};

const placeholders = [
  {
    title: "Operations team feedback",
    text: "Placeholder for a client comment about improved workflow continuity, branch visibility, or stock discipline."
  },
  {
    title: "Finance team feedback",
    text: "Placeholder for a client comment about statements, reconciliation, close readiness, or accounting visibility."
  },
  {
    title: "Management feedback",
    text: "Placeholder for a client comment about branch oversight, reporting, decisions, or role-governed control."
  }
];

export default function TestimonialsPage() {
  return (
    <main className="simple-page">
      <div className="container narrow">
        <span className="eyebrow">Testimonials</span>
        <h1>Real proof belongs here.</h1>
        <p className="section-intro">
          Use this page for verified client feedback only. Keep every testimonial tied to a concrete business outcome.
        </p>

        <div className="testimonial-grid">
          {placeholders.map((item) => (
            <article className="testimonial-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
