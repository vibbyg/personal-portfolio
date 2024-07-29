import type { Metadata } from "next";
import { Hammersmith_One } from "next/font/google";
import "./globals.css";

const hammersmith = Hammersmith_One({ subsets: ['latin'], weight: ['400'] });

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
      <body className={hammersmith.className}>{children}</body>
    </html>
  );
}
