'use client'
import { Button } from "@/components/ui/button"
import { useCallback } from "react"

export function AboutHero() {
  const scrollToHistory = useCallback(() => {
    const historySection = document.getElementById("history-section")
    if (historySection) {
      historySection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section className="relative w-full bg-red-600 text-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre SPAUJED</h1>
          <p className="text-xl mb-8">
            Somos el Sindicato de Personal Académico de la Universidad Juárez del Estado de Durango, comprometidos con
            la defensa de los derechos laborales y el bienestar de nuestros agremiados.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-red-600 hover:bg-red-100"
            onClick={scrollToHistory}
          >
            Conoce nuestra historia
          </Button>
        </div>
      </div>
    </section>
  )
}

