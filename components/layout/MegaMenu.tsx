"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface MegaMenuProps {
  activeCategory: string | null;
  onClose: () => void;
}

const menuData: Record<string, {
  categories: { title: string; links: string[] }[];
  images?: { src: string; alt: string; label: string }[];
}> = {
  "Shop": {
    categories: [
      {
        title: "Material",
        links: ["Solid Gold", "Gold Vermeil", "Sterling Silver"],
      },
      {
        title: "Gemstone",
        links: ["Diamond", "Pearl", "Ruby", "Sapphire", "Emerald", "All Gemstones"],
      },
      {
        title: "Collections",
        links: ["New Arrivals", "Back In Stock", "Ready to Ship", "One of a Kind", "Temple Heritage", "Kinesis", "Asteria"],
      },
    ],
    images: [
      {
        src: "/588163740_18354158620165106_6486596342772559169_n.jpg",
        alt: "New Season",
        label: "New Season",
      },
    ],
  },
  "Collections": {
    categories: [
      {
        title: "Necklaces",
        links: ["Coin", "Chain", "Charms", "Choker", "Beaded", "Pendant"],
      },
      {
        title: "Earrings",
        links: ["Cartilage", "Charms", "Dangle", "Hoop", "Huggies", "Studs"],
      },
      {
        title: "Rings",
        links: ["Signet", "Delicate", "Engagement", "Toi et Moi", "Pinky Rings", "Wedding Bands", "One of a Kind Stones"],
      },
      {
        title: "Bracelets",
        links: ["Chain", "Charms", "Cuffs & Bangles", "Tennis"],
      },
      {
        title: "Featured",
        links: ["New Arrivals", "Best Sellers", "SS25 Charms", "SS25 Fine", "Kinesis", "Mythos", "Temple Heritage"],
      },
    ],
  },
  "Cerimonial": {
    categories: [
      {
        title: "Discover",
        links: ["Bespoke Service", "Bridal Edit", "Bespoke Gallery"],
      },
      {
        title: "Category",
        links: ["Engagement Rings", "Wedding Bands", "Promise Rings", "Toi et Moi Rings", "Shop All Ceremonial"],
      },
    ],
    images: [
      {
        src: "/588323601_18354602074165106_8044273740802130035_n.jpg",
        alt: "Ceremonial",
        label: "Ceremonial",
      }
    ]
  },
  "Bespoke": {
    categories: [
      {
        title: "Discover",
        links: ["Bespoke Service", "Book a Consultation", "Bespoke Gallery"],
      },
    ],
    images: [
      {
        src: "/591169620_18355613269165106_2721458323413544457_n.jpg",
        alt: "Bespoke",
        label: "Bespoke",
      }
    ]
  },
  "Explore": {
    categories: [
      {
        title: "About",
        links: ["Our Story", "Our Promise", "Our Jewellery", "Our Stores", "Gold Studio Byron Bay", "Ceremonial Jewellery"],
      },
      {
        title: "Journal",
        links: ["The Latest", "Campaigns", "Guides", "Care Instructions", "Layering Guides", "Diamond Guide", "Birthstones", "Find Your Ring Size"],
      },
      {
        title: "Support",
        links: ["Frequently Asked Questions", "Services", "Sun Lovers Rewards", "Virtual Shopping Appointments", "Replating", "Bespoke"],
      },
    ],
    images: [
      {
        src: "/webbanner_specs_8_4380a9a3-a46a-4c2d-a1e6-14b3d2d1aad2.webp",
        alt: "Our Story",
        label: "Our Story",
      }
    ]
  },
};

export default function MegaMenu({ activeCategory, onClose }: MegaMenuProps) {
  if (!activeCategory || !menuData[activeCategory]) return null;

  const data = menuData[activeCategory];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-16 z-40"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-6">
        <div className={`grid gap-12 ${data.images ? "grid-cols-12" : "grid-cols-5"}`}>
          {/* Links Section */}
          <div className={`${data.images ? "col-span-12 lg:col-span-8 grid-cols-3" : "col-span-12 grid-cols-2 md:grid-cols-5"} grid gap-8 ${data.images ? "border-r border-gray-100 pr-8" : ""}`}>
            {data.categories.map((group) => (
              <div key={group.title}>
                <h4 className="font-serif text-[#1e4538] text-lg mb-6 tracking-wide">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="/shop"
                        onClick={onClose}
                        className="text-gray-500 hover:text-[#1e4538] font-sans text-[13px] tracking-wide uppercase transition-colors block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Images Section */}
          {data.images && (
            <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-8 pl-4">
              {data.images.map((img) => (
                <div key={img.label} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  </div>
                  <p className="text-center font-serif text-xl text-[#1e4538] group-hover:opacity-80 transition-opacity">
                    {img.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
