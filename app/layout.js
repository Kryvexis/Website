import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TouchBurst from "@/components/TouchBurst";

export const metadata = {
  title: "Kryvexis OS",
  description: "Role-governed business operating system connecting sales, inventory, procurement, accounting, operations, and reporting in one command environment."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TouchBurst />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
