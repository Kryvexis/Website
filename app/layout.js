import "./globals.css";

export const metadata = {
  title: "Kryvexis OS | Unified Business Operating System",
  description: "Branch-aware, role-governed business operating system for sales, inventory, finance, procurement, reporting, and governance."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
