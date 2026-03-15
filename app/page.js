import AmbientLines from "@/components/AmbientLines";
import HeroMotion from "@/components/HeroMotion";
import TypingHeadline from "@/components/TypingHeadline";
import ModuleCard from "@/components/ModuleCard";
import ScrollReveal from "@/components/ScrollReveal";
import OverdriveFX from "@/components/OverdriveFX";
import SectionPulse from "@/components/SectionPulse";
import LiveScreen from "@/components/LiveScreen";
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
    text: "Manage quotes, invoices, payments, statements, and customer activity inside one connected commercial workflow."
  },
  {
    title: "Inventory",
    text: "Track stock movement, branch availability, low-stock pressure, and item visibility from one operational surface."
  },
  {
    title: "Procurement",
    text: "Move from stock pressure to supplier action with purchase orders, supplier visibility, and reorder discipline."
  },
  {
    title: "Accounting",
    text: "Run debtors, creditors, expenses, statements, reconciliation, VAT control, and close readiness from a structured finance layer."
  },
  {
    title: "Operations",
    text: "Keep day-to-day execution visible with tasks, approvals, process follow-through, and operational decision points."
  },
  {
    title: "Reports",
    text: "Give managers and executives clear visibility into branch performance, close status, summaries, and exceptions."
  },
  {
    title: "Roles",
    text: "Control who sees what through role-aware access, branch context, and governed permissions."
  },
  {
    title: "Settings",
    text: "Manage support details, business defaults, automation recipients, branch setup, and workspace administration in one place."
  }
];

const flow = [
  "Customer activity",
  "Commercial capture",
  "Stock impact",
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
            <span className="eyebrow">Business operating system for modern teams</span>
            <TypingHeadline />
            <p className="hero-text">
              Kryvexis OS connects sales, stock, procurement, accounting, reporting, and governance inside one command environment built for daily execution.
            </p>

            <div className="cta-row">
              <a className="button primary visible-cta" href="#contact">Book a demo</a>
              <a className="button secondary" href="#platform">Explore the platform</a>
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

      <section className="proof-strip reveal-item"><SectionPulse />
        <div className="container proof-grid">
          {proof.map((item) => (
            <div className="proof-item" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section subtle-motion reveal-item" id="platform"><SectionPulse />
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
            <BriefBlock icon={Users} title="Commercial continuity" text="Keep customer records, quotes, invoices, payments, and account activity connected instead of split across separate tools." />
          </article>
          <article className="value-card">
            <BriefBlock icon={Boxes} title="Stock and procurement control" text="Use live inventory visibility, branch context, supplier workflows, and reorder structure to act with better timing." />
          </article>
          <article className="value-card">
            <BriefBlock icon={FileSpreadsheet} title="Finance with operational context" text="Give finance teams visibility across debtors, creditors, expenses, reconciliation, VAT, statements, and close readiness." />
          </article>
          <article className="value-card">
            <BriefBlock icon={Building2} title="Manager and executive visibility" text="Turn reporting into action with branch performance, close status, summaries, and operational signals." />
          </article>
        </div>
      </section>

      <section className="section muted subtle-motion reveal-item" id="modules"><SectionPulse />
        <div className="container narrow">
          <span className="eyebrow">Module overview</span>
          <h2>Each part of the platform is built to support real business work.</h2>
          <p className="section-intro">
            Kryvexis OS is not a collection of disconnected screens. Each module supports a clear part of the operating cycle and fits into one connected system.
          </p>
        </div>

        <div className="container module-grid">
          {modules.map((item) => (
            <ModuleCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>

        <div className="container split-feature-grid extra-gap">
          <LiveScreen
            src="/accounting.png"
            alt="Kryvexis OS accounting"
            title="Accounting / finance workspace"
            caption="A structured finance layer for debtors, creditors, statements, expenses, supplier bills, reconciliation, VAT control, and period close work."
          />
          <LiveScreen
            src="/settings.png"
            alt="Kryvexis OS settings"
            title="Settings / workspace administration"
            caption="Configure business defaults, support details, branch settings, and automation recipients from one governed admin surface."
          />
        </div>
      </section>

      <section className="section reveal-item" id="flow"><SectionPulse />
        <div className="container flow-layout">
          <div>
            <span className="eyebrow">How it works</span>
            <h2>Connected workflows from first action to final visibility.</h2>
            <p className="section-intro">
              The platform is designed so that business activity moves cleanly from execution into control, finance, reporting, and follow-through.
            </p>
          </div>

          <div className="flow-card flip-flow">
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

      <section className="section muted reveal-item" id="governance"><SectionPulse />
        <div className="container split-feature-grid">
          <div>
            <span className="eyebrow">Roles &amp; governance</span>
            <h2>Give every team the right level of access, visibility, and control.</h2>
            <p className="section-intro">
              Kryvexis OS supports structured access across admin, finance, warehouse, procurement, operations, managers, executives, and sales teams.
            </p>

            <div className="governance-card">
              <div><ShieldCheck size={18} /><span>Role-aware access</span></div>
              <div><Building2 size={18} /><span>Branch-aware execution</span></div>
              <div><Users size={18} /><span>Workspace administration</span></div>
              <div><FileSpreadsheet size={18} /><span>Support details and automation rules</span></div>
            </div>
          </div>

          <LiveScreen
            src="/roles.png"
            alt="Kryvexis OS roles"
            title="Roles / access model"
            caption="A clear permission structure that supports responsibility, control, and visibility across the business."
            large
          />
        </div>
      </section>

      <section className="section reveal-item" id="reports"><SectionPulse />
        <div className="container split-feature-grid">
          <div>
            <span className="eyebrow">Reports &amp; automation</span>
            <h2>Give management live visibility, not just static reports.</h2>
            <p className="section-intro">
              Kryvexis OS supports day-close status, branch performance, summary delivery, queue monitoring, and exception visibility so decisions can happen faster.
            </p>

            <div className="report-card">
              <h3>Management visibility</h3>
              <ul>
                <li>Close status</li>
                <li>Branch performance</li>
                <li>Summary emails</li>
                <li>Queue monitoring</li>
                <li>Exception visibility</li>
              </ul>
            </div>
          </div>

          <LiveScreen
            src="/reports.png"
            alt="Kryvexis OS reports"
            title="Reports / branch performance / close and send"
            caption="A reporting layer designed around daily visibility, management control, and operational follow-through."
            large
          />
        </div>
      </section>

      <section className="section muted reveal-item" id="screens"><SectionPulse />
        <div className="container narrow">
          <span className="eyebrow">Product views</span>
          <h2>Real Kryvexis OS screens integrated into the site experience.</h2>
          <p className="section-intro">
            These views show the product in motion across command-entry, dashboard, finance, settings, roles, and reporting.
          </p>
        </div>
        <div className="container screen-grid">
          <LiveScreen src="/hero-intro.png" alt="Kryvexis OS intro" title="Command-entry / secure access" caption="A premium first impression that establishes the product immediately." />
          <LiveScreen src="/dashboard.png" alt="Kryvexis OS dashboard overview" title="Dashboard / product overview" caption="A fast overview of activity, approvals, sales visibility, and daily operating focus." />
          <LiveScreen src="/accounting.png" alt="Kryvexis OS accounting module" title="Accounting / control surface" caption="A finance workspace that feels structured, useful, and operationally grounded." />
          <LiveScreen src="/settings.png" alt="Kryvexis OS settings workspace" title="Settings / admin control" caption="One place to manage business defaults, support, branch setup, and automation routing." />
        </div>
      </section>

      <section className="section final-cta reveal-item" id="contact"><SectionPulse />
        <div className="container narrow center">
          <span className="eyebrow">Book a walkthrough</span>
          <h2>See how Kryvexis OS can bring your business into one controlled operating environment.</h2>
          <p className="section-intro">
            Book a live walkthrough to explore how your sales, stock, finance, procurement, and reporting can work together in one platform.
          </p>

          <div className="cta-row center-row">
            <a className="button primary visible-cta" href="mailto:kryvexissolutions@gmail.com">Book a demo</a>
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
