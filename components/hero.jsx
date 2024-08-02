"use client";
import Lottie from '@lottielab/lottie-player/react';
export function Hero() {
  return (
    <div className="flex-col text-center w-full light:not-italic dark:not-italic retro:italic">
      <h1 className="text-6xl font-bold text-center w-full">
        <span>A sound tech with a passion </span>
        <span className="inline-block">
          <Lottie className="light:block dark:block retro:hidden h-14" src="https://cdn.lottielab.com/l/AmAm8tW1DFV4sg.json" autoplay />
          <Lottie className="light:hidden dark:hidden retro:block h-14" src="https://cdn.lottielab.com/l/7dXZ4zDhj9uLS2.json" autoplay />
        </span>
      </h1>
      <h2 className="text-2xl light:text-zinc-400 dark:text-zinc-400 retro:text-green-500 font-semibold">
        Theatre Technician Based In Portland, Oregon
      </h2>
    </div>
  );
}
