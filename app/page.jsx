import { Hero } from "@/components/hero";
import { Services } from "@/components/home/services";
import { Certifications } from "@/components/home/certifications";
import { Dawskills } from "@/components/home/daw-skills";

export default function Home() {
  return (
    <div>
      <div className="hidden sm:block h-7" />
      <Hero />
      <div className="text-center flex h-16 w-full text-3xl font-semibold justify-center items-center">
        Services
      </div>
      <Services />
      <h3 className=" pt-4 text-center flex h-16 w-full text-3xl font-semibold justify-center items-center">
        Certifications
      </h3>
      <Certifications />
      <h3 className="text-center flex h-16 w-full text-2xl font-semibold justify-center items-center">
        Digital Audio Workstations
      </h3>
      <Dawskills />
    </div>
  );
}
