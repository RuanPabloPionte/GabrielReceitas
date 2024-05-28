"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SwitchThemeButton() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          <span className="sr-only" tabIndex={5}>
            Mudar temas
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("Protanopia")}>
          Protanopia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("Deuteranopia")}>
          Deuteranopia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("Tritanopia")}>
          Tritanopia
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
