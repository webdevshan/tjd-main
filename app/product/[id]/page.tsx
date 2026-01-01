"use client";

import Image from "next/image";
import { useState, use } from "react";
import { products } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";
import { useSettingsStore } from "@/store/useSettingsStore";
import { Minus, Plus, Share2, Heart } from "lucide-react";
import Link from "next/link";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCartStore();
  const { formatPrice } = useSettingsStore();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-40 text-center">
        <h1 className="font-serif text-3xl mb-4">Product not found</h1>
        <Link href="/shop" className="text-[#1e4538] underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    // Ideally user feedback here (toast)
  };

  // Mock images for gallery (using the main image multiple times for demo)
  const images = [product.image, product.image, product.image];

  return (
    <div className="container mx-auto px-6 py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
            <Image
              src={images[activeImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative aspect-square bg-gray-50 overflow-hidden border-2 ${activeImage === idx ? "border-[#1e4538]" : "border-transparent"
                  }`}
              >
                <Image src={img} alt={`${product.name} thumbnail ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-sans text-gray-500 tracking-widest uppercase">
              {product.category}
            </span>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-[#1e4538]">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-red-500">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-[#1e4538] mb-4">
            {product.name}
          </h1>
          <p className="font-sans text-xl text-[#1e4538] mb-8 font-medium">
            {formatPrice(product.price * quantity)}
          </p>

          <p className="font-sans text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="space-y-6 border-t border-gray-100 pt-8 mb-8">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="block text-gray-400 mb-1">Material</span>
                <span className="block text-[#1e4538]">{product.material}</span>
              </div>
              {product.gemstone && (
                <div>
                  <span className="block text-gray-400 mb-1">Gemstone</span>
                  <span className="block text-[#1e4538]">{product.gemstone}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="flex items-center border border-gray-200">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-gray-50"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-sans">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#1e4538] text-white py-3 text-sm uppercase tracking-widest hover:bg-[#153228] transition-colors"
            >
              Add to Bag
            </button>
          </div>

          <div className="text-xs text-gray-500 space-y-2 font-sans">
            <p>Free shipping on orders over {formatPrice(500)}</p>
            <p>Handcrafted to order - Allow 2-3 weeks for delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
