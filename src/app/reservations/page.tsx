import { ReservationForm } from './reservation-form';

export default function ReservationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline">Reserve Your Table</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Book your magical experience at Café Encanto. We can&apos;t wait to host you!
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <ReservationForm />
      </div>
    </div>
  );
}
