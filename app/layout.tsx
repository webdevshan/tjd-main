import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import ScrollToTop from "@/components/layout/ScrollToTop";

const kohinoor = localFont({
  src: [
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-Light-BF63c76513209af.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-LightItalic-BF63c7651347850.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-Book-BF63c76513e60f1.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-BookItalic-BF63c76513bc679.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-Medium-BF63c76513dba4c.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-MediumItalic-BF63c76513cfcb2.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-Demi-BF63c765144638d.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-DemiItalic-BF63c7651389346.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-Bold-BF63c76513f09da.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-BoldItalic-BF63c7651386cfd.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-Black-BF63c76510c679a.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/kohinoor-font-family-1765514422-0/KohinoorLatin-BlackItalic-BF63c76510c5583.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-kohinoor",
});

const lamoricRowen = localFont({
  src: "../public/Lamoric Rowen TTF.ttf",
  variable: "--font-lamoric-rowen",
});

export const metadata: Metadata = {
  title: "The Jewellery Department",
  description: "Premium Jewellery E-commerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kohinoor.variable} ${lamoricRowen.variable} antialiased`}
      >
        <Header />
        <CartDrawer />
        <main className="min-h-screen">
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
