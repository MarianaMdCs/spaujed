import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full ">
      <div className="relative h-[500px] md:h-[600px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://www.spaujed.org/wp-content/uploads/2024/01/mAIN-scaled.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white pt-60">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sindicato de Personal Académico
              <span className="block mt-2">de la UJED</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full py-4 bg-red-600">
        <div className="container mx-auto px-4 flex items-center justify-center text-white">
          <p className="text-xl mr-4">¡Bienvenido! Descarga aquí nuestra gaceta oficial</p>
          <Button size="lg" className="bg-white p-5 text-red-800  hover:bg-accent cursor-pointer">
            Pasión Sindical
          </Button>
        </div>
      </div>
    </section>
  )
}