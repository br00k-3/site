import { studioskills } from "@/lib/studioskills";
import Image from "next/image";

export function Studioskills() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-2 lg:space-x-8">
      {studioskills.map((studioskillsItem) => (
        <div
          className="w-full lg:w-64 h-52 lg:h-64 relative light:rounded-lg dark:rounded-lg light:bg-zinc-200/70 dark:bg-zinc-900/70 retro:bg-fuchsia-950/70 p-4 group"
          key={studioskillsItem.title}
        >
          <Image
            src={studioskillsItem.image}
            width={1000}
            height={1000}
            className="w-full z-10 absolute scale-[.2] lg:scale-100 lg:group-hover:scale-[.3] translate-y-[-9rem] lg:translate-y-0 lg:group-hover:-translate-y-[5rem] p-[24px] -m-4  transition group-hover:duration-400 delay-[50ms]"
          />
          <div className="opacity-100 lg:opacity-0 group-hover:opacity-100 h-full pt-[5.5rem] lg:pt-[4.5rem] z-0 transition group-hover:duration-400 flex-col delay-100">
            <h4 className="text-xl font-bold text-center">
              {studioskillsItem.title}
            </h4>
            <p className="text-sm text-center">{studioskillsItem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}