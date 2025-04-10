import SidebarAdmins from "@/components/general/SidebarAdmins"
import { SidebarProvider } from "@/components/ui/sidebar"
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import type React from "react"


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
      <SidebarAdmins />
      <div className="flex-1 flex flex-col">
        <main>{children}</main>
      </div>
    </SidebarProvider>
  )
}

