import { Card } from "@/components/ui/card"
import { Wallet } from "lucide-react"

interface TramiteCreditoPersonalProps {
  title: string
  description: string
}

export function TramiteCreditoPersonal({ title, description }: TramiteCreditoPersonalProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Wallet className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-8">
        <div className="prose max-w-none">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Préstamos de Caja de Ahorro</h2>
            <div className="bg-gradient-to-r from-red-500 to-red-600 py-0.5 px-3 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out">
              <p className="text-xs text-white font-semibold leading-none">Monto máximo</p>
              <p className="text-xl font-bold text-white leading-tight">$100,000</p>
            </div>
          </div>
          <p className="text-lg">{description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Detalles del Préstamo</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Periodo: De diciembre de 2023 a febrero de 2024</li>
              <li>Interés para ahorradores: 3%</li>
              <li>Interés para no ahorradores: 4%</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Requisitos</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Aval</li>
              <li>Llenado y firma de pagaré</li>
              <li>Último talón de cheque</li>
              <li>Capacidad de pago</li>
              <li>Identificación oficial</li>
            </ul>
          </div>
          <section>
          </section>
        </div>
      </div>
    </Card>
  )
}

