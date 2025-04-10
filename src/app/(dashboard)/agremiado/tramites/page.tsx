import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, Clock } from "lucide-react"

const tramites = [
  {
    id: 1,
    title: "Solicitud de Permiso",
    description: "Solicita permisos laborales o académicos",
    icon: FileText,
    status: "Disponible",
  },
  {
    id: 2,
    title: "Actualización de Datos",
    description: "Actualiza tu información personal y laboral",
    icon: Download,
    status: "Disponible",
  },
  {
    id: 3,
    title: "Solicitud de Constancia",
    description: "Solicita constancias laborales o de antigüedad",
    icon: Clock,
    status: "En mantenimiento",
  },
  // Puedes agregar más trámites aquí
]

export default function TramitesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Trámites</h2>
        <Button>Nuevo Trámite</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tramites.map((tramite) => (
          <Card key={tramite.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{tramite.title}</CardTitle>
              <tramite.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription>{tramite.description}</CardDescription>
              <div className="mt-4">
                <Button
                  variant={tramite.status === "Disponible" ? "default" : "secondary"}
                  disabled={tramite.status !== "Disponible"}
                >
                  {tramite.status === "Disponible" ? "Iniciar Trámite" : tramite.status}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

