import "./globals.css";

export const metadata = {
  title: "Kryvexis Impossible Experience V10",
  description: "A unified impossible web experience for Kryvexis."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
