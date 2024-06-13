"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "./ui/theme-switcher";
import { MobileNav } from "@/components/mobile-nav";

export function Navbar() {

    return (
        <div className="w-full sticky left-0 top-0 z-40">
            <div className="hidden sm:block">
                <div className="h-4 bg-white dark:bg-black" />
            </div>
            <div className="mx-0 sm:mx-4 md:mx-16 xl:mx-48">
                <nav className="mx-auto flex bg-zinc-200/70 dark:bg-zinc-900/70 h-16 w-full backdrop-blur-md items-center justify-between space-x-3 sm:rounded-full px-4">
                    <div>
                        <Link
                            href="/"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <Image
                                className="border-2 border-red-600 rounded-full hover:animate-spin h-9 w-9"
                                src="/images/icon.png"
                                width="250"
                                height="250"
                                alt="Icon"
                                quality={100}
                            />
                            <span className="bg-gradient-to-r from-red-600 to-blue-600 inline-block text-transparent bg-clip-text text-nowrap text-center text-2xl font-semibold">
                                Brooke Milberg
                            </span>
                        </Link>
                    </div>
                    <div className="hidden sm:block">
                        <div className="justify-right text-xl flex items-center font-semibold text-nowrap space-x-3">
                            <Link
                                href="/resume"
                                className="hover:text-red-600 transition duration-250"
                            >
                                Resume
                            </Link>
                            <Link
                                href="/showcase"
                                className="hover:text-red-600 transition duration-250"
                            >
                                Showcase
                            </Link>
                            <Link
                                href="/listening-stats"
                                className="hover:text-red-600 transition duration-250"
                            >
                                Music Stats
                            </Link>
                            <ThemeSwitcher />
                        </div>
                    </div>
                    <div className="sm:hidden">
                        <MobileNav/>
                    </div>
                </nav>
            </div>
        </div>
    );
}