import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const historyEvents = [
  {
    year: 1975,
    title: "Fundación del SPAUJED",
    description: "Se establece el Sindicato de Personal Académico de la Universidad Juárez del Estado de Durango.",
  },
  {
    year: 1980,
    title: "Primera Negociación Colectiva",
    description:
      "Se logra el primer contrato colectivo de trabajo, mejorando las condiciones laborales de los agremiados.",
  },
  {
    year: 1995,
    title: "Ampliación de Beneficios",
    description: "Se incorporan nuevos beneficios como seguro de vida y fondo de ahorro para los miembros.",
  },
  {
    year: 2010,
    title: "Modernización Tecnológica",
    description: "Se implementan sistemas digitales para mejorar la comunicación y los servicios a los agremiados.",
  },
]

export function History() {
  return (
    <section id="history-section" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestra Historia</h2>
        <div className="space-y-8">
          {historyEvents.map((event, index) => (
            <Card key={event.year} className={index % 2 === 0 ? "bg-white" : "bg-red-50"}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-3xl font-bold text-red-600 mr-4">{event.year}</span>
                  <span className="text-xl">{event.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

