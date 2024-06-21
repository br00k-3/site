"use client";
import Hobbies from "@/components/hobbies";
import localFont from "next/font/local";

const myFont = localFont({ src: "./nintendoP_DotGothic12-M.otf" });

export default function Page() {
  return (
    <div className={myFont.className}>
      <div className="absolute z-40 left-0 top-0 w-screen h-screen scrollbar">
        <div className="z-40 fixed block left-0 top-0 w-full h-screen opacity-50 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.5)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />
        <div className="bg-[#140215] text-center min-h-screen w-full items-center">
          <div className="fixed block left-0 top-0 w-full h-screen backdrop-blur-xs z-30 pointer-events-none bg-fuchsia-600/10" />
          <Hobbies />
        </div>
      </div>
    </div>
  );
}
