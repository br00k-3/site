import Link from "next/link";
import Image from "next/image";
export function RetroNav() {
  return (
    <div className="w-full sticky left-0 top-0 z-40">
      <nav className="mx-auto flex bg-fuchsia-900/70 h-16 w-full backdrop-blur-2xl items-center justify-between space-x-3 px-4">
      <div>
                        <Link
                            href="/"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <Image
                                className="border-2 border-fuchsia-600 h-9 w-9"
                                src="/images/icon.png"
                                width="250"
                                height="250"
                                alt="Icon"
                                quality={100}
                            />
                            <span className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 inline-block text-transparent bg-clip-text text-nowrap text-center text-2xl font-semibold">
                                Brooke Milberg
                            </span>
                        </Link>
                    </div>
                    <div className="hidden sm:block">
                        <div className="justify-right text-xl flex items-center font-semibold text-nowrap space-x-3">
                            <Link
                                href="/resume"
                                className="hover:text-fuchsia-600 transition duration-250"
                            >
                                Resume
                            </Link>
                            <Link
                                href="/showcase"
                                className="hover:text-fuchsia-600 transition duration-250"
                            >
                                Showcase
                            </Link>
                            <Link
                                href="/listening-stats"
                                className="hover:text-fuchsia-600 transition duration-250"
                            >
                                Music Stats
                            </Link>
                            <Link
                                href="/hobbies"
                                className="hover:text-fuchsia-600 transition duration-250"
                            >
                                Hobbies
                            </Link>
                        </div>
                    </div>
      </nav>
    </div>
  );
}
