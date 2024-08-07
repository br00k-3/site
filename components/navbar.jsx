"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "./ui/theme-switcher";
import { MobileNav } from "@/components/mobile-nav";

export function Navbar() {

    return (
        <div className="w-full fixed left-0 top-0 z-40">
            <div className="hidden sm:block">
                <div className="h-4 light:bg-white dark:bg-black retro:bg-black"/>
            </div>
            <div className="mx-0 sm:mx-4 md:mx-16 xl:mx-48">
                <nav className="flex light:bg-zinc-200/70 dark:bg-zinc-900/70 retro:bg-fuchsia-950/70 h-16 w-full backdrop-blur-md items-center justify-between space-x-3 sm:light:rounded-full sm:dark:rounded-full px-4">
                    <div>
                        <Link
                            href="/"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <Image
                                className="border-2 border-fuchsia-600 light:rounded-full dark:rounded-full h-10 w-10"
                                src="/images/icon.png"
                                width="250"
                                height="250"
                                alt="Icon"
                                quality={100}
                            />
                            <span className="light:animate-none dark:animate-none retro:animate-crt bg-gradient-to-r from-fuchsia-600 to-cyan-500 inline-block text-transparent bg-clip-text text-nowrap text-center text-2xl font-bold">
                                Brooke Milberg
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
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
                            <ThemeSwitcher />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <MobileNav/>
                    </div>
                </nav>
            </div>
        </div>
    );
}