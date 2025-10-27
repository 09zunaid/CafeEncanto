import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Clock, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-ambiance');
  const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');

  return (
    <div className="flex flex-col">
      <section className="relative h-[70vh] md:h-[90vh] w-full">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4 animate-in fade-in duration-1000">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline tracking-tight drop-shadow-lg">
            Café Encanto
          </h1>
          <p className="mt-4 text-xl md:text-3xl max-w-3xl font-body drop-shadow-md">
            Where every cup tells a story.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-bold text-xl px-10 py-7 transition-transform hover:scale-105">
              <Link href="/menu">
                Explore Our Menu <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold text-xl px-10 py-7 transition-transform hover:scale-105">
              <Link href="/reservations">
                Reserve a Table
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="prose prose-xl max-w-none text-secondary-foreground animate-in fade-in-left duration-500">
              <h2 className="text-4xl md:text-5xl font-headline text-primary">Our Story</h2>
              <p>
                Café Encanto was born from a dream to create a sanctuary where time slows down, conversations flow freely, and the aroma of freshly brewed coffee fills the air. Our journey began in a small, sun-drenched corner of the city, with a mission to serve not just coffee, but moments of pure, unadulterated joy.
              </p>
              <p>
                We believe in the magic of small things: a perfectly crafted latte, a warm pastry, a friendly smile. Our beans are sourced ethically, our ingredients are fresh, and our passion is poured into every single cup. We invite you to be a part of our story, to find your own little piece of magic within our walls.
              </p>
            </div>
            <div className="flex justify-center animate-in fade-in-right duration-500">
              <Card className="w-full max-w-md shadow-2xl bg-card/80 backdrop-blur-sm transform-gpu transition-transform hover:-translate-y-2 hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl flex items-center gap-2"><Sparkles className="text-accent" /> A Magical Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    Step into a world of warmth and wonder. Café Encanto is more than a coffee shop; it&apos;s a destination for dreamers, thinkers, and lovers of life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in-down duration-500">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">Visit Us</h2>
            <p className="mt-4 text-xl text-muted-foreground">We&apos;re waiting to welcome you.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-8 animate-in fade-in-left duration-700">
              <Card className="bg-secondary/30 border-secondary hover:shadow-primary/10 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl text-primary">Our Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-foreground">123 Enchanted Lane, Magical City, 45678</p>
                  </CardContent>
              </Card>
             <Card className="bg-secondary/30 border-secondary hover:shadow-primary/10 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                     <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl text-primary">Opening Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="text-lg grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-foreground">
                    <p><strong>Mon - Fri:</strong></p><p>7am - 7pm</p>
                    <p><strong>Sat - Sun:</strong></p><p>8am - 8pm</p>
                  </CardContent>
              </Card>
              <Card className="bg-secondary/30 border-secondary hover:shadow-primary/10 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl text-primary">Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent className="text-lg grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-foreground">
                    <p><strong>Phone:</strong></p><p>(123) 456-7890</p>
                    <p><strong>Email:</strong></p><p>hello@cafeencanto.com</p>
                  </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in-right duration-700 h-[60vh] lg:h-full relative group">
              {mapImage && (
                <Image 
                  src={mapImage.imageUrl} 
                  alt={mapImage.description}
                  data-ai-hint={mapImage.imageHint}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
