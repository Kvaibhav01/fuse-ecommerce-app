import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fuse ⋯ Store',
  description: 'The store of the Fuse e-commerce app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
