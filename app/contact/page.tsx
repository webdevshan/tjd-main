export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 flex justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <span className="text-sm tracking-[0.2em] uppercase text-gray-400 mb-2 block">Get in Touch</span>
            <h1 className="font-serif text-4xl text-[#1e4538] mb-6">Contact Us</h1>
            <p className="font-sans text-gray-600 leading-relaxed">
              We are here to help with any questions you may have about our jewellery, your order, or bespoke requests.
            </p>
          </div>

          <div className="space-y-4 font-sans text-gray-600">
            <div>
              <h3 className="font-medium text-[#1e4538] mb-1">Email</h3>
              <a href="mailto:hello@thejewellerydepartment.com" className="hover:text-[#1e4538] transition-colors">hello@thejewellerydepartment.com</a>
            </div>
            <div>
              <h3 className="font-medium text-[#1e4538] mb-1">Studio</h3>
              <p>123 Creative Avenue<br />Byron Bay, NSW 2481<br />Australia</p>
            </div>
            <div>
              <h3 className="font-medium text-[#1e4538] mb-1">Hours</h3>
              <p>Monday - Friday: 9am - 5pm AEST</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-sans text-gray-700 mb-2">Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#1e4538] bg-white rounded-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-sans text-gray-700 mb-2">Email</label>
              <input type="email" id="email" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#1e4538] bg-white rounded-none" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-sans text-gray-700 mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#1e4538] bg-white rounded-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#1e4538] text-white py-4 text-sm uppercase tracking-widest hover:bg-[#153228] transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
