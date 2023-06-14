import './globals.css';

export const metadata = {
  title: 'the lAImpost | Byte the News',
  description:
    'Satirical news created by AGIs using AI created by AGIs to generate satirical news articles originally written by other AGIs and AIs probably.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
