"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/useCartStore";
import { useSettingsStore } from "@/store/useSettingsStore";

export default function CartDrawer() {
  const { isOpen, toggleCart, items, removeFromCart, updateQuantity, getCartTotal } = useCartStore();
  const { formatPrice } = useSettingsStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-[60] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="font-serif text-2xl text-[#1e4538]">Shopping Bag</h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-[#1e4538]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <p className="font-serif text-xl text-gray-400">Your bag is empty</p>
                  <button
                    onClick={toggleCart}
                    className="text-[#1e4538] border-b border-[#1e4538] pb-1 hover:opacity-70 font-sans text-sm"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="relative w-24 h-32 bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif text-[#1e4538] text-lg">{item.name}</h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-500 font-sans mt-1">
                            {item.material} {item.variant && `- ${item.variant}`}
                          </p>
                        </div>
                        <div className="flex justify-between items-end">
                          <div className="flex items-center border border-gray-200">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="p-1 hover:bg-gray-50 bg-white"
                            >
                              <Minus className="w-4 h-4 text-gray-500" />
                            </button>
                            <span className="w-8 text-center text-sm font-sans">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-50 bg-white"
                            >
                              <Plus className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                          <p className="font-sans text-[#1e4538]">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-serif text-lg text-[#1e4538]">Subtotal</span>
                  <span className="font-sans text-lg font-medium text-[#1e4538]">
                    {formatPrice(getCartTotal())}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-6 text-center">
                  Shipping and taxes calculated at checkout.
                </p>
                <Link
                  href="/checkout"
                  onClick={toggleCart}
                  className="block w-full bg-[#1e4538] text-white py-4 text-center text-sm uppercase tracking-widest hover:bg-[#153228] transition-colors"
                >
                  Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
