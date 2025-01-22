import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jack's Kitchen",
  description: "Delicious recipes and more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`font-sans antialiased min-h-screen flex flex-col bg-gray-100 ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className="flex-1 bg-white">{children}</main>
      </body>
    </html>
  );
}
