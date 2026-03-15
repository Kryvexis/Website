"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link href="/" className="brand">
          <Image src="/kryvexis-logo.png" alt="Kryvexis" width={38} height={38} className="brand-mark" priority />
          <div>
            <strong>Kryvexis OS</strong>
            <span>Business operating system</span>
          </div>
        </Link>

        <nav className="nav-links">
          <a href="#platform">Product</a>
          <a href="#modules">Modules</a>
          <a href="#flow">How it works</a>
          <a href="#governance">Governance</a>
          <a href="#reports">Reports</a>
          <Link href="/testimonials">Testimonials</Link>
        </nav>

        <a href="#contact" className="demo-link visible-cta">Book a demo</a>
      </div>
    </header>
  );
}
