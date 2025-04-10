import React from 'react'
import { Paperclip, Home, Users, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"

const items = [
    {
      title: "Pagina Principal",
      url: "#",
      icon: Home,
    },
    //No recomendado para miembros, solo para administradores
    // {
    //   title: "Documentos",
    //   url: "#",
    //   icon: Paperclip,
    // },
    {
      title: "Solicitudes",
      url: "#",
      icon: Users, 
    },
    //No recomendado para miembros, solo para administradores
    // {
    //   title: "Usuarios",
    //   url: "#",
    //   icon: Users,
    // },
    {
      title: "Configuración",
      url: "#",
      icon: Settings,
    },
  ]

export default function SidebarMembers() {
  return (
    <Sidebar className='mt-16 h-full'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Agremiado</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
