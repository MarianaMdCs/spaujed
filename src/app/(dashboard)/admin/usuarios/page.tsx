import { Card } from "@/components/ui/card"
import CreateUserForm from "@/components/auth/CreateUserForm"

export default function UsuariosPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Gestión de Usuarios</h1>
      </div>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Crear Nuevo Usuario</h2>
            <CreateUserForm />
          </div>
        </Card>
      </div>
    </div>
  )
}