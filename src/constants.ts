export interface Product {
  id: string;
  name: string;
  category: 'Original' | 'Sugar-Free' | 'Editions';
  price: number;
  image: string;
  color: string;
  description: string;
  benefits: string[];
  flavors?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'vortex-original',
    name: 'VORTEX Original',
    category: 'Original',
    price: 3.99,
    image: 'https://picsum.photos/seed/energy1/600/800',
    color: '#FF0000',
    description: 'The classic high-performance formula designed to give you wings when you need them most.',
    benefits: ['Intense Focus', 'Physical Performance', 'B-Group Vitamins'],
  },
  {
    id: 'vortex-zero',
    name: 'VORTEX Zero',
    category: 'Sugar-Free',
    price: 3.99,
    image: 'https://picsum.photos/seed/energy2/600/800',
    color: '#00D4FF',
    description: 'All the energy, zero sugar. Perfect for sustained performance without the crash.',
    benefits: ['Zero Calories', 'Mental Clarity', 'Electrolyte Balance'],
  },
  {
    id: 'vortex-tropical',
    name: 'Tropical Edition',
    category: 'Editions',
    price: 4.49,
    image: 'https://picsum.photos/seed/energy3/600/800',
    color: '#FFD700',
    description: 'A burst of tropical flavors combined with the legendary Vortex energy blend.',
    benefits: ['Exotic Taste', 'Quick Energy', 'Vitamin C Boost'],
    flavors: ['Mango', 'Pineapple', 'Passionfruit'],
  },
  {
    id: 'vortex-arctic',
    name: 'Arctic Edition',
    category: 'Editions',
    price: 4.49,
    image: 'https://picsum.photos/seed/energy4/600/800',
    color: '#E0FFFF',
    description: 'Cool, crisp, and revitalizing. The ultimate refreshment for extreme conditions.',
    benefits: ['Cooling Effect', 'Endurance Support', 'Rapid Hydration'],
    flavors: ['Blueberry', 'Mint', 'Icy Lime'],
  },
];

export const ATHLETES = [
  {
    name: 'Alex "Storm" Chen',
    sport: 'Downhill MTB',
    image: 'https://picsum.photos/seed/athlete1/600/800',
  },
  {
    name: 'Sarah Jenkins',
    sport: 'Freestyle Moto',
    image: 'https://picsum.photos/seed/athlete2/600/800',
  },
  {
    name: 'Marcus Vane',
    sport: 'Pro Gaming',
    image: 'https://picsum.photos/seed/athlete3/600/800',
  },
];

export const CONTENT_FEED = [
  {
    id: 1,
    title: 'Peak Performance: The Alps',
    category: 'Sports',
    thumbnail: 'https://picsum.photos/seed/sports1/800/450',
  },
  {
    id: 2,
    title: 'Neon Nights: Tokyo Drift',
    category: 'Auto',
    thumbnail: 'https://picsum.photos/seed/auto1/800/450',
  },
  {
    id: 3,
    title: 'Cyber Arena Finals',
    category: 'Gaming',
    thumbnail: 'https://picsum.photos/seed/gaming1/800/450',
  },
];
