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
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "Cerimonial", href: "/shop?category=ceremonial" },
  { name: "Bespoke", href: "/contact" },
  // { name: "Explore", href: "/about" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || activeMegaMenu ? "bg-white shadow-sm py-4" : "bg-white/90 backdrop-blur-md py-6"
          }`}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="container mx-auto px-6 grid grid-cols-3 items-center relative z-50">
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-start">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Menu className="w-6 h-6 text-[#1e4538]" />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 justify-start h-full">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onMouseEnter={() => {
                  if (["Shop", "Collections", "Cerimonial", "Bespoke", "Explore"].includes(link.name)) {
                    setActiveMegaMenu(link.name);
                  } else {
                    setActiveMegaMenu(null);
                  }
                }}
                className="h-full flex items-center"
              >
                <Link
                  href={link.href}
                  className={`text-sm uppercase tracking-widest hover:opacity-70 font-medium font-sans py-2 ${activeMegaMenu === link.name ? "text-[#1e4538] border-b-2 border-[#1e4538]" : "text-[#1e4538]"
                    }`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/" className="relative block h-12 w-48 md:h-24 md:w-80">
              {/* Desktop Logo */}
              <Image
                src="/TheJewellery_Department_Logo_Final.webp"
                alt="The Jewellery Department"
                fill
                className="object-contain hidden md:block"
                priority
              />
              {/* Mobile Logo */}
              <Image
                src="/mobile_logo.webp"
                alt="The Jewellery Department"
                fill
                className="object-contain md:hidden"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-6 justify-end">
            {/* Settings Dropdowns */}
            <div className="hidden md:flex items-center gap-4 text-xs font-sans text-[#1e4538]">

              <div className="relative group cursor-pointer">
                <span className="flex items-center gap-1 uppercase hover:opacity-70">
                  {useSettingsStore((state) => state.currency)} <ChevronDown className="w-3 h-3" />
                </span>
                <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="bg-white shadow-md border border-gray-100 py-2 w-24">
                    {(['AUD', 'USD', 'EUR', 'GBP'] as Currency[]).map((curr) => (
                      <button
                        key={curr}
                        onClick={() => useSettingsStore.getState().setCurrency(curr)}
                        className="block w-full text-left px-4 py-1 hover:bg-gray-50 uppercase"
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button className="hidden sm:block p-1 hover:opacity-70">
              <span className="sr-only">Search</span>
              <Search className="w-5 h-5 text-[#1e4538]" />
            </button>
            <Link href="/login" className="hidden sm:block p-1 hover:opacity-70">
              <span className="sr-only">Login</span>
              <span className="text-sm font-sans uppercase text-[#1e4538] mr-1 hidden md:inline">
                Login
              </span>
            </Link>
            <button
              onClick={useCartStore((state) => state.toggleCart)}
              className="flex items-center gap-1 p-1 hover:opacity-70 relative"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#1e4538]" />
                {useCartStore((state) => state.items.length > 0) && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-white" />
                )}
              </div>
              <span className="text-sm font-sans text-[#1e4538] hidden md:inline">
                Bag ({useCartStore((state) => state.items.reduce((acc, item) => acc + item.quantity, 0))})
              </span>
            </button>
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
                <span className="font-serif text-xl font-bold text-[#1e4538]">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6 text-[#1e4538]" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif text-[#1e4538]"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t pt-6 mt-4 flex flex-col gap-4">
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-[#1e4538]"
                  >
                    <User className="w-5 h-5" /> Login
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-24 lg:h-32" />
    </>
  );
}
