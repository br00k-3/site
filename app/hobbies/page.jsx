"use client";
import Hobbies from "@/components/hobbies";
import localFont from "next/font/local";

const myFont = localFont({ src: "./BlitzMain.otf" });

export default function Page() {
  return (
    <div className={myFont.className}>
      <div className="absolute z-40 left-0 top-0 w-screen h-screen scrollbar">
        <div className="z-40 fixed block left-0 top-0 w-full h-screen opacity-50 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.5)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_3px,2px_100%]" />
        <div className="bg-black text-center min-h-screen w-full items-center">
          <div className="fixed block left-0 top-0 w-full h-screen z-50 pointer-events-none animate-flicker bg-[rgba(18,16,16,0.1)]" />
          <div className="z-40 bg-fuchsia-900/25 min-h-screen blur-xs">
          <Hobbies />
          </div>
        </div>
      </div>
    </div>
  );
}
