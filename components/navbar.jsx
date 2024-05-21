"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "./ui/theme-switcher";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { SunMoon } from 'lucide-react';
import { useTheme } from "next-themes"

export function Navbar() {
    const { setTheme } = useTheme()
    return (
        <div className="w-full fixed left-0 top-0 z-40">
            <div className="hidden sm:block">
                <div className="h-4 bg-white dark:bg-zinc-900" />
            </div>
            <div className="mx-0 sm:mx-16 xl:mx-48">
            <nav className="mx-auto flex bg-zinc-100/70 dark:bg-zinc-800/70 h-16 w-full backdrop-blur-md items-center justify-between space-x-3 sm:rounded-full px-4">
                <div>
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <Image
                            className=" border border-red-600 rounded-full hover:animate-spin h-9 w-9"
                            src="/images/icon.png"
                            width="250"
                            height="250"
                            alt="Icon"
                            quality={100}
                        />
                        <span className="hover:text-red-600 transition duration-250 text-center text-2xl font-semibold">
                            Brooke Milberg
                        </span>
                    </Link>
                </div>
                <div className="hidden sm:block">
                    <div className="justify-right text-xl flex items-center font-semibold space-x-3">
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
                        <ThemeSwitcher />
                    </div>
                </div>
                <div className="sm:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="rounded-full dark:bg-zinc-900">
                                <ChevronRight className="h-6 w-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-auto">
                            <DropdownMenuItem>
                                <Link
                                    href="/resume"
                                    className="hover:text-red-600 transition duration-250"
                                >
                                    Resume
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    href="/showcase"
                                    className="hover:text-red-600 transition duration-250"
                                >
                                    Showcase
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <SunMoon className="h-6 w-6 mr-2" />
                                        <span>Switch Theme</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                                Light
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                                Dark
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                                System
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
            </div>
        </div>
    );
}