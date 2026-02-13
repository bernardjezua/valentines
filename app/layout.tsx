import React from "react";
import type { Metadata } from "next";
import { Open_Sans, Great_Vibes } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Our Valentine Memoa.",
  description: "Valentine Gift (3/4) for Myle",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${greatVibes.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
