"use client"
import { Holes } from "@/components/Holes";

export default function Home() {

  return (
    <main className="w-screen h-screen flex justify-center items-center relative">
        <h1 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-stone-950 to-violet-900 opacity-75 fixed z-20 pointer-events-none">
          <span>{'hey, i\'m'}</span>
          <a href="https://www.linkedin.com/in/vibhor-gautam/" className="pointer-events-auto" target="_blank"> vibhor :)</a>
          </h1>
        <Holes />
    </main>
  );
}
