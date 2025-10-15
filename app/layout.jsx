import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
// components
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";

const sometypeMono = Sometype_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Karl Björfors | Portfolio",
  description:
    "Proffessional portfolio showcasing my work as a fullstack web developer and designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sometypeMono.variable} antialiased overflow-hidden relative`}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <Analytics />
          {/* header */}
          <div className="flex">
            {/* Main nav */}
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <div className="2xl:mt-0 mt-20">{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
