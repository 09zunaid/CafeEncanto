import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Coffee, Cake, Soup } from 'lucide-react';

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
      imageId: 'menu-tea-1',
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

type MenuCategoryProps = {
  title: string;
  items: MenuItem[];
  image: (typeof PlaceHolderImages)[0];
  icon: React.ElementType;
  reverse?: boolean;
};

function MenuCategory({ title, items, image, icon: Icon, reverse = false }: MenuCategoryProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center container mx-auto px-4`}>
        <div className={`relative h-80 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group ${reverse ? 'lg:order-last' : ''} animate-in fade-in-up duration-700`}>
          <Image
            src={image.imageUrl}
            alt={image.description}
            data-ai-hint={image.imageHint}
            fill
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="flex flex-col animate-in fade-in-down duration-700">
           <h2 className="text-4xl md:text-5xl font-headline text-primary mb-8 flex items-center gap-4">
            <Icon className="w-10 h-10 text-accent" />
            {title}
          </h2>
          <div className="space-y-8">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 items-baseline">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <p className="text-xl font-bold text-accent justify-self-end">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default function MenuPage() {
  const beverageImage = PlaceHolderImages.find(p => p.id === 'menu-coffee-1');
  const pastryImage = PlaceHolderImages.find(p => p.id === 'menu-pastry-1');
  const mealImage = PlaceHolderImages.find(p => p.id === 'menu-meal-2');

  return (
    <div className="pt-16 md:pt-24 pb-16 md:pb-24 bg-background">
      <div className="text-center mb-16 container mx-auto px-4 animate-in fade-in-down duration-500">
        <h1 className="text-5xl md:text-6xl font-headline text-primary">Our Magical Menu</h1>
        <p className="mt-4 text-xl text-muted-foreground">Crafted with love, served with a smile.</p>
      </div>
      
      <div className="space-y-8">
        {beverageImage && (
          <MenuCategory 
            title="Beverages"
            items={menuData.beverages}
            image={beverageImage}
            icon={Coffee}
          />
        )}
        
        {pastryImage && (
          <div className="bg-secondary/30">
            <MenuCategory 
              title="Pastries"
              items={menuData.pastries}
              image={pastryImage}
              icon={Cake}
              reverse
            />
          </div>
        )}

        {mealImage && (
           <MenuCategory 
            title="Meals"
            items={menuData.meals}
            image={mealImage}
            icon={Soup}
          />
        )}
      </div>
    </div>
  );
}