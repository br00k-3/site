import { Hero } from "@/components/hero";
import { Liveskills } from "@/components/liveskills";
import { Studioskills } from "@/components/studioskills";

export default function Home() {
  return (
    <div>
      <div className="hidden sm:block h-7"/>
      <Hero />
      <h3 className="text-center flex h-16 w-full text-2xl font-semibold justify-center items-center">
        Live Skills
      </h3>
      <Liveskills />
      <h3 className="text-center flex h-16 w-full text-2xl font-semibold justify-center items-center">
        Studio Skills
      </h3>
      <Studioskills />
    </div>
  );
}
