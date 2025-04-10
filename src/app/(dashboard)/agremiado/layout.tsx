import SidebarMembers from "@/components/general/SidebarMembers"
import { SidebarProvider } from "@/components/ui/sidebar"
import type React from "react"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  let user = null;
  if (session?.user?.id) {
    user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });
  }

  if (user?.role == "ADMIN") {
    redirect("/admin")
  }
  return (
    <SidebarProvider className="flex min-h-screen">
      <SidebarMembers />
      <div className="flex-1 flex flex-col">
        <main>{children}</main>
      </div>
    </SidebarProvider>
  )
}

