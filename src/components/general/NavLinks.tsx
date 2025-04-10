import Link from "next/link";
import { Button } from "../ui/button";
import { auth, signOut } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";


interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  links: {
    href: string;
    label: string;
  }[];
}

export default async function NavLinks({
  links,
  linkClassName = "text-gray-600 hover:text-red-600",
}: NavLinksProps) {
  const session = await auth();

  let user = null;
  if (session?.user?.id) {
    user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });
  }

  return (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={linkClassName}>
          {link.label}
        </Link>
      ))}
      {session && user ? (
        <>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
              <Avatar className="h-12 w-12 border-3 border-red-600">
                <AvatarImage src={user.image || undefined} />
                <AvatarFallback>{user.name?.split(' ').map(w => w.charAt(0).toUpperCase())}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 mt-5">
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Panel</DropdownMenuItem>
              <DropdownMenuItem>Solicitudes</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <form
                  className="w-full"
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button type="submit" variant="destructive" className="w-full">
                    Cerrar sesión
                  </Button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Button asChild variant="destructive" className="text-base">
            <Link href="/login">Iniciar sesión</Link>
          </Button>
        </>
      )}
    </>
  );
}
