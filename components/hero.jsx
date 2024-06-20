"use client";
import Lottie from '@lottielab/lottie-player/react';
export function Hero() {
  return (
    <div className="flex-col text-center w-full">
      <div className="text-6xl font-bold text-center w-full">
        <span>A sound tech with a passion </span>
        <span className="inline-block">
          <Lottie className="h-14" src="https://cdn.lottielab.com/l/AmAm8tW1DFV4sg.json" autoplay />
        </span>
      </div>
      <div className="text-2xl text-zinc-400 font-semibold">
        Theatre Technician Based In Portland, Oregon
      </div>
    </div>
  );
}
