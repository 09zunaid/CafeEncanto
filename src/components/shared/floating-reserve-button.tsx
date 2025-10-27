import { Button } from '@/components/ui/button';
import { CalendarHeart } from 'lucide-react';
import Link from 'next/link';

export function FloatingReserveButton() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full shadow-lg animate-in zoom-in-50 duration-500 delay-500 transition-transform hover:scale-110 hover:shadow-2xl"
      aria-label="Reserve a Table"
    >
      <Link href="/reservations">
        <CalendarHeart className="h-8 w-8" />
      </Link>
    </Button>
  );
}
