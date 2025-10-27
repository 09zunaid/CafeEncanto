import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-ambiance');
  const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline tracking-tight drop-shadow-md">
            Café Encanto
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl font-body drop-shadow">
            Where every cup tells a story.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-bold text-lg">
              <Link href="/menu">
                Explore Our Menu <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold text-lg">
              <Link href="/reservations">
                Reserve a Table
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-secondary-foreground">
              <h2 className="text-3xl md:text-4xl font-headline text-foreground">Our Story</h2>
              <p>
                Café Encanto was born from a dream to create a sanctuary where time slows down, conversations flow freely, and the aroma of freshly brewed coffee fills the air. Our journey began in a small, sun-drenched corner of the city, with a mission to serve not just coffee, but moments of pure, unadulterated joy.
              </p>
              <p>
                We believe in the magic of small things: a perfectly crafted latte, a warm pastry, a friendly smile. Our beans are sourced ethically, our ingredients are fresh, and our passion is poured into every single cup. We invite you to be a part of our story, to find your own little piece of magic within our walls.
              </p>
            </div>
            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">A Magical Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Step into a world of warmth and wonder. Café Encanto is more than a coffee shop; it&apos;s a destination for dreamers, thinkers, and lovers of life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline mb-12">Visit Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <MapPin className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-xl">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p>123 Enchanted Lane, Magical City, 45678</p>
              </CardContent>
            </Card>
             <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Clock className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-xl">Opening Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Mon - Fri: 7am - 7pm</p>
                <p>Sat - Sun: 8am - 8pm</p>
              </CardContent>
            </Card>
             <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Phone className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> hello@cafeencanto.com</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 rounded-lg overflow-hidden shadow-2xl">
            {mapImage && (
              <Image 
                src={mapImage.imageUrl} 
                alt={mapImage.description}
                data-ai-hint={mapImage.imageHint}
                width={1200}
                height={400}
                className="w-full object-cover"
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
