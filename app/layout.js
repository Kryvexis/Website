import "./globals.css";

export const metadata = {
  title: "Kryvexis System Portal V7",
  description: "A spectacular motion-heavy system world for Kryvexis."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
