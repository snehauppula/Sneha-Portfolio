import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { BrandLogo } from "@/components/ui/brand-logo";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { NeuralNavigator } from "@/components/ui/neural-navigator";
import { HeroBackground } from "@/components/hero/hero-background-loader";

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
  title: "Sneha Uppula | B.Tech AI & ML · Data Science & Machine Learning",
  description:
    "Portfolio of Sneha Uppula — B.Tech CSE (AI & ML) at SNIST, Hyderabad. Data analysis, ML, NLP, Power BI, AWS, and automation.",
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
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <LoadingScreen />
        <BrandLogo />
        <NeuralNavigator />
        <HeroBackground />
        <div className="noise" />
        <CustomCursor />
        <SmoothScroll>
          <main id="main-content" className="relative min-h-screen" tabIndex={-1}>
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
