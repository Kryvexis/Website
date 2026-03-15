"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div>
          <h3>Kryvexis OS</h3>
          <p>
            Kryvexis builds business operating systems that connect commercial activity,
            stock control, procurement, finance, and reporting in one governed environment.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="#platform">Product</a></li>
            <li><a href="#modules">Modules</a></li>
            <li><a href="#reports">Reports &amp; Automation</a></li>
            <li><a href="#governance">Roles &amp; Governance</a></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>kryvexissolutions@gmail.com</li>
            <li>WhatsApp: +27 68 628 2874</li>
            <li><a href="#contact">Request a tailored walkthrough</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
