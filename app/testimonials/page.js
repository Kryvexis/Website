import PageHero from "@/components/PageHero";

const placeholders = [
  { title: "Operations team feedback", text: "Use this for verified client feedback about workflow continuity, branch visibility, or stock discipline." },
  { title: "Finance team feedback", text: "Use this for verified feedback about statements, reconciliation, close readiness, or accounting visibility." },
  { title: "Management feedback", text: "Use this for verified feedback about branch oversight, reporting, decisions, or role-governed control." }
];

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero eyebrow="Testimonials" title="Real proof belongs here." text="Use this page for verified client feedback only. Keep every testimonial tied to a clear business outcome." />
      <section className="section">
        <div className="container testimonial-grid">
          {placeholders.map((item) => (
            <article className="testimonial-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
