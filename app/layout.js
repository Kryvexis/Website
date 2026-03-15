import './globals.css';

export const metadata = {
  title: 'Kryvexis OS Portal',
  description: 'A cinematic interactive web experience for Kryvexis.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
