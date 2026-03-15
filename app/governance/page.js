import PageHero from "@/components/PageHero";
import LiveScreen from "@/components/LiveScreen";
import { ShieldCheck, Building2, Users, FileSpreadsheet } from "lucide-react";

export default function GovernancePage() {
  return (
    <main>
      <PageHero
        eyebrow="Governance"
        title="Give every team the right level of access, visibility, and control."
        text="Kryvexis OS supports structured access across admin, finance, warehouse, procurement, operations, managers, executives, and sales teams."
      />

      <section className="section">
        <div className="container split-feature-grid">
          <div className="governance-card">
            <div><ShieldCheck size={18} /><span>Role-aware access</span></div>
            <div><Building2 size={18} /><span>Branch-aware execution</span></div>
            <div><Users size={18} /><span>Workspace administration</span></div>
            <div><FileSpreadsheet size={18} /><span>Support details and automation rules</span></div>
          </div>

          <LiveScreen src="/roles.png" alt="Kryvexis OS roles" title="Roles / access model" caption="A clear permission structure that supports responsibility, control, and visibility across the business." large />
        </div>
      </section>
    </main>
  );
}
