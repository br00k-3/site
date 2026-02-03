import { certifications } from "@/lib/certifications";
import Image from "next/image";
import Link from "next/link";

export function Certifications() {
  return (
    <div className="grid relative w-full grid-flow-row gap-10 text-center md:gap-4 md:text-left lg:mb-0 grid-cols-2 md:grid-cols-3">
      {certifications.map((certificationItem) => (
        <div
          key={certificationItem.title}
          className="relative group light:rounded-lg dark:rounded-3xl text-white"
        >
          <div className="h-32 lg:h-64 w-full overflow-hidden light:rounded-3xl dark:rounded-3xl group-hover:md:scale-125 group-hover:z-20 light:bg-zinc-200 dark:bg-zinc-900 retro:bg-fuchsia-950/70 duration-300 relative place-content-center light:border-white dark:border-zinc-200/70 group-hover:border">
            <Link href={`${certificationItem.link}`}>
            <div className="w-full h-full absolute top-0 left-0 group-hover:bg-black/20 z-10"/>
              <Image
                src={certificationItem.image}
                alt={certificationItem.title}
                width={400}
                height={400}
                className=" w-full group-hover:blur-sm"
              />
            <div className="hidden group-hover:block absolute bottom-0 p-4 text-2xl font-semibold duration-300 z-20 h-auto w-full">
              {certificationItem.title}
            </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
