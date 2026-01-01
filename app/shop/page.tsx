"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { SlidersHorizontal } from "lucide-react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const materials = Array.from(new Set(products.map((p) => p.material)));

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (selectedMaterial && product.material !== selectedMaterial) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-6 py-10 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="font-serif text-4xl text-[#1e4538]">All Jewellery</h1>
        <div className="flex items-center gap-2 mt-4 md:mt-0 text-gray-500 font-sans text-sm">
          <SlidersHorizontal className="w-4 h-4" /> Filter
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block space-y-8">
          <div>
            <h3 className="font-serif text-lg mb-4 text-[#1e4538]">Category</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`text-sm font-sans ${!selectedCategory ? "text-[#1e4538] font-medium" : "text-gray-500 hover:text-[#1e4538]"}`}
                >
                  All Categories
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                    className={`text-sm font-sans ${selectedCategory === cat ? "text-[#1e4538] font-medium" : "text-gray-500 hover:text-[#1e4538]"}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4 text-[#1e4538]">Material</h3>
            <ul className="space-y-2">
              {materials.map((mat) => (
                <li key={mat}>
                  <button
                    onClick={() => setSelectedMaterial(mat === selectedMaterial ? null : mat)}
                    className={`text-sm font-sans ${selectedMaterial === mat ? "text-[#1e4538] font-medium" : "text-gray-500 hover:text-[#1e4538]"}`}
                  >
                    {mat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="col-span-1 lg:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-400 font-serif">
              No products found matching your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
