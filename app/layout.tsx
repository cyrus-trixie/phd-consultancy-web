import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Added 300 for that "Light" high-end feel
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"], // Important for those beautiful italicized headers
});

export const metadata: Metadata = {
  title: "Cost of Chaos | Support for Women | Lynne, PhD Candidate",
  description: "Discover Support for women with Lynne, PhD Candidate in Clinical Psychology. Helping women in Kenya and worldwide overcome stress, anxiety, and burnout.",
  keywords: ["Support for women", "psychologist Kenya", "online counselling", "women's mental health"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased bg-chaos-bg text-chaos-teal font-sans`}
        suppressHydrationWarning
      >
        <Navbar />
        {/* Main wrapper ensures content pushes footer to bottom on short pages */}
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}