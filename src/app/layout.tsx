import type { Metadata } from "next";
import { Hammersmith_One } from "next/font/google";
import { Sarabun } from "next/font/google";
import "./globals.css";

const hammersmith = Hammersmith_One({ subsets: ['latin'], weight: ['400'] });
const sarabun = Sarabun({ subsets: ['latin'], weight: ['400'] });


export const metadata: Metadata = {
  title: "VibbySite",
  description: "Vibhor's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta content="width=device-width, initial-scale=1" />
      <body className={hammersmith.className}>{children}</body>
    </html>
  );
}
