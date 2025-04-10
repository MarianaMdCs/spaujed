import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MissionVision() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Defender los derechos laborales, mejorar las condiciones de trabajo y promover el desarrollo profesional
                de nuestros agremiados, contribuyendo así a la excelencia académica de la UJED.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ser un sindicato líder, reconocido por su integridad, transparencia y eficacia en la representación de
                los intereses del personal académico, fomentando la innovación y la calidad educativa.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

