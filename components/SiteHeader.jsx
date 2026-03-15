"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${hidden ? "header-hidden" : ""}`}>
      <div className="container nav-row">
        <Link href="/" className="brand">
          <Image src="/kryvexis-logo.png" alt="Kryvexis" width={38} height={38} className="brand-mark" priority />
          <div>
            <strong>Kryvexis OS</strong>
            <span>Business operating system</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link href="/platform">Platform</Link>
          <Link href="/modules">Modules</Link>
          <Link href="/reports">Reports</Link>
          <Link href="/governance">Governance</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="button visible-cta header-cta">Book a demo</Link>
      </div>
    </header>
  );
}
