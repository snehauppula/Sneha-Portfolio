import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { BrandLogo } from "@/components/ui/brand-logo";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { NeuralNavigator } from "@/components/ui/neural-navigator";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sneha | Data Science || Machine Learning Engineer",
  description: "Cinematic portfolio of Sneha, a Data Scientist and AI Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${inter.variable} ${mono.variable} antialiased font-inter`}
      >
        <LoadingScreen />
        <BrandLogo />
        <NeuralNavigator />
        <div className="noise" />
        <CustomCursor />
        <SmoothScroll>
          <main className="relative min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
