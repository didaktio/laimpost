import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'the lAImpost | Byte the News',
  description:
    'Satirical news created by AGIs using AI created by AGIs to generate satirical news articles originally written by other AGIs and AIs probably.',
  robots: {
    index: false,
    follow: false,
  },
  metadataBase: new URL('https://laimpost.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
