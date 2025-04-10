import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TramiteBecaProps {
  title: string
  description: string
}

export function TramiteBeca({ title, description }: TramiteBecaProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Solicitud para Beca &quot;Lic. Héctor García Calderón&quot;</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-800">Periodo para solicitar beca:</h4>
          <p className="text-gray-600">del 9 al 31 de enero de 2024</p>
          <p className="text-sm text-gray-500 mt-1">Correspondiente al semestre &quot;A&quot; 2024</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Proceso de solicitud:</h4>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium mb-2">
                El registro para aspirantes debe hacerse en línea en el siguiente formulario Google Forms:
              </p>
              <Button
                variant="default"
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-lg shadow-md transition-all duration-200 ease-in-out"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeKYHCoUS7ovUQnRwM3HDhMqyRiJcjLCJkAzUoB7vxs3wbMPw/closedform",
                    "_blank",
                  )
                }
              >
                Acceder al formulario de registro
              </Button>
            </div>
            <div>
              <p className="font-medium mb-2">Después de realizar su registro enviar papelería al correo:</p>
              <a href="mailto:atencionspaujed@gmail.com" className="text-red-600 hover:text-red-700 font-semibold">
                atencionspaujed@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Requisitos para aspirantes:</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <div>
                <span>RFC con homoclave, </span>
                <span className="text-gray-500">
                  en el caso de los menores de edad acudir con el padre o tutor para su expedición en el SAT
                </span>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <span>Comprobante de ingresos del trabajador universitario.</span>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <span>Acta de nacimiento del aspirante.</span>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <div>
                <span>INE </span>
                <span className="text-gray-500">
                  (en caso de ser menor de edad, la credencial vigente de la escuela/facultad).
                </span>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <div>
                <span>Boleta de calificaciones </span>
                <span className="text-gray-500">
                  del semestre anterior, con promedio de 9.0 para hijos de trabajadores y 8.5 para trabajadores.
                </span>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <span>Carga horaria del semestre &quot;B&quot; 2023.</span>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <span>
                Cursar su carga de unidades de aprendizaje completa de acuerdo a la malla curricular (nuevos aspirantes
                y renovaciones).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="select-none">•</span>
              <span>No tener unidades de aprendizaje reprobadas (nuevos aspirantes y renovaciones).</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#fef2f2] p-4 rounded-lg text-gray-700">
          <p className="font-medium">Nota importante sobre RENOVACIONES:</p>
          <p className="mt-2">
            Serán automáticas, no es necesario entregar la boleta, el promedio se verifica en ISESOD (Sistema de
            escolares), solo subir en este mismo link RFC con homoclave
          </p>
        </div>
        <div>
          <p className="font-medium">Informes:</p>
          <p className="text-red-600 font-bold text-lg">618 825 54 80</p>
        </div>
      </div>
    </Card>
  )
}

