import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Extroverts - Find Your People',
  description: 'Discover real world vibes. Parties, Hangouts, Events.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Extroverts',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#0A0A0F',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins bg-brand-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
