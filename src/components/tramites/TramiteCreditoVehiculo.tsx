import { Card } from "@/components/ui/card"
import { Car } from "lucide-react"


interface TramiteCreditoVehiculoProps {
  title: string
  description: string
  contenido: {
    introduccion: string
    montoMaximo: "$650,000",
    requisitosNuevo: string[]
    requisitosUsado: string[]
    requisitosSolicitante: string[]
    requisitosAval: string[]
    condiciones: string[]
    notasImportantes: string[]
    
  }
}

export function TramiteCreditoVehiculo({ title, description, contenido }: TramiteCreditoVehiculoProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Car className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-8">
        <div className="prose max-w-none">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h3 className="text-3xl font-bold text-gray-800">Requisitos para trámite de automovil SPAUJED</h3>
            <div className="bg-gradient-to-r from-red-500 to-red-600 py-0.5 px-3 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out">
              <p className="text-xs text-white font-semibold leading-none">Monto máximo</p>
              <p className="text-xl font-bold text-white leading-tight">{contenido.montoMaximo}</p>
            </div>
           
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
                </ul>
          <p className="text-lg">{description}</p>
          <p>{contenido.introduccion}</p>
        </div>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-4">Para auto nuevo o compra en lote:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Cotizacion</li>
                  <li>Cuentas y clubes interbancarias</li>
                  {contenido.requisitosNuevo.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4">Para auto usado: VALOR DEL LIBRO AZUL</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Copia de factura</li>
                  <li>Datos bancarios del vendedor</li>
                  <li>Factura original</li>
              {contenido.requisitosUsado.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4">Solicitante ACADÉMICO con base:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>2 copias del último talón de pago.</li>
                  <li>2 copias de identificación oficial vigente con fotografía.</li>
                  <li>2 copias de comprobante de domicilio.</li>
              {contenido.requisitosSolicitante.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4">Aval ACADÉMICO con base:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>2 copias del último talón de pago.</li>
                  <li>2 copias de identificación oficial vigente con fotografía.</li>
              {contenido.requisitosAval.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4">Condiciones del crédito:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Identificación oficial vigente.</li>
                  <li>Acta de nacimiento.</li>
                  <li>CURP.</li>
                  <li>RFC.</li>
                  <li>Comprobante de domicilio.</li>
                  <li>Acta de matrimonio en caso de estar casado y todos los requisitos anteriores del cónyuge.</li>
                  <li>Últimos 2 talones de pago.</li>
                  <li>Llenar formato 1.</li>
              {contenido.condiciones.map((condicion, index) => (
                <li key={index}>{condicion}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4">NOTA IMPORTANTE:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Identificación oficial vigente.</li>
                  <li>Lista de espera aprox. 10 a 15 dias hábiles</li>
                  <li>El préstamos está sujeto a autorización</li>
                  <li>Se autorizan a académicos con titularidad de sus clases</li>
              {contenido.notasImportantes.map((nota, index) => (
                <li key={index}>{nota}</li>
              ))}
            </ul>
          </section>
          <section>
          <h3 className="text-xl font-semibold mb-4">*ADICIONAL AL DESCUENTO QUINCENAL SE DESCONTARA UN SEGURO DE DEUDOR</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600"></ul>
          </section>
          <section>
          </section>
        </div>
      </div>
    </Card>
  )
}

