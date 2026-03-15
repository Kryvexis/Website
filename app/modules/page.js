import PageHero from "@/components/PageHero";
import ModuleCard from "@/components/ModuleCard";
import LiveScreen from "@/components/LiveScreen";

const modules = [
  { title: "Sales", text: "Manage quotes, invoices, payments, statements, and customer activity inside one connected commercial workflow." },
  { title: "Inventory", text: "Track stock movement, branch availability, low-stock pressure, and item visibility from one operational surface." },
  { title: "Purchasing", text: "Move from stock pressure to supplier action with purchase orders, supplier visibility, and reorder discipline." },
  { title: "Accounting", text: "Run debtors, creditors, expenses, statements, reconciliation, VAT control, and close readiness from a structured finance layer." },
  { title: "Operations", text: "Keep day-to-day execution visible with tasks, approvals, process follow-through, and operational decision points." },
  { title: "Action Center", text: "Bring high-priority work, alerts, and next-step execution into one action-focused layer." },
  { title: "Roles", text: "Control who sees what through role-aware access, branch context, and governed permissions." },
  { title: "Settings", text: "Manage support details, business defaults, automation recipients, branch setup, and workspace administration in one place." }
];

export default function ModulesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Modules"
        title="Each part of the platform is built to support real business work."
        text="Kryvexis OS is not a collection of disconnected screens. Each module supports a clear part of the operating cycle and fits into one connected system."
      />

      <section className="section">
        <div className="container module-grid">
          {modules.map((item) => <ModuleCard key={item.title} title={item.title} text={item.text} />)}
        </div>
      </section>

      <section className="section">
        <div className="container split-feature-grid">
          <LiveScreen src="/accounting.png" alt="Kryvexis OS accounting" title="Accounting / finance workspace" caption="Debt, statements, expenses, supplier bills, reconciliation, VAT control, and period close work." />
          <LiveScreen src="/settings.png" alt="Kryvexis OS settings" title="Settings / workspace administration" caption="Business defaults, support details, branch settings, and automation recipients from one governed admin surface." />
        </div>
      </section>
    </main>
  );
}
