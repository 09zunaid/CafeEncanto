import { ReservationForm } from './reservation-form';

export default function ReservationsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16 animate-in fade-in-down duration-500">
        <h1 className="text-5xl md:text-6xl font-headline text-primary">Reserve Your Table</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Book your magical experience at Café Encanto. We can&apos;t wait to host you!
        </p>
      </div>
      <div className="max-w-2xl mx-auto animate-in fade-in-up duration-700">
        <ReservationForm />
      </div>
    </div>
  );
}
