'use client';

import { motion } from 'framer-motion';
import ShockwaveButton from '@/components/ShockwaveButton';

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const metrics = [
  { label: 'Visual latency', value: '08ms' },
  { label: 'Scene states', value: '03' },
  { label: 'Launch polish', value: 'A+' },
  { label: 'Premium intent', value: '100%' }
];

const signatures = [
  { id: '01', title: 'Reactive shockwaves', text: 'Clicks trigger expanding energy rings so the interface feels alive, tactile, and engineered.' },
  { id: '02', title: 'Layer-separated cards', text: 'Panels split into foreground, glow, and grid planes on hover to simulate depth without heavy 3D cost.' },
  { id: '03', title: 'Scene morphing hero', text: 'The opening stage moves between interface, reveal, and product modes so the page behaves like a system.' }
];

const modes = [
  { name: 'Stealth Black', accent: 'Obsidian shell / electric cyan' },
  { name: 'Nova Silver', accent: 'Silver alloy / plasma blue' },
  { name: 'Pulse Violet', accent: 'Dark chrome / neon violet' }
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="grid-overlay" />

      <header className="topbar">
        <div className="brand-lockup"><span className="brand-mark" /><span>KRYVEXIS</span></div>
        <nav>
          <a href="#system">System</a>
          <a href="#signature">Signature</a>
          <a href="#configurator">Configurator</a>
          <a href="#final-cta">Launch</a>
        </nav>
      </header>

      <section className="hero section">
        <motion.div className="hero-copy" variants={reveal} initial="hidden" animate="visible">
          <div className="eyebrow">APPLE-GRADE POLISH • TESLA-STYLE THEATER • SCI-FI INTERACTION</div>
          <h1>Build a launch experience that feels beyond normal web.</h1>
          <p>A cinematic, premium, Vercel-ready site concept designed to feel like a concept-car reveal, flagship keynote, and next-gen operating system fused into one live experience.</p>
          <div className="cta-row">
            <ShockwaveButton href="#final-cta">Start the launch</ShockwaveButton>
            <ShockwaveButton href="#system" secondary>Explore the system</ShockwaveButton>
          </div>
        </motion.div>

        <motion.div className="hero-stage" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}>
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-core">
            <div className="hero-shell">
              <div className="hero-shell-inner">
                <span className="status-pill">LIVE SYSTEM CORE</span>
                <h2>Kryvexis OS / Launch Environment</h2>
                <p>Precision surfaces. Luminous telemetry. Premium motion built to convert attention into action.</p>
              </div>
            </div>
            <div className="hud hud-left"><span>SCENE MODE</span><strong>Reveal State 02</strong></div>
            <div className="hud hud-right"><span>AMBIENT LOAD</span><strong>GPU-lean / smooth</strong></div>
          </div>
        </motion.div>
      </section>

      <section id="system" className="section section-card">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / SYSTEM REVEAL</span>
            <h2>The interaction language is the product theater.</h2>
          </div>
        </div>
        <div className="metrics-grid">
          {metrics.map((item) => (
            <motion.article key={item.label} className="metric-card layer-card" whileHover={{ rotateX: -4, rotateY: 5, y: -8 }} transition={{ type: 'spring', stiffness: 180, damping: 18 }}>
              <div className="layer glow" />
              <div className="layer grid" />
              <div className="layer content"><span>{item.label}</span><strong>{item.value}</strong></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="signature" className="section">
        <div className="section-heading narrow">
          <span className="eyebrow">03 / SIGNATURE MOMENTS</span>
          <h2>Not random animation. Memorable set-pieces with discipline.</h2>
        </div>
        <div className="signature-grid">
          {signatures.map((item) => (
            <motion.article key={item.id} className="signature-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
              <span className="signature-id">{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="configurator" className="section section-card config-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">05 / CONFIGURATOR</span>
            <h2>Switch the mood. Keep the same world.</h2>
          </div>
        </div>
        <div className="config-grid">
          <div className="config-preview">
            <div className="preview-shell">
              <div className="preview-beam" />
              <div className="preview-chip">Adaptive stage</div>
            </div>
          </div>
          <div className="config-options">
            {modes.map((mode) => (
              <article key={mode.name} className="mode-row">
                <div><strong>{mode.name}</strong><p>{mode.accent}</p></div>
                <button type="button">Select</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section specs-section">
        <div className="section-heading narrow">
          <span className="eyebrow">06 / SPECS + CREDIBILITY</span>
          <h2>Anchor the spectacle in believable detail.</h2>
        </div>
        <div className="spec-table">
          <div><span>Stack</span><strong>Next.js 14 + Framer Motion</strong></div>
          <div><span>Deploy target</span><strong>GitHub + Vercel</strong></div>
          <div><span>Design posture</span><strong>Luxury / power / wonder</strong></div>
          <div><span>Mobile intent</span><strong>Purpose-built responsive layout</strong></div>
        </div>
      </section>

      <section id="final-cta" className="section final-cta">
        <div className="final-panel">
          <span className="eyebrow">07 / FINAL CALL TO ACTION</span>
          <h2>Ready to turn the concept into your production launch site?</h2>
          <p>Use this starter as the base, swap in your brand copy and assets, then push straight to GitHub and deploy on Vercel.</p>
          <div className="cta-row center"><ShockwaveButton href="mailto:kryvexissolutions@gmail.com">Reserve the build</ShockwaveButton></div>
        </div>
      </section>
    </main>
  );
}
