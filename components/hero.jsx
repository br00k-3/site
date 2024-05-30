"use client"
import Lottie from '@lottielab/lottie-player/react';
export function Hero() {
    return (
        <div className="flex-col text-center w-full">
            <div className="flex text-6xl h-16 font-bold text-center w-full space-x-4">
                <div className='flex justify-between items-center w-full space-x-2'>
                    <span>A sound tech</span>
                    <Lottie className="h-14" src="https://cdn.lottielab.com/l/AmAm8tW1DFV4sg.json" autoplay />
                <span>, with a passion</span>
                </div>
               
            </div>
            <div className="text-2xl text-zinc-400 font-semibold">
                Theatre tech based in Portland Oregon
            </div>
        </div>
    )
}