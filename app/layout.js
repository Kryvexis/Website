import "./globals.css";

export const metadata = {
  title: "Kryvexis OS Portal V6",
  description: "A scroll-cinematic website concept for Kryvexis."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
