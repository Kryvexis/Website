import "./globals.css";

export const metadata = {
  title: "Kryvexis System Portal V8",
  description: "Insane cinematic system interface for Kryvexis."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
