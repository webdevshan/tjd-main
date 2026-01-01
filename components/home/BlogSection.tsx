"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Layering",
    excerpt: "Discover how to style your favorite pieces for a look that is uniquely yours.",
    image: "/588163740_18354158620165106_6486596342772559169_n.jpg", // Using one of the lifestyle images
    link: "/journal/layering",
    date: "October 12, 2025"
  },
  {
    id: 2,
    title: "Sourcing with Integrity",
    excerpt: "Our commitment to ethical mining and sustainable practicesexplained.",
    image: "/589279500_18355288042165106_5617443425839818251_n.jpg",
    link: "/journal/sourcing",
    date: "November 05, 2025"
  },
  {
    id: 3,
    title: "Care Guide: Gold Vermeil",
    excerpt: "Tips and tricks to keep your jewellery shining for years to come.",
    image: "/587645792_18354027226165106_3221772748822084166_n.jpg",
    link: "/journal/care",
    date: "December 01, 2025"
  }
];

export default function BlogSection() {
  return (
    <section className="container mx-auto px-6 py-24 border-t border-gray-100">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-sm font-sans tracking-widest uppercase text-gray-400 mb-2 block">Journal</span>
          <h2 className="font-serif text-3xl text-[#1e4538]">The Latest</h2>
        </div>
        <Link href="/journal" className="hidden md:flex items-center gap-2 text-[#1e4538] hover:opacity-70 transition-opacity font-serif italic">
          Read all stories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={post.link}
            className="group min-w-[300px] md:min-w-0 snap-center"
          >
            <div className="relative aspect-[4/3] bg-gray-100 mb-6 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-sans text-gray-400 uppercase tracking-wider">{post.date}</span>
              <h3 className="font-serif text-xl text-[#1e4538] group-hover:underline decoration-[#1e4538]/30 underline-offset-4">
                {post.title}
              </h3>
              <p className="font-sans text-gray-500 text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 md:hidden text-center">
        <Link href="/journal" className="inline-flex items-center gap-2 text-[#1e4538] hover:opacity-70 font-serif italic">
          Read all stories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
