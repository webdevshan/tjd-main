"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/webbanner_specs_12_0d1a7dac-e7cb-47f9-8891-c29c4179b28e.webp",
    title: "The Ancient World",
    subtitle: "New Collection",
    link: "/shop",
    cta: "Explore Collection",
  },
  {
    id: 2,
    image: "/Website-Banner-Kinesis-3.webp",
    title: "Timeless Elegance",
    subtitle: "Signature Styles",
    link: "/shop",
    cta: "Shop Now",
  },
  {
    id: 3,
    image: "/webbanner_specs_8_4380a9a3-a46a-4c2d-a1e6-14b3d2d1aad2.webp",
    title: "Modern heirlooms",
    subtitle: "Handcrafted",
    link: "/shop",
    cta: "Discover",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full bg-[#f4f4f4] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white z-10">
        <AnimatePresence mode="wait">
          <div key={currentSlide} className="flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm tracking-[0.2em] uppercase mb-4 drop-shadow-md"
            >
              {slides[currentSlide].subtitle}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl mb-8 drop-shadow-lg"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link
                href={slides[currentSlide].link}
                className="border border-white hover:bg-white hover:text-[#1e4538] text-white px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300"
              >
                {slides[currentSlide].cta}
              </Link>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
