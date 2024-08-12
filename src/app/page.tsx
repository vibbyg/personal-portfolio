"use client"
import { Holes } from "@/components/Holes";

export default function Home() {

  return (
    <main className="w-screen h-screen flex justify-center items-center justify-center self-center flex-col">
        <h1 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-stone-950 to-violet-900 opacity-75 fixed z-20 pointer-events-none">
          <span>{'hey, i\'m'}</span>
          <a href="https://www.linkedin.com/in/vibhor-gautam/" className="pointer-events-auto hover:bg-gradient-to-l hover:from-cyan-500 hover:to-red-500 hover:bg-clip-text" target="_blank"> vibhor :)</a>
          </h1>
        <Holes />
        <h3 className="fixed bottom-5 left-5 text-xs text-background-right">made with care by <a className="hover:text-[#BA7E7E] hover:cursor-pointer hover:scale-150" href="https://www.instagram.com/vibbyridge/" target="_blank">vibhor (─‿‿─)</a></h3>
    </main>
  );
}
