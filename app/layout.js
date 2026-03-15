import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import OverdriveFX from "@/components/OverdriveFX";
import TouchBurst from "@/components/TouchBurst";

export const metadata = {
  title: "Kryvexis OS",
  description: "Business operating system for sales, inventory, procurement, accounting, reporting, and governance."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TouchBurst />
        <OverdriveFX />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
