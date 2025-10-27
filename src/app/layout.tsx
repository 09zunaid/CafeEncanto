import type { Metadata } from 'next';
import { Lora, Open_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { FloatingReserveButton } from '@/components/shared/floating-reserve-button';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
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
    <html lang="en" className={`${lora.variable} ${openSans.variable}`}>
      <body className={cn('font-body antialiased')}>
        <Header />
        <main className="min-h-screen bg-background pt-20 animate-in fade-in duration-500">
          {children}
        </main>
        <Footer />
        <FloatingReserveButton />
        <Toaster />
      </body>
    </html>
  );
}
