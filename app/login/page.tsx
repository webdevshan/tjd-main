import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-6 py-20 md:py-32 flex justify-center">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[#1e4538] mb-2">Welcome Back</h1>
          <p className="text-gray-500 font-sans text-sm">
            Sign in to access your saved items and orders.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-sans text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#1e4538] transition-colors bg-white font-sans text-base text-[#1e4538]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-sans text-gray-700">
                Password
              </label>
              <Link href="#" className="text-xs text-gray-500 hover:text-[#1e4538]">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#1e4538] transition-colors bg-white font-sans text-base text-[#1e4538]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1e4538] text-white py-4 text-sm uppercase tracking-widest hover:bg-[#153228] transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm font-sans text-gray-500">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#1e4538] font-medium hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
