import Link from "next/link";
import { ArrowLeft, Quote, ShieldCheck, Sparkles, Star } from "lucide-react";

const placeholders = [
  {
    name: "Client name placeholder",
    role: "Founder / Director",
    company: "Company name",
    quote:
      "Kryvexis delivered a premium, high-confidence digital experience that felt engineered rather than assembled.",
  },
  {
    name: "Client name placeholder",
    role: "Operations lead",
    company: "Company name",
    quote:
      "The polish, speed, and visual confidence made the product feel more credible before we even explained the offer.",
  },
  {
    name: "Client name placeholder",
    role: "Product owner",
    company: "Company name",
    quote:
      "What stood out was the discipline. The spectacle never felt random - it always supported the perception of quality.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="portal-root testimonial-page theme-flux">
      <div className="noise-layer" />
      <div className="grid-layer" />
      <div className="horizon-band band-a" />
      <div className="horizon-band band-b" />
      <div className="flash-wash wash-a" />
      <div className="flash-wash wash-b" />
      <div className="scan-sheet" />
      <div className="vignette-mask" />

      <header className="portal-nav">
        <Link href="/" className="brand-mark">
          <span className="brand-dot" />
          Kryvexis Impossible V10
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <a href="#proof">Proof</a>
          <a href="#notes">Notes</a>
        </nav>
      </header>

      <section className="section-shell testimonial-hero">
        <div className="section-intro max-wide">
          <span className="eyebrow">testimonials / credibility</span>
          <h1 className="testimonial-title">Proof should feel as premium as the product story.</h1>
          <p>
            This page is ready for your real client quotes. For now, it uses structured placeholder testimonials so the
            site has a legitimate proof layout without inventing actual customer claims.
          </p>
        </div>

        <div className="testimonial-banner">
          <div><Sparkles size={18} /> Premium delivery</div>
          <div><ShieldCheck size={18} /> Credible structure</div>
          <div><Star size={18} /> Replace with verified client proof later</div>
        </div>
      </section>

      <section className="section-shell" id="proof">
        <div className="testimonial-grid">
          {placeholders.map((item, index) => (
            <article className="testimonial-card" key={index}>
              <div className="testimonial-quote-icon"><Quote size={18} /></div>
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-meta">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
                <span>{item.company}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="notes">
        <div className="section-intro max-wide">
          <span className="eyebrow">next content drop</span>
          <h2>Ready for your real Kryvexis OS pictures and verified proof.</h2>
          <p>
            Once you send the Kryvexis OS visuals, these cards can be paired with screenshots, interface moments,
            client logos, or proof metrics so the page feels fully real rather than staged.
          </p>
        </div>

        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> Back to homepage
        </Link>
      </section>
    </main>
  );
}
