"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/useCartStore";
import { useSettingsStore, type Currency } from "@/store/useSettingsStore";
import MegaMenu from "./MegaMenu";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "KESHER", href: "/shop?category=kesher" },
  { name: "MY PEACH", href: "/shop?category=my-peach" },
  { name: "THE BASICS", href: "/shop?category=the-basics" },
  { name: "COLLECTIONS", href: "/collections" },
  { name: "KEEP IT CLEAN", href: "/shop?category=keep-it-clean" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const { getCartTotal } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white ${isScrolled || activeMegaMenu ? "shadow-sm" : ""}`}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        {/* Top Bar */}
        <div className="border-b border-[#1e4538] bg-white">
          <div className="container mx-auto px-6 py-2">
            <p className="text-center text-sm text-gray-700 font-sans">
              Free Shipping on orders over $140
            </p>
          </div>
        </div>

        {/* Main Header Section */}
        <div className="container mx-auto px-6 py-4">
          <div className="grid grid-cols-3 items-center gap-4">
            {/* Left: Search */}
            <div className="flex justify-start">
              <div className="relative w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-[#1e4538] font-sans text-sm"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center">
              <Link href="/" className="relative block h-12 w-48 md:h-16 md:w-64">
                <Image
                  src="/TheJewellery_Department_Logo_Final.webp"
                  alt="The Jewellery Department"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Right: Account and Cart */}
            <div className="flex items-center gap-6 justify-end">
              <Link href="/login" className="flex items-center gap-1 hover:opacity-70">
                <User className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-sans uppercase text-gray-700 hidden md:inline">
                  ACCOUNT
                </span>
              </Link>
              <button
                onClick={useCartStore((state) => state.toggleCart)}
                className="flex items-center gap-1 hover:opacity-70 relative"
              >
                <ShoppingBag className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-sans uppercase text-gray-700 hidden md:inline">
                  CART
                </span>
                {useCartStore((state) => state.items.length > 0) && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-gray-200">
          <div className="container mx-auto px-6">
            <nav className="hidden lg:flex items-center justify-center gap-8 py-3">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  onMouseEnter={() => {
                    if (link.name === "COLLECTIONS") {
                      setActiveMegaMenu("Collections");
                    } else {
                      setActiveMegaMenu(null);
                    }
                  }}
                  className="h-full flex items-center"
                >
                  <Link
                    href={link.href}
                    className={`text-sm uppercase tracking-wider hover:opacity-70 font-sans text-gray-700 py-2 flex items-center gap-1 ${
                      activeMegaMenu === "Collections" && link.name === "COLLECTIONS"
                        ? "text-[#1e4538] border-b-2 border-[#1e4538]"
                        : ""
                    }`}
                  >
                    {link.name}
                    {link.name === "COLLECTIONS" && (
                      <ChevronDown className="w-3 h-3" />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex justify-center py-3">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMegaMenu && (
            <MegaMenu
              activeCategory={activeMegaMenu}
              onClose={() => setActiveMegaMenu(null)}
            />
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white z-50 lg:hidden shadow-xl p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-serif text-xl font-bold text-gray-700">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-sans text-gray-700 uppercase"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t pt-6 mt-4 flex flex-col gap-4">
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-gray-700 uppercase font-sans"
                  >
                    <User className="w-5 h-5" /> ACCOUNT
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-32 lg:h-40" />
    </>
  );
}
