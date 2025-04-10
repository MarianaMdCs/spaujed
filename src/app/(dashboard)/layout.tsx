

import { ReactNode } from "react"

import "../globals.css"
import Navbar from "@/components/general/Navbar"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {




  return (
    <html>
        <body>

            <div className="min-h-screen bg-gray-100">

            <Navbar />
            
            <main className="container mx-auto py-6 sm:px-6 lg:px-8">
                {children}
            </main>
            </div>
        </body>
    </html>
  )
}