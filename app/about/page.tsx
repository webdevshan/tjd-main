import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="relative h-[60vh] w-full mb-20 bg-gray-100">
        <Image
          src="/webbanner_specs_8_4380a9a3-a46a-4c2d-a1e6-14b3d2d1aad2.webp"
          alt="About The Jewellery Department"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white drop-shadow-md">Our Story</h1>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-[#1e4538]">Crafting Modern Heirlooms</h2>
            <p className="font-sans text-gray-600 leading-relaxed">
              The Jewellery Department was founded on the belief that jewellery should be more than just an accessory—it should be a personal talisman, a marker of memory, and a piece of art that travels with you through life.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed">
              Inspired by ancient craft and modern design, we create pieces that bridge the gap between the past and the present. Each item is handcrafted with intention, using ethical materials and sustainable practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="relative aspect-square bg-gray-100">
              <Image src="/589279500_18355288042165106_5617443425839818251_n.jpg" alt="Craftsmanship" fill className="object-cover" />
            </div>
            <div className="relative aspect-square bg-gray-100">
              <Image src="/588323601_18354602074165106_8044273740802130035_n.jpg" alt="Detail" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-[#1e4538]">Ethical & Sustainable</h2>
            <p className="font-sans text-gray-600 leading-relaxed">
              We are committed to treading lightly on the earth. We use 100% recycled gold and silver, and our gemstones are ethically sourced from conflict-free zones. Our packaging is fully recyclable and plastic-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
