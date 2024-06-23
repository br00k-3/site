"use client";

import {useState, useEffect} from "react";
import { MoonIcon, SunIcon, SunMoonIcon, VideotapeIcon } from "lucide-react";
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
  
  const [icon, setIcon] = useState(<div/>)
useEffect(() => {
   if (theme == "dark") {setIcon(<MoonIcon />)}
  else if (theme == "light") {setIcon(<SunIcon />)}
  else if (theme == "system") {setIcon(<SunMoonIcon />)}
  else if (theme == "retro") {setIcon( <VideotapeIcon />)}
}, [theme]);
 

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="light:rounded-full dark:rounded-full retro:rounded-none light:bg-white dark:bg-black retro:bg-black retro:hover:bg-fuchsia-950/70 light:border-none dark:border-none retro:border-cyan-500"
        >
          {icon}
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
          <p className="bg-gradient-to-r from-fuchsia-600 to-cyan-500 inline-block text-transparent bg-clip-text">
            Retro
          </p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
