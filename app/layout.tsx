import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google"; // Swapped Geist for Poppins
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Adding weights for different UI needs
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cost of Chaos | Psychology of Becoming",
  description: "Professional psychological consultancy by Lynne - PhD Candidate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased bg-chaos-bg text-chaos-dark font-sans`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}