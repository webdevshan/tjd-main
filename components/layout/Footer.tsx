import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl mb-6 text-[#1e4538]">
              The Jewellery Department
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
              Handcrafted with intention, our pieces are designed to become modern heirlooms.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#1e4538] hover:opacity-70">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#1e4538] hover:opacity-70">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#1e4538] hover:opacity-70">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {[
            {
              title: "Discover",
              links: ["Bespoke Service", "Bridal Edit", "Bespoke Gallery", "Journal"],
            },
            {
              title: "Customer Care",
              links: ["Contact Us", "Shipping & Returns", "Size Guide", "FAQ"],
            },
            {
              title: "About Us",
              links: ["Our Story", "Sustainability", "Stockists", "Careers"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-sans font-medium uppercase tracking-wider text-xs text-gray-900 mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-[#1e4538] text-sm font-sans transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-sans">
            © {new Date().getFullYear()} The Jewellery Department. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-600 font-sans">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-600 font-sans">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
