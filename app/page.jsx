import { Liveskills } from "@/components/liveskills"
import { Studioskills } from "@/components/studioskills"

export default function Home() {
  return (
    <div className="xl:mx-56 mx-4 mb-4">
        <div className="flex-col items-center my-2 sm:space-x-2 justify-center text-center">
          <p className="text-5xl font-bold space-x-2">
            <span>Just your typical</span>
            <span className=" bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 inline-block text-transparent bg-clip-text text-5xl font-bold">
              Transfem
            </span>
          </p>
          <div className="text-4xl font-semibold text-zinc-400">
            Technical Theater and Sound Nerd
          </div>
        </div>
        <div className="text-center flex h-16 w-full text-2xl font-semibold justify-center items-center">
          Live Skills
        </div>
        <Liveskills/>
        <div className="text-center flex h-16 w-full text-2xl font-semibold justify-center items-center">
          Studio Skills
        </div>
        <Studioskills/>
    </div>
  );
}
