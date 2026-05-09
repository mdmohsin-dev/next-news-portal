import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ThemeProvider from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Next News Portal",
  description: "Using Next.js Typescript ShadcnUi app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${inter.className} h-full antialiased`}
    >
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
