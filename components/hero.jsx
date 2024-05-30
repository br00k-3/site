"use client"
import Lottie from '@lottielab/lottie-player/react';
import Link from "next/link";
export function Hero() {
    return (
        <div className="flex-col text-center w-full">
            <div className="text-6xl font-bold text-center w-full">
                <span>A sound tech, with a passion </span>
                <span className='inline-block'><Link href="/">
                    <Lottie className="h-14" src="https://cdn.lottielab.com/l/AmAm8tW1DFV4sg.json" autoplay />
                    </Link></span>      
            </div>
            <div className="text-2xl text-zinc-400 font-semibold">
                Theatre technician based in Portland Oregon
            </div>
        </div>
    )
}