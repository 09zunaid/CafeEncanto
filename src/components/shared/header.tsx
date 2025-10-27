'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reservations', label: 'Reservations' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out w-[calc(100%-2rem)] max-w-6xl',
        isScrolled ? 'w-[calc(100%-2rem)]' : 'w-full md:w-[calc(100%-4rem)]'
      )}
    >
      <div
        className={cn(
          'container mx-auto flex h-20 items-center justify-between px-4 rounded-xl transition-all duration-300 ease-in-out',
          isScrolled
            ? 'bg-background/80 backdrop-blur-sm shadow-lg'
            : 'bg-transparent shadow-none'
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <Icons.logo className="h-10 w-10 text-primary" />
          <span className="font-headline text-3xl font-bold text-foreground">
            Café Encanto
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2 rounded-full bg-background/50 backdrop-blur-sm px-4 py-2 border">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-lg font-medium transition-colors hover:text-primary rounded-full px-4 py-1.5',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="bg-background/50 backdrop-blur-sm">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-8 pt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'text-3xl font-medium transition-colors hover:text-primary',
                       pathname === item.href ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
