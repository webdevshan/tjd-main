"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";
import { useSettingsStore } from "@/store/useSettingsStore";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCartStore();
  const { formatPrice } = useSettingsStore();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if clicking the button
    addToCart({ ...product, quantity: 1 });
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  }

  return (
    <Link href={`/product/${product.id}`} className="group block relative">
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 z-20 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
      >
        <Heart
          className={`w-5 h-5 transition-colors ${isFavorite ? "fill-[#1e4538] text-[#1e4538]" : "text-[#1e4538]"}`}
        />
      </button>
      <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
        {/* Main Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-opacity duration-500 ${product.hoverImage ? "group-hover:opacity-0" : "group-hover:scale-105"}`}
        />
        {/* Hover Image */}
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={`${product.name} Hover`}
            fill
            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-white/95 text-[#1e4538] py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 uppercase text-xs tracking-widest font-medium hover:bg-[#1e4538] hover:text-white z-10"
        >
          Quick Add
        </button>
      </div>
      <h3 className="font-serif text-[#1e4538] text-lg mb-1 group-hover:underline">
        {product.name}
      </h3>
      <p className="text-gray-500 font-sans text-sm">{formatPrice(product.price)}</p>
    </Link>
  );
}
