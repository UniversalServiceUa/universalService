import type { Metadata } from "next";
import { Jura } from "next/font/google";
import OcrFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";

const juraFont = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

// const ocrABtFont = OcrFont({
//   src: "../assets/fonts/OCR-A-BT.ttf",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Universal Service",
  description:
    "Ремонт ноутбуків, ремонт комп'ютерів, ремонт телефонів, ремонт планшетів, ремонт телевізорів, ремонт кавомашин",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${juraFont.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
