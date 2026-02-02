import { services } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";

export function Services() {
  return (
    <div className="grid relative w-full grid-flow-row gap-10 text-center md:gap-4 md:text-left lg:mb-0 grid-cols-1 lg:grid-cols-2">
      {services.map((serviceItem) => (
        <div
          key={serviceItem.title}
          className="relative group light:rounded-lg dark:rounded-3xl"
        >
          <div className="h-64 w-auto overflow-hidden light:rounded-3xl dark:rounded-3xl group-hover:scale-125 group-hover:z-20 group-hover:border bg-zinc-900 border-zinc-200/70 duration-300 relative">
            <Image
              src={serviceItem.image}
              alt={serviceItem.title}
              width={400}
              height={400}
              className="opacity-60 flex blur-md group-hover:blur-sm duration-300 group-hover:opacity-100 w-full translate-y-[-15%]"
            />
            <div className="absolute top-0 left-0 w-full h-full p-4 justify-start align-top ">
              <h3 className="text-2xl font-semibold mb-2">
                {serviceItem.title}
              </h3>
              <p className="text-sm dark:text-zinc-200/70 justify-start align-top">
                {serviceItem.description}
              </p>
              <div className="absolute text-zinc-200/70 hover:text-zinc-200/40 justify-end align-bottom text-right bottom-0 right-0 p-4">
                <Link href="#">Read more</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
