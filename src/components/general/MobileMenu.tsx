"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  links: {
    href: string;
    label: string;
  }[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
        <SheetTitle>Menu</SheetTitle>
        <nav className="flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="destructive" className="w-full">
              Iniciar sesión
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}