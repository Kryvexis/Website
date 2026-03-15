import AmbientLines from "@/components/AmbientLines";
import HeroMotion from "@/components/HeroMotion";
import TypingHeadline from "@/components/TypingHeadline";
import ModuleCard from "@/components/ModuleCard";
import ScreenPlaceholder from "@/components/ScreenPlaceholder";
import ScrollReveal from "@/components/ScrollReveal";
import OverdriveFX from "@/components/OverdriveFX";
import SectionPulse from "@/components/SectionPulse";
import { ArrowRight, Boxes, Building2, FileSpreadsheet, ShieldCheck, Users } from "lucide-react";

const proof = [
  "Connected workflows",
  "Branch-aware control",
  "Role-based access",
  "Daily operational visibility",
];

const modules = [
  {
    title: "Sales",
    text: "Manage the full commercial flow from customer to quote to invoice to payment inside one connected workspace."
  },
  {
    title: "Inventory",
    text: "Keep stock decisions accurate with live visibility, movement context, and branch-aware inventory control."
  },
  {
    title: "Procurement",
    text: "Turn stock pressure into guided procurement actions with supplier visibility and reorder intelligence."
  },
  {
    title: "Accounting",
    text: "Give finance an operational cockpit with daily visibility, control points, and close-ready surfaces."
  },
  {
    title: "Operations",
    text: "Keep operational follow-through visible with action-focused workspaces for tasks, approvals, and execution flow."
  },
  {
    title: "Reports",
    text: "Move from static reports to operational visibility with close status, branch comparison, and delivery-ready summaries."
  },
  {
    title: "Roles",
    text: "Show the right work to the right people with role-aware access, branch context, and controlled visibility."
  },
  {
    title: "Settings",
    text: "Control support details, branch defaults, automation recipients, and workspace administration from one governed layer."
  }
];

const flow = [
  "Customer activity",
  "Stock impact",
  "Procurement decisions",
  "Finance visibility",
  "Reporting and action",
];

export default function HomePage() {
  return (
    <main>
      <ScrollReveal />
      <OverdriveFX />
      <section className="hero-section">
        <AmbientLines />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Command-center platform for modern businesses</span>
            <TypingHeadline />
            <p className="hero-text">
              Kryvexis OS gives your business one connected command environment with role-based control,
              branch-aware execution, and decision-ready visibility.
            </p>

            <div className="cta-row">
              <a className="button primary" href="#contact">Book a demo</a>
              <a className="button secondary" href="#platform">Explore the platform</a>
            </div>
          </div>

          <HeroMotion />
        </div>
      </section>

      <section className="proof-strip reveal-item"><SectionPulse />
        <div className="container proof-grid">
          {proof.map((item) => (
            <div className="proof-item" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section subtle-motion reveal-item" id="platform"><SectionPulse />
        <div className="container narrow">
          <span className="eyebrow">What Kryvexis OS does</span>
          <h2>Run sales, stock, procurement, finance, and reporting from one connected system.</h2>
          <p className="section-intro">
            Kryvexis OS is a role-governed business operating system that connects sales, inventory,
            procurement, accounting, operations, and reporting inside one command environment.
          </p>
        </div>

        <div className="container four-grid">
          <article className="value-card">
            <BriefBlock icon={Users} title="Sell and bill with continuity" text="Customer records, quotes, invoices, payments, and commercial workflows stay connected instead of scattered across separate tools." />
          </article>
          <article className="value-card">
            <BriefBlock icon={Boxes} title="Control stock and procurement" text="Inventory visibility, movement context, low-stock awareness, supplier workflows, and reorders help operational teams act with better timing." />
          </article>
          <article className="value-card">
            <BriefBlock icon={FileSpreadsheet} title="Run finance with visibility" text="Statements, cash-up, expenses, creditors, reconciliation, VAT, and close-ready views position finance as an active control surface." />
          </article>
          <article className="value-card">
            <BriefBlock icon={Building2} title="Lead with reports and action signals" text="Day-close visibility, summary emails, branch comparison, and operational signals help managers and executives see what needs action." />
          </article>
        </div>
      </section>

      <section className="section muted subtle-motion reveal-item" id="modules"><SectionPulse />
        <div className="container narrow">
          <span className="eyebrow">Module overview</span>
          <h2>Each module is explained by business outcome, not just by feature name.</h2>
        </div>
        <div className="container module-grid">
          {modules.map((item) => (
            <ModuleCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className="section reveal-item" id="flow"><SectionPulse />
        <div className="container flow-layout">
          <div>
            <span className="eyebrow">How it works</span>
            <h2>Show the business flow, not just the screen list.</h2>
            <p className="section-intro">
              The system advantage is the connected journey from customer activity to stock movement to finance visibility to reporting and decisions.
            </p>
          </div>

          <div className="flow-card">
            {flow.map((item, index) => (
              <div className="flow-step" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                {index < flow.length - 1 && <ArrowRight size={16} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted subtle-motion" id="governance">
        <div className="container split-grid">
          <div>
            <span className="eyebrow">Roles &amp; governance</span>
            <h2>Show the right work to the right people, with branch scope and controlled settings.</h2>
            <p className="section-intro">
              Kryvexis OS is designed around role-aware access, branch context, settings control, workspace administration,
              and views that support executives, managers, finance teams, operators, warehouse users, and sales teams.
            </p>
          </div>

          <div className="governance-card">
            <div><ShieldCheck size={18} /><span>Role-aware access</span></div>
            <div><Building2 size={18} /><span>Branch-aware execution</span></div>
            <div><Users size={18} /><span>Workspace administration</span></div>
            <div><FileSpreadsheet size={18} /><span>Support details and automation recipients</span></div>
          </div>
        </div>
      </section>

      <section className="section reveal-item" id="reports"><SectionPulse />
        <div className="container split-grid">
          <div>
            <span className="eyebrow">Reports &amp; automation</span>
            <h2>Operational visibility for managers and executives too.</h2>
            <p className="section-intro">
              Use day-close, summary emails, branch performance, seller leaderboard, and exception visibility as proof that the platform supports management oversight, not just transactional work.
            </p>
          </div>

          <div className="report-card">
            <h3>Management visibility</h3>
            <ul>
              <li>Close status</li>
              <li>Branch performance</li>
              <li>Summary emails</li>
              <li>Seller performance</li>
              <li>Exception visibility</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section muted subtle-motion" id="screens">
        <div className="container narrow">
          <span className="eyebrow">Selected screenshots</span>
          <h2>Use screenshots sparingly and place each one beside clear business wording.</h2>
          <p className="section-intro">
            These placeholders are positioned using the recommended screenshot logic: command-entry, dashboard, reports, and roles/settings.
          </p>
        </div>
        <div className="container screen-grid">
          <ScreenPlaceholder title="Command-entry / secure access" caption="Recommended hero reference because it feels branded, premium, and immediate." />
          <ScreenPlaceholder title="Dashboard / product overview" caption="Useful for the overall product overview because it immediately communicates an operational workspace." />
          <ScreenPlaceholder title="Reports / management visibility" caption="Ideal for close status, branch performance, summaries, and executive oversight." />
          <ScreenPlaceholder title="Roles / settings / governance" caption="Best for proving control, structure, and role-aware design." />
        </div>
      </section>

      <section className="section final-cta reveal-item" id="contact"><SectionPulse />
        <div className="container narrow center">
          <span className="eyebrow">Book a walkthrough</span>
          <h2>Ready to run your business inside one command environment?</h2>
          <p className="section-intro">
            Book a live walkthrough of Kryvexis OS and see how your sales, stock, finance, and reporting can work together.
          </p>

          <div className="cta-row center-row">
            <a className="button primary" href="mailto:kryvexissolutions@gmail.com">Book a demo</a>
            <a className="button secondary" href="https://wa.me/27686282874">WhatsApp us</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function BriefBlock({ icon: Icon, title, text }) {
  return (
    <div className="brief-block">
      <div className="brief-icon"><Icon size={18} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
