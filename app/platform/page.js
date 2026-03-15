import PageHero from "@/components/PageHero";
import LiveScreen from "@/components/LiveScreen";

export default function PlatformPage() {
  return (
    <main>
      <PageHero
        eyebrow="Platform"
        title="Connected workflows from first action to final visibility."
        text="Kryvexis OS is designed so business activity moves cleanly from execution into control, finance, reporting, and follow-through."
      />

      <section className="section">
        <div className="container flow-card">
          {["Customer activity", "Commercial capture", "Stock impact", "Finance visibility", "Reporting and action"].map((item, index) => (
            <div className="flow-step" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section split-feature-grid container">
        <LiveScreen src="/hero-intro.png" alt="Kryvexis OS intro" title="Command-entry / secure access" caption="A premium first impression that establishes the product immediately." />
        <LiveScreen src="/dashboard.png" alt="Kryvexis OS dashboard" title="Dashboard / product overview" caption="A fast overview of activity, approvals, sales visibility, and daily operating focus." />
      </section>
    </main>
  );
}
