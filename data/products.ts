export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  material: string;
  gemstone?: string;
  image: string;
  hoverImage?: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Emerald Estate Ring",
    price: 320,
    category: "Rings",
    material: "18k Gold",
    gemstone: "Emerald",
    image: "/p1.webp",
    hoverImage: "/p1_back.webp",
    description: "A stunning emerald solitaire set in 18k gold, representing eternal hope and renewal. Perfect for making a statement.",
  },
  {
    id: "2",
    name: "Classic Gold Chain",
    price: 189,
    category: "Necklaces",
    material: "Gold Vermeil",
    image: "/p2.webp",
    hoverImage: "/p2_back.webp",
    description: "A timeless classic, this gold vermeil chain is perfect for layering or wearing alone for a subtle shine.",
  },
  {
    id: "3",
    name: "Pearl Drop Earrings",
    price: 210,
    category: "Earrings",
    material: "Sterling Silver",
    gemstone: "Pearl",
    image: "/p3.webp",
    hoverImage: "/p3_back.webp",
    description: "Elegant pearl drop earrings that catch the light with every movement. A modern take on a classic design.",
  },
  {
    id: "4",
    name: "Sculpted Dome Ring",
    price: 165,
    category: "Rings",
    material: "Solid Gold",
    image: "/p4.webp",
    hoverImage: "/p4_back.webp",
    description: "A bold statement piece, the Dome Ring features smooth curves and a high-polish finish for maximum impact.",
  },
  {
    id: "5",
    name: "Ancient Coin Pendant",
    price: 199,
    category: "Necklaces",
    material: "Solid Gold",
    image: "/589279500_18355288042165106_5617443425839818251_n.jpg", // Kept original as p5 is missing
    hoverImage: "/589771523_18354349432165106_8674060304620920181_n.jpg",
    description: "Inspired by ancient artifacts, this coin pendant brings a touch of history and mystery to your collection.",
  },
  {
    id: "6",
    name: "Diamond Eternity Band",
    price: 250,
    category: "Rings",
    material: "Gold Vermeil",
    gemstone: "Diamond",
    image: "/p6.webp",
    hoverImage: "/p6_back.webp",
    description: "A delicate band encrusted with diamonds, perfect for marking special moments or stacking with other favorites.",
  },
  {
    id: "7",
    name: "Celestial Sapphire Ring",
    price: 280,
    category: "Rings",
    material: "18k Gold",
    gemstone: "Sapphire",
    image: "/p7.webp",
    hoverImage: "/p7_back.webp",
    description: "A deep blue sapphire set in a celestial-inspired band, evoking the beauty of the night sky.",
  },
  {
    id: "8",
    name: "Heirloom Bangle",
    price: 155,
    category: "Bracelets",
    material: "Gold Vermeil",
    image: "/26_6da61bb8-27c3-4163-aabf-653a9f2f5cb1.webp",
    hoverImage: "/PB-stl-tt-d.webp",
    description: "A simple yet elegant bangle that wraps the wrist in warmth. Designed to be a daily essential.",
  },
];
