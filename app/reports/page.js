import PageHero from "@/components/PageHero";
import LiveScreen from "@/components/LiveScreen";

export default function ReportsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Reports"
        title="Give management live visibility, not just static reports."
        text="Kryvexis OS supports day-close status, branch performance, summary delivery, queue monitoring, and exception visibility so decisions can happen faster."
      />

      <section className="section">
        <div className="container split-feature-grid">
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
          <LiveScreen src="/reports.png" alt="Kryvexis OS reports" title="Reports / branch performance / close and send" caption="A reporting layer designed around daily visibility, management control, and operational follow-through." large />
        </div>
      </section>
    </main>
  );
}
