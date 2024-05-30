"use client"
import Lottie from '@lottielab/lottie-player/react';
import Link from "next/link";
export function Hero() {
    return (
        <div className="flex-col text-center w-full">
            <div className="flex text-6xl font-bold text-center w-full space-x-2">
                <div className='flex justify-between items-center'>
                    A sound tech, with a passion
                </div>
                <div>
                    <Link href="/">
                    <Lottie className="h-14" src="https://cdn.lottielab.com/l/AmAm8tW1DFV4sg.json" autoplay />
                    </Link>
                </div>
               
            </div>
            <div className="text-2xl text-zinc-400 font-semibold">
                Theatre tech based in Portland Oregon
            </div>
        </div>
    )
}