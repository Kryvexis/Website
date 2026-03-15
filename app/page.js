import HeroMotion from "@/components/HeroMotion";
import TypingHeadline from "@/components/TypingHeadline";
import LiveScreen from "@/components/LiveScreen";
import { Boxes, Building2, FileSpreadsheet, Users } from "lucide-react";

const proof = ["Connected workflows", "Branch-aware control", "Role-based access", "Daily operational visibility"];

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Business operating system for modern teams</span>
            <TypingHeadline />
            <p className="hero-text">
              Kryvexis OS connects sales, stock, procurement, accounting, reporting, and governance inside one command environment built for daily execution.
            </p>

            <div className="cta-row">
              <a className="button visible-cta" href="/contact">Book a demo</a>
              <a className="button secondary" href="/platform">Explore the platform</a>
            </div>

            <div className="metric-row">
              <div className="metric-card">
                <strong>One connected workflow</strong>
                <span>From customer activity to reporting and action.</span>
              </div>
              <div className="metric-card">
                <strong>Built for control</strong>
                <span>Branch-aware, role-aware, and operationally structured.</span>
              </div>
              <div className="metric-card">
                <strong>Designed for visibility</strong>
                <span>Daily decisions supported by live management signals.</span>
              </div>
            </div>
          </div>
          <HeroMotion />
        </div>
      </section>

      <section className="proof-strip">
        <div className="container proof-grid">
          {proof.map((item) => <div className="proof-item" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="section">
        <div className="container split-feature-grid">
          <div>
            <span className="eyebrow">What Kryvexis OS does</span>
            <h2>Run the commercial and operational core of your business from one system.</h2>
            <p className="section-intro">
              Kryvexis OS brings sales, inventory, procurement, accounting, reporting, and governance together so teams can work from one structured source of truth.
            </p>
          </div>

          <LiveScreen
            src="/dashboard.png"
            alt="Kryvexis OS dashboard"
            title="Dashboard / daily operating view"
            caption="A real-time dashboard for activity, approvals, commercial performance, customer follow-through, and fast operational awareness."
            large
          />
        </div>

        <div className="container four-grid">
          <article className="value-card">
            <div className="brief-icon"><Users size={18} /></div>
            <h3>Commercial continuity</h3>
            <p>Keep customer records, quotes, invoices, payments, and account activity connected instead of split across separate tools.</p>
          </article>
          <article className="value-card">
            <div className="brief-icon"><Boxes size={18} /></div>
            <h3>Stock and procurement control</h3>
            <p>Use live inventory visibility, branch context, supplier workflows, and reorder structure to act with better timing.</p>
          </article>
          <article className="value-card">
            <div className="brief-icon"><FileSpreadsheet size={18} /></div>
            <h3>Finance with operational context</h3>
            <p>Give finance teams visibility across debtors, creditors, expenses, reconciliation, VAT, statements, and close readiness.</p>
          </article>
          <article className="value-card">
            <div className="brief-icon"><Building2 size={18} /></div>
            <h3>Manager and executive visibility</h3>
            <p>Turn reporting into action with branch performance, close status, summaries, and operational signals.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
