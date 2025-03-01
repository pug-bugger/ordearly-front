"use client";
import Image from "next/image";
import { Italic, Sun, Moon } from "lucide-react";

import { ModeToggle } from "@/components/ui/toggle-mode";
import { Button } from "@/components/ui/button";

import { Logo } from "@/app/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";

export default function Nav() {
  return (
    <header>
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />
          {/* <Image src="/logo.svg" alt="Logo" width={32} height={32} /> */}
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
          <div className="flex items-center gap-3">
            <ModeToggle />
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full"
            >
              Sign In
            </Button>
            {/* TODO: button to navigate to tutorial page and documentation <Button className="rounded-full">Get Started</Button> */}
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
