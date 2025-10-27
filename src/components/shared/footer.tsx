import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary/50 text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Icons.logo className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl">Café Encanto</span>
          </div>
          <nav className="flex items-center gap-4 text-lg font-medium">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <Link href="/menu" className="transition-colors hover:text-primary">Menu</Link>
            <Link href="/gallery" className="transition-colors hover:text-primary">Gallery</Link>
            <Link href="/reservations" className="transition-colors hover:text-primary">Reservations</Link>
          </nav>
          <div className="flex gap-1 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 transition-transform hover:scale-125" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 transition-transform hover:scale-125" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 transition-transform hover:scale-125" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Café Encanto. All Rights Reserved. Crafted with Magic.</p>
        </div>
      </div>
    </footer>
  );
}
