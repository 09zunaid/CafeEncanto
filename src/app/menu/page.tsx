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
    {
      id: 'bev4',
      name: 'Caramel Cloud Macchiato',
      description: 'A dreamy blend of vanilla, steamed milk, espresso, and caramel drizzle.',
      price: '$5.50',
      imageId: 'menu-coffee-4',
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
    {
      id: 'pas4',
      name: 'Almondine Dream',
      description: 'A delicate almond pastry with a sweet, nutty filling.',
      price: '$4.50',
      imageId: 'menu-pastry-4',
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
    {
      id: 'mel4',
      name: 'Sorcerer\'s Soup',
      description: 'A creamy tomato soup served with a side of grilled cheese croutons.',
      price: '$8.50',
      imageId: 'menu-meal-4',
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

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  const image = PlaceHolderImages.find(p => p.id === item.imageId);
  return (
    <div className="animate-in fade-in-up duration-500" style={{ animationDelay: `${index * 100}ms` }}>
      <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        {image && (
          <div className="relative h-56 w-full">
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
          <CardTitle className="font-headline text-2xl text-primary">{item.name}</CardTitle>
          <CardDescription className="text-base">{item.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow"></CardContent>
        <CardFooter>
          <p className="text-xl font-bold text-accent">{item.price}</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16 animate-in fade-in-down duration-500">
        <h1 className="text-5xl md:text-6xl font-headline text-primary">Our Magical Menu</h1>
        <p className="mt-4 text-xl text-muted-foreground">Crafted with love, served with a smile.</p>
      </div>

      <Tabs defaultValue="beverages" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-10 h-auto bg-primary/10">
          <TabsTrigger value="beverages" className="py-4 text-lg">Beverages</TabsTrigger>
          <TabsTrigger value="pastries" className="py-4 text-lg">Pastries</TabsTrigger>
          <TabsTrigger value="meals" className="py-4 text-lg">Meals</TabsTrigger>
        </TabsList>
        <TabsContent value="beverages">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuData.beverages.map((item, index) => <MenuItemCard key={item.id} item={item} index={index} />)}
          </div>
        </TabsContent>
        <TabsContent value="pastries">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuData.pastries.map((item, index) => <MenuItemCard key={item.id} item={item} index={index} />)}
          </div>
        </TabsContent>
        <TabsContent value="meals">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuData.meals.map((item, index) => <MenuItemCard key={item.id} item={item} index={index} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
