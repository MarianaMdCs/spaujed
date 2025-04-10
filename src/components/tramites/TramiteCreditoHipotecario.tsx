import { Card } from "@/components/ui/card"
import { Home } from "lucide-react"

interface TramiteCreditoHipotecarioProps {
  title: string
  description: string
}

export function TramiteCreditoHipotecario({ title, description }: TramiteCreditoHipotecarioProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Home className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-8">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Trámite para Crédito Hipotecario</h2>
          <p className="text-lg">{description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Requisitos para compra de casa o terreno</h3>
            <div className="space-y-4">
              <section>
                <h4 className="text-lg font-semibold mb-2">Vendedor</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Identificación oficial vigente.</li>
                  <li>Acta de nacimiento.</li>
                  <li>CURP.</li>
                  <li>RFC.</li>
                  <li>Comprobante de domicilio.</li>
                  <li>Acta de matrimonio en caso de estar casado y todos los requisitos anteriores del cónyuge.</li>
                  <li>Referencia bancaria con nombre, número de cuenta y clabe interbancaria.</li>
                </ul>
              </section>
              <section>
                <h4 className="text-lg font-semibold mb-2">Comprador</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Identificación oficial vigente.</li>
                  <li>Acta de nacimiento.</li>
                  <li>CURP.</li>
                  <li>RFC.</li>
                  <li>Comprobante de domicilio.</li>
                  <li>Acta de matrimonio en caso de estar casado y todos los requisitos anteriores del cónyuge.</li>
                  <li>Últimos 2 talones de pago.</li>
                  <li>Llenar formato 1.</li>
                </ul>
              </section>  
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Documentos Generales</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Contrato simple de compra-venta.</li>
              <li>Escritura o título de propiedad.</li>
              <li>Recibo de pago del impuesto predial del año actual.</li>
              <li>
                Certificado de libertad de gravamen con fecha de expedición por el registro público de la propiedad no
                mayor a 2 meses.
              </li>
              <li>Avalúo pericial o ficha técnica del inmueble que despliegue el valor catastral.</li>
              <li>En caso de participar en sociedad mercantil, copia de cédula fiscal de la sociedad.</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
}

