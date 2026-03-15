import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Kryvexis OS</h3>
          <p>
            A connected operating environment for sales, stock, procurement, finance, reporting, and governance.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/platform">Platform</Link></li>
            <li><Link href="/modules">Modules</Link></li>
            <li><Link href="/reports">Reports</Link></li>
            <li><Link href="/governance">Governance</Link></li>
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
            <li><Link href="/contact">Request a walkthrough</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
