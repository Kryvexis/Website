import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Book a walkthrough of Kryvexis OS."
        text="See how sales, stock, procurement, finance, and reporting can work together in one operating environment."
      />

      <section className="section">
        <div className="container split-feature-grid">
          <div className="report-card">
            <h3>Contact details</h3>
            <ul>
              <li>Email: kryvexissolutions@gmail.com</li>
              <li>WhatsApp: +27 68 628 2874</li>
              <li>Best use: product walkthroughs, partnership conversations, and tailored demos</li>
            </ul>
          </div>

          <div className="report-card">
            <h3>Next step</h3>
            <p className="section-intro">Choose the fastest route to start the conversation.</p>
            <div className="cta-row">
              <a className="button visible-cta" href="mailto:kryvexissolutions@gmail.com">Email us</a>
              <a className="button secondary" href="https://wa.me/27686282874">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
