import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const menuData = {
  beverages: [
    {
      id: 'bev1',
      name: 'Enchanted Espresso',
      description: 'A rich, aromatic shot of our finest single-origin beans.',
      price: '$3.50',
      imageId: 'menu-coffee-1',
    },
    {
      id: 'bev2',
      name: 'Mystic Mocha',
      description: 'Dark chocolate, steamed milk, and espresso, topped with whipped cream.',
      price: '$5.00',
      imageId: 'menu-coffee-2',
    },
    {
      id: 'bev3',
      name: 'Glimmering Green Tea',
      description: 'A soothing and refreshing organic green tea with a hint of jasmine.',
      price: '$4.00',
      imageId: 'menu-coffee-3',
    },
  ],
  pastries: [
    {
      id: 'pas1',
      name: 'Celestial Croissant',
      description: 'Flaky, buttery, and baked to golden perfection each morning.',
      price: '$4.00',
      imageId: 'menu-pastry-1',
    },
    {
      id: 'pas2',
      name: 'Chocolate Dream Cake',
      description: 'A decadent slice of rich chocolate cake with a fudge frosting.',
      price: '$6.50',
      imageId: 'menu-pastry-2',
    },
    {
      id: 'pas3',
      name: 'Fairy Berry Tart',
      description: 'A delightful tart filled with cream and topped with fresh, seasonal berries.',
      price: '$5.50',
      imageId: 'menu-pastry-3',
    },
  ],
  meals: [
    {
      id: 'mel1',
      name: 'Avocado Spell Toast',
      description: 'Smashed avocado on toasted sourdough with a sprinkle of magical herbs.',
      price: '$9.00',
      imageId: 'menu-meal-1',
    },
    {
      id: 'mel2',
      name: 'The Alchemist Panini',
      description: 'Grilled panini with mozzarella, tomato, and a secret pesto sauce.',
      price: '$12.50',
      imageId: 'menu-meal-2',
    },
    {
      id: 'mel3',
      name: 'Harvest Bowl',
      description: 'A hearty bowl of quinoa, roasted vegetables, and a lemon-tahini dressing.',
      price: '$11.00',
      imageId: 'menu-meal-3',
    },
  ],
};

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageId: string;
};

function MenuItemCard({ item }: { item: MenuItem }) {
  const image = PlaceHolderImages.find(p => p.id === item.imageId);
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      {image && (
        <div className="relative h-48 w-full">
            <Image
            src={image.imageUrl}
            alt={image.description}
            data-ai-hint={image.imageHint}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl">{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow"></CardContent>
      <CardFooter>
        <p className="text-lg font-semibold text-primary">{item.price}</p>
      </CardFooter>
    </Card>
  );
}

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline">Our Magical Menu</h1>
        <p className="mt-4 text-lg text-muted-foreground">Crafted with love, served with a smile.</p>
      </div>

      <Tabs defaultValue="beverages" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
          <TabsTrigger value="beverages" className="py-3 text-base">Beverages</TabsTrigger>
          <TabsTrigger value="pastries" className="py-3 text-base">Pastries</TabsTrigger>
          <TabsTrigger value="meals" className="py-3 text-base">Meals</TabsTrigger>
        </TabsList>
        <TabsContent value="beverages">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData.beverages.map(item => <MenuItemCard key={item.id} item={item} />)}
          </div>
        </TabsContent>
        <TabsContent value="pastries">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData.pastries.map(item => <MenuItemCard key={item.id} item={item} />)}
          </div>
        </TabsContent>
        <TabsContent value="meals">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData.meals.map(item => <MenuItemCard key={item.id} item={item} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
