import { Card } from "@/components/ui/card"
import { FileCheck } from "lucide-react"

interface TramiteExentoPagoProps {
  title: string
  description: string
}

export function TramiteExentoPago({ title, description }: TramiteExentoPagoProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <FileCheck className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Trámites de exentos de pago</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Documentación y datos requeridos:</h4>
          <ul className="space-y-6 text-gray-600">
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <span>Talón de pago actualizado del Académico.</span>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <span>Acta de nacimiento del alumno.</span>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <span>Credencial del alumno de la Facultad (Únicamente Facultad de Ciencias Forestales).</span>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <span>INE alumno.</span>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <div className="space-y-2">
                <span>Datos del alumno:</span>
                <div className="ml-4 space-y-1">
                  <p>- Facultad</p>
                  <p>- Matrícula</p>
                  <p>- Semestre</p>
                </div>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <div className="space-y-2">
                <span>Especificar tipo de trámite:</span>
                <div className="ml-4 space-y-1">
                  <p>- Exento inscripción</p>
                  <p>- Cuota interna</p>
                  <p>- o ambos</p>
                </div>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <span>Número de celular del Académico.</span>
            </li>
          </ul>
        </div>
        <div className="mt-8 p-4 bg-red-50 rounded-lg">
          <p className="text-gray-800 font-semibold">Enviar toda la documentación y datos al correo:</p>
          <a
            href="mailto:atencionspaujed@gmail.com"
            className="text-red-600 hover:text-red-700 font-bold text-lg break-all"
          >
            atencionspaujed@gmail.com
          </a>
        </div>
      </div>
    </Card>
  )
}

