import SidebarAdmins from "@/components/general/SidebarAdmins"
import { SidebarProvider } from "@/components/ui/sidebar"
import type React from "react"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider className="flex min-h-screen">
      <SidebarAdmins />
      <div className="flex-1 flex flex-col">
        <main>{children}</main>
      </div>
    </SidebarProvider>
  )
}

