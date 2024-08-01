import { studioskills } from "@/lib/studioskills"
import Image from "next/image"

export function Studioskills() {
  return (
    <div className="grid relative w-full grid-flow-row grid-cols-1 gap-10 text-center md:gap-4 md:text-left lg:mb-0 md:grid-cols-2 2xl:grid-cols-3">
      {studioskills.map(studioskillsItem => (
        <div key={studioskillsItem.title} className="relative light:rounded-lg dark:rounded-lg light:bg-zinc-200/70 dark:bg-zinc-900/70 retro:bg-fuchsia-950/70">
          <div className=" flex-col h-auto md:h-72 lg:h-60 content-center px-4 py-4">
            <div className="flex items-center justify-center space-x-5">
              <h4 className="text-3xl font-semibold">
                {studioskillsItem.title}
              </h4>
              <div className="">
                <Image
                  className="h-16 w-auto"
                  src={studioskillsItem.image}
                  quality={100}
                  height={0}
                  width={250}
                  title={studioskillsItem.title}
                  alt={studioskillsItem.title}
                />
              </div>
            </div>
            <div className="h-4" />
            <p>{studioskillsItem.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}