import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import HeroSlider from "@/components/home/HeroSlider";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-0">
      {/* Hero Section */}
      <HeroSlider />

      {/* Featured Collections / Shop by Category */}
      <section className="container mx-auto px-6">
        <h2 className="font-serif text-3xl text-center text-[#1e4538] mb-12">
          Shop by Category
        </h2>
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory">
          {[
            { name: "Necklaces", image: "/14_2706.webp" },
            { name: "Rings", image: "/587324689_18354701065165106_3272859980903965238_n.jpg" },
            { name: "Earrings", image: "/588323601_18354602074165106_8044273740802130035_n.jpg" }, // Full background style image
          ].map((cat) => (
            <Link
              key={cat.name}
              href="/shop"
              className="group relative h-[400px] md:h-[500px] min-w-[280px] md:min-w-0 overflow-hidden block snap-center"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="bg-white/90 backdrop-blur-sm px-6 py-3 font-serif text-[#1e4538] text-lg">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#1e4538] text-white py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[600px] w-full">
            <Image
              src="/588163740_18354158620165106_6486596342772559169_n.jpg"
              alt="Story"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-sm tracking-widest uppercase opacity-80">
              Our Story
            </span>
            <h2 className="font-serif text-4xl leading-tight">
              Crafted with Intention, <br /> Designed for the Soul
            </h2>
            <p className="font-sans text-gray-300 leading-relaxed text-lg">
              Drawing inspiration from ancient symbols and the natural world, our jewellery is more than just adornment. Each piece is hand-crafted using sustainable materials and ethical practices, carrying a story that connects the wearer to something greater.
            </p>
            <Link
              href="/about" // Updated link
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity mt-4 font-serif italic text-lg"
            >
              Read our philosophy <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl text-[#1e4538]">New Arrivals</h2>
          <Link href="/shop" className="text-[#1e4538] border-b border-[#1e4538] pb-1 hover:opacity-70">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />
    </div>
  );
}
