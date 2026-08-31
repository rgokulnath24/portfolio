import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Gokulnath — Software Developer",
  description:
    "Software developer designing and building modern digital experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
