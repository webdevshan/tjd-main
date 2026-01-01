import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CollectionsPage() {
  const collections = [
    {
      id: "ancient-world",
      name: "The Ancient World",
      description: "Inspired by the mystery and grandeur of ancient civilizations. Bold forms meet intricate details.",
      image: "/webbanner_specs_12_0d1a7dac-e7cb-47f9-8891-c29c4179b28e.webp",
      link: "/shop?collection=ancient-world",
    },
    {
      id: "ceremonial",
      name: "Ceremonial",
      description: "A celebration of love and commitment. Handcrafted pieces designed to be cherished for a lifetime.",
      image: "/588323601_18354602074165106_8044273740802130035_n.jpg",
      link: "/shop?collection=ceremonial",
    },
    {
      id: "classics",
      name: "The Classics",
      description: "Timeless designs that never fade. Essential pieces for the modern wardrobe.",
      image: "/14_2706.webp",
      link: "/shop?collection=classics",
    },
    {
      id: "bespoke",
      name: "Bespoke",
      description: "One-of-a-kind treasures created just for you. Work with us to bring your vision to life.",
      image: "/590751154_18355361116165106_2362745907232114990_n.jpg",
      link: "/shop?collection=bespoke", // In real app likely a separate bespoke page
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-[#1e4538] text-center mb-4">Our Collections</h1>
        <p className="text-gray-500 font-sans text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Discover our curated series of handcrafted jewellery, each with its own story and inspiration.
        </p>

        <div className="space-y-24">
          {collections.map((collection, idx) => (
            <div key={collection.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                <span className="text-sm tracking-[0.2em] uppercase text-gray-400">Collection 0{idx + 1}</span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1e4538]">{collection.name}</h2>
                <p className="font-sans text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                  {collection.description}
                </p>
                <Link href={collection.link} className="inline-flex items-center gap-2 text-[#1e4538] border-b border-[#1e4538] pb-1 hover:opacity-70 transition-opacity uppercase text-sm tracking-widest mt-4">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
