import { Hero } from "@/components/hero"
import { Liveskills } from "@/components/liveskills"
import { Studioskills } from "@/components/studioskills"

export default function Home() {
  return (
    <div className="xl:mx-56 md:mx-20 sm:mx-8 mx-4">
                  <Hero/>

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
