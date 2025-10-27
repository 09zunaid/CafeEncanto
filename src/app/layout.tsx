import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { FloatingReserveButton } from '@/components/shared/floating-reserve-button';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Café Encanto: A Magical Experience',
  description: 'Experience the magic of coffee at Café Encanto. Cozy ambiance, delicious treats, and unforgettable moments.',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className={cn('font-body antialiased')}>
        <Header />
        <main className="min-h-screen bg-background pt-4 animate-in fade-in duration-1000">
          {children}
        </main>
        <Footer />
        <FloatingReserveButton />
        <Toaster />
      </body>
    </html>
  );
}
