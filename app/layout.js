import "./globals.css";

export const metadata = {
  title: "Kryvexis OS Portal V3",
  description: "Interactive cinematic website concept for Kryvexis."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
