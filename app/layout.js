import "./globals.css";

export const metadata = {
  title: "Kryvexis OS Portal V4",
  description: "A cinematic interactive portal for Kryvexis, built for GitHub and Vercel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
