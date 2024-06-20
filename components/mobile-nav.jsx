import Link from "next/link";
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
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MenuIcon, MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
export function MobileNav() {
  const { setTheme, theme } = useTheme();
  function toggleTheme() {
    if (theme == "dark") {
      setTheme("light");
    }
    if (theme == "light") {
      setTheme("system");
    }
    if (theme == "system") {
      setTheme("dark");
    }
  }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-lg dark:bg-black"
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto">
          <DropdownMenuItem>
            <Link
              href="/resume"
              className="hover:text-fuchsia-600 transition duration-250"
            >
              Resume
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/showcase"
              className="hover:text-fuchsia-600 transition duration-250"
            >
              Showcase
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/listening-stats"
              className="hover:text-fuchsia-600 transition duration-250"
            >
              Music Stats
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => toggleTheme()}>
            {theme === "dark" ? (
              <>
                <MoonIcon className="mr-3" />
                Dark
              </>
            ) : (
              <>
                {theme === "light" ? (
                  <>
                    <SunIcon className="mr-3" />
                    Light
                  </>
                ) : (
                  <>
                    <SunMoonIcon className="mr-3" />
                    System
                  </>
                )}
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
