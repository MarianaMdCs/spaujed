import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

// Definición centralizada de los enlaces de navegación
export const navLinks = [
  { href: "/noticias", label: "Noticias" },
  { href: "/documentos", label: "Documentos" },
  { href: "/tramites", label: "Trámites" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full bg-white z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Ir a la página de inicio"
          >
            <Image
              src="/logo.png"
              alt="SPAUJED Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <NavLinks links={navLinks} />
            </nav>
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
