import { Card } from "@/components/ui/card"
import { Building2 } from "lucide-react"

interface TramiteISSSTEProceduresProps {
  title: string
  description: string
}

export function TramiteISSSTEProcedures({ title, description }: TramiteISSSTEProceduresProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Trámites ISSSTE</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Afiliaciones ISSSTE</h4>
          <p className="font-medium mb-2">¿A quién puedo afiliar?</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Esposo, esposa.</li>
            <li>Concubino, concubina.</li>
            <li>Hijos procreados y adoptados.</li>
            <li>Hijos solteros.</li>
            <li>Estudiantes de nivel medio superior mayor de 18 años.</li>
            <li>Ascendientes (padres, abuelos, bisabuelos).</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Requerimientos para dar de baja en el ISSSTE</h4>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Baja de esposa y/o esposo:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>Acta de divorcio original y copia.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Baja por defunción:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>Acta de defunción original y copia del beneficiario a dar de baja.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Baja de concubino, concubina:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>
                  Constancia de término de concubinato ante notario público o a falta de este, juez de lo familiar, juez
                  de paz, juez cívico, presidente municipal, agente municipal.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Otros trámites</h4>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Cambio de domicilio beneficiario ante el ISSSTE:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>Comprobante de domicilio.</li>
                <li>Carnet del beneficiario a realizar el cambio.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Alta en el ISSSTE de hija menor embarazada:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>Carta compromiso (se solicita en ventanilla).</li>
                <li>Fotografía reciente, tamaño infantil con fondo blanco o en su caso el carnet de la menor.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Reposición de carnet ISSSTE:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Fotografía tamaño infantil con fondo blanco (indispensable).</li>
                <li>Carnet anterior.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Afiliaciones específicas</h4>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Afiliación de hijos del cónyuge:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>Acta de matrimonio original.</li>
                <li>
                  Escrito manifestando que dicho familiar que pretende registrarse es dependiente económico y no tiene
                  por sí mismo derechos propios a los seguros, prestaciones y servicios previstos en la ley del ISSSTE o
                  a otro similar en materia de servicios de salud, otorgado por cualquier otro instituto de seguridad
                  social original.
                </li>
                <li>Acta de nacimiento original de hijo y/o hija.</li>
                <li>CURP de hijo y/o hija.</li>
                <li>Fotografía reciente, tamaño infantil con fondo blanco de hijo y/o hija.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Afiliación de esposa y/o esposo:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>Acta de nacimiento original del esposo o esposa.</li>
                <li>Acta de matrimonio original.</li>
                <li>CURP del esposo o esposa.</li>
                <li>Fotografía reciente tamaño infantil con fondo blanco de esposo o esposa (indispensable).</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Afiliación de concubina o concubino sin hijos:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>
                  Constancia de concubinato ante notario público, o en caso de no haber notario, juez de lo municipal,
                  agente municipal, o autoridad competente donde se especifique que tienen más de 5 años viviendo juntos
                  y son libres de matrimonio ambas partes.
                </li>
                <li>Acta de nacimiento original de concubina o concubino.</li>
                <li>CURP de concubina o concubino.</li>
                <li>Fotografía reciente tamaño infantil con fondo blanco de concubina o concubino (indispensable).</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Afiliación de concubina o concubino con hijos en común:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>Acta de nacimiento original de concubina o concubino.</li>
                <li>Acta de nacimiento original del hijo procreado en común.</li>
                <li>CURP del concubina o concubino.</li>
                <li>Fotografía tamaño infantil con fondo blanco de concubina o concubino (indispensable).</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Hijos mayores de 18 años sin afiliar:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>Acta de nacimiento original del hijo o hija.</li>
                <li>CURP del hijo o hija.</li>
                <li>Fotografía reciente tamaño infantil con fondo blanco del hijo o hija (indispensable).</li>
                <li>
                  Constancia de estudios (original, expedida por un plantel oficial donde se acredite el nivel de
                  estudios; medio o superior, nombre de la carrera, inicio y fin del ciclo escolar y periodo vacacional
                  con fechas, firma autógrafa y sello de la institución).
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Afiliación de hijo menor de 18 años:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>Acta de nacimiento de hijo o hija.</li>
                <li>CURP del hijo o hija.</li>
                <li>
                  Fotografía de hijo o hija tamaño infantil con fondo blanco (indispensable a partir de 1 año de edad).
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Afiliación ISSSTE del trabajador por primera vez:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Copia del INE del trabajador.</li>
                <li>Fotografía reciente tamaño infantil con fondo blanco (indispensable).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

