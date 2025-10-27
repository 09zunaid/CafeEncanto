import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));
  
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16 animate-in fade-in-down duration-500">
        <h1 className="text-5xl md:text-6xl font-headline text-primary">Our Gallery</h1>
        <p className="mt-4 text-xl text-muted-foreground">A glimpse into the heart of Café Encanto.</p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2 animate-in fade-in-up duration-500" style={{ animationDelay: `${index * 100}ms`}}>
                <Card className="overflow-hidden group">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={800}
                      height={800}
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="translate-x-[-50%] md:translate-x-0" />
        <CarouselNext className="translate-x-[50%] md:translate-x-0" />
      </Carousel>
    </div>
  );
}
