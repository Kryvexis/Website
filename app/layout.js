import './globals.css';

export const metadata = {
  title: 'Kryvexis | Beyond Normal Web',
  description: 'A futuristic cinematic launch experience built for GitHub and Vercel deployment.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
