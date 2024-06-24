"use client";
import { useEffect, useState, useRef } from "react"
import { notFound } from "@/lib/not-found"
import Image from "next/image"
import Link from "next/link"
import { Game } from "@/components/game"
export function Errormessage() {

  const gameRef = useRef(null)
  function openGame() {
    gameRef.current.style.display = "block"
  }
const [errorMessage, setErrorMessage] = useState();


  useEffect(() => {
    setErrorMessage(notFound[Math.floor(notFound.length * Math.random())]);
  }, []);

  return (
    <div className="h-full w-full">
      {errorMessage ? (
        <div className="flex-col sm:flex-row flex space-y-2 sm:space-x-8 justify-center items-center h-full w-full">
        <div className="text-center text-2xl font-semibold self-center">
          Womp Womp <br />
          <span className="text-fuchsia-600">404</span>: {errorMessage.title} <br /> 
          <span className="text-sm space-x-2"><Link href="/" className="hover:text-fuchsia-600 underline">Go Home</Link><span className="hover:text-fuchsia-600 underline" onClick={openGame}>Play a Game<div ref={gameRef} className="hidden"><Game /></div></span></span>
        </div>
        <div>
          <Image
            className="rounded-lg self-center h-72 w-72 justify-self-center"
            src={errorMessage.path}
            height={250}
            width={250}
            alt={errorMessage.title}
          />
        </div>
      </div>
      ) : (<div>loading...</div>)}
    </div>
  )
}