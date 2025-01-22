import "./globals.css";
import type { Metadata } from "next";
import { Press_Start_2P, Anonymous_Pro } from "next/font/google";

// const inter = Inter({subsets: ['latin']})

const psfont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ps",
});

const apfont = Anonymous_Pro({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ap",
});

export const metadata: Metadata = {
  title: "AIPTOS",
  description: "Aptos Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <div className={`${psfont.className}`}> */}
      <body className={`${apfont.className}`}>{children}</body>
    </html>
  );
}
