"use client";

import { useCartStore } from "@/store/useCartStore";
import { useSettingsStore } from "@/store/useSettingsStore";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, Check } from "lucide-react";

export default function CheckoutPage() {
  const { items, getCartTotal } = useCartStore();
  const { formatPrice } = useSettingsStore();
  const [step, setStep] = useState(1); // 1: Info, 2: Shipping, 3: Payment

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-3xl mb-4">Your bag is empty</h1>
        <Link href="/shop" className="text-[#1e4538] underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-0 md:px-6 py-0 md:py-12 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">
        {/* Left Column: Form Steps */}
        <div className="bg-white p-6 md:p-12 order-2 lg:order-1">
          <div className="flex items-center gap-2 text-xs md:text-sm font-sans text-gray-500 mb-8">
            <span className={step >= 1 ? "text-[#1e4538]" : ""}>Information</span>
            <ChevronRight className="w-4 h-4" />
            <span className={step >= 2 ? "text-[#1e4538]" : ""}>Shipping</span>
            <ChevronRight className="w-4 h-4" />
            <span className={step >= 3 ? "text-[#1e4538]" : ""}>Payment</span>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-2xl text-[#1e4538]">Contact Information</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 focus:border-[#1e4538] outline-none rounded-none"
            />

            <h2 className="font-serif text-2xl text-[#1e4538] pt-6">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300 px-4 py-3 focus:border-[#1e4538] outline-none rounded-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 px-4 py-3 focus:border-[#1e4538] outline-none rounded-none"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 px-4 py-3 focus:border-[#1e4538] outline-none rounded-none"
            />
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 px-4 py-3 focus:border-[#1e4538] outline-none rounded-none"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full border border-gray-300 px-4 py-3 focus:border-[#1e4538] outline-none rounded-none"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                className="w-full border border-gray-300 px-4 py-3 focus:border-[#1e4538] outline-none rounded-none"
              />
            </div>

            <div className="pt-6 flex justify-end">
              <button className="bg-[#1e4538] text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-[#153228] transition-colors">
                Continue to Shipping
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="bg-gray-50 p-6 md:p-12 order-1 lg:order-2 border-l border-gray-200">
          <div className="space-y-6 mb-8">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative w-16 h-20 bg-gray-200 border border-gray-300 rounded overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                  <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-serif text-[#1e4538]">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.material}</p>
                </div>
                <p className="font-sans text-sm">{formatPrice(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">{formatPrice(getCartTotal())}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Shipping</span>
              <span className="text-gray-400 text-xs">Calculated next step</span>
            </div>
            <div className="flex justify-between text-lg font-serif text-[#1e4538] pt-4 border-t border-gray-200">
              <span>Total</span>
              <span>{formatPrice(getCartTotal())}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
