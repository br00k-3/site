import { certifications } from "@/lib/certifications";
import Image from "next/image";
import Link from "next/link";

export function Certifications() {
  return (
    <div className="grid relative w-full grid-flow-row gap-10 text-center md:gap-4 md:text-left lg:mb-0 grid-cols-2 md:grid-cols-3">
      {certifications.map((certificationItem) => (
        <div
          key={certificationItem.title}
          className="relative group light:rounded-lg dark:rounded-3xl"
        >
          <div className="sm:h-36 lg:h-64 w-full overflow-hidden light:rounded-3xl dark:rounded-3xl group-hover:scale-125 group-hover:z-20 bg-zinc-900 duration-300 relative place-content-center border-zinc-200/70 group-hover:border">
            <Link href={`${certificationItem.link}`}>
              <Image
                src={certificationItem.image}
                alt={certificationItem.title}
                width={400}
                height={400}
                className=" w-full group-hover:blur-sm"
              />
            <div className="hidden group-hover:block absolute bottom-0 p-4 text-2xl font-semibold duration-300">
              {certificationItem.title}
            </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
