import { notFound } from "@/lib/not-found"
import Image from "next/image"

export function Errormessage() {

  var errorMessage = notFound[Math.floor(notFound.length * Math.random())];

  return (
    <div className="flex-col sm:flex-row flex space-y-2 sm:space-x-8 justify-center items-center mt-4 h-full w-full">
      <div className="text-center text-2xl font-semibold self-center">
        Womp Womp <br />
        <span className="text-red-600">404</span>: {errorMessage.title}
      </div>
      <div>
        <Image
          className="rounded-lg self-center h-64 justify-self-center"
          src={errorMessage.path}
          height={250}
          width={250}
          alt={errorMessage.title}
        />
      </div>
    </div>
  )
}