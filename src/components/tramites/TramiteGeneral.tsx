import { Card } from "@/components/ui/card"
import { Eye } from "lucide-react"
import type React from "react"

interface TramiteGeneralProps {
  title: string
  description: string
  icon: React.ElementType
  requisitos: string[]
  proceso: string[]
}

export function TramiteGeneral({ title, description, requisitos }: TramiteGeneralProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Eye className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-8">{description}</p>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Exentos de pago</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Talón de pago actualizado del Académico.</li>
                  <li>Acta de nacimiento del alumno.</li>
                  <li>Credencial del alumno de la Facultad (únicamente Facultad de Ciencias Forestales).</li>
                  <li>INE del alumno.</li>
                  <li><span>Datos del alumno:</span>
                        <ul className="list-disc list-inside pl-5">
                          <li>Facultad</li>
                          <li>Matrícula</li>
                          <li>Semestre</li>
                        </ul>
                      </li>
                  <li><span>Especificar tipo de trámite:</span>
                        <ul className="list-disc list-inside pl-5">
                          <li>Exento inscripción</li>
                          <li>Cuota interna</li>
                          <li>o ambos</li>
                        </ul>
                  </li>
                  <li>Número de celular del Académico.</li>
              {requisitos.map((requisito, index) => (
                <li key={index}>{requisito}</li>
              ))}
            </ul>
          </div>
          <div>
            <section>
          </section>
          </div>
        </div>
      </div>
    </Card>
  )
}

