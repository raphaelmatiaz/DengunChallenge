import type { Metadata } from "next";
import { Roboto, Rozha_One } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const rozhaOne = Rozha_One({
  variable: "--font-rozha-one",
  subsets: ["latin"],
  weight: ["400"]
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Stuff Boutique",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${rozhaOne.variable} antialiased`}
      >
          <Navbar></Navbar>
            {children}
          <Footer></Footer>
      </body>
    </html>
  );
}
