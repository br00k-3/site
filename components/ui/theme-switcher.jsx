"use client";

import * as React from "react";
import { Moon, Sun, SunMoonIcon, VideotapeIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="light:rounded-full dark:rounded-full retro:rounded-none light:bg-white dark:bg-black retro:bg-zinc-900 light:border-none dark:border-none retro:border-cyan-500"
        >
          {theme == "dark" && <Moon />}
          {theme == "light" && <Sun />}
          {theme == "system" && <SunMoonIcon />}
          {theme == "retro" && <VideotapeIcon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end w-auto"
        className="light:bg-white dark:bg-black retro:bg-fuchsia-950 light:rounded-lg dark:rounded-lg retro:rounded-none light:border-zinc-200 dark:border-zinc-700 retro:border-none light:text-black dark:text-white retro:text-green-500 z-[41]"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("retro")}>
          <span className="bg-gradient-to-r from-fuchsia-600 to-cyan-500 inline-block text-transparent bg-clip-text">
            Retro
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
