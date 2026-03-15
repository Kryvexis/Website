import "./globals.css";

export const metadata = {
  title: "Kryvexis System Portal V9",
  description: "Fake video scene version for Kryvexis."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
