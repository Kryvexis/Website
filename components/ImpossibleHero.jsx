"use client";

import { MoveRight, Sparkles, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function ImpossibleHero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <div className="pill-row">
          <span className="interface-pill"><Sparkles size={14} /> branch-aware business operating system</span>
          <span className="interface-pill"><Zap size={14} /> role-governed commercial control environment</span>
        </div>

        <h1>
          One operating system for
          <span> sales, stock, finance, procurement, reporting, and governance.</span>
        </h1>

        <p>
          Kryvexis OS is designed as a unified operating environment rather than a narrow single-module ERP.
          Its core proposition is continuity: a commercial event should flow into inventory, finance, reporting,
          managerial visibility, and company governance without fragmented tools or duplicated data entry.
        </p>

        <div className="hero-actions">
          <MagneticButton href="#chapters">Explore Kryvexis OS</MagneticButton>
          <MagneticButton href="#launch" secondary>
            View rollout priorities <MoveRight size={16} />
          </MagneticButton>
        </div>

        <div className="hero-metrics">
          <div><strong>Unified</strong><span>selling-to-cash continuity</span></div>
          <div><strong>Branch-aware</strong><span>workspace and company control</span></div>
          <div><strong>Late-build</strong><span>advanced foundation, pre-polish stage</span></div>
        </div>
      </div>

      <div className="hero-stage">
        <div className="reactor-shell">
          <div className="hero-frame frame-a" />
          <div className="hero-frame frame-b" />
          <div className="hero-frame frame-c" />
          <div className="hero-ring ring-a" />
          <div className="hero-ring ring-b" />

          <div className="hero-core chamber-core">
            <div className="hero-core-glow" />
            <div className="hero-core-noise" />
            <div className="reactor-grid" />
            <div className="reactor-orbit orbit-1" />
            <div className="reactor-orbit orbit-2" />
            <div className="reactor-orbit orbit-3" />
            <div className="reactor-core">
              <div className="reactor-core-inner" />
            </div>

            <div className="reactor-side-panel panel-a">
              <span>commercial core</span>
              <strong>customers, quotes, invoices, payments, POS</strong>
            </div>
            <div className="reactor-side-panel panel-b">
              <span>operational core</span>
              <strong>inventory, stock movements, transfers, low-stock signals</strong>
            </div>
            <div className="reactor-side-panel panel-c">
              <span>finance core</span>
              <strong>debtors, statements, ledger, reconciliation, VAT, period close</strong>
            </div>
            <div className="reactor-side-panel panel-d">
              <span>governance core</span>
              <strong>branches, invites, branding, role policies, company controls</strong>
            </div>

            <div className="subtle-brand-stamp">KRYVEXIS OS // UNIFIED OPERATING ENVIRONMENT</div>
          </div>
        </div>
      </div>
    </section>
  );
}
