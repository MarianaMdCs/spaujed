"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { SignUpAction } from "@/app/(auth)/actions"

// Definimos el esquema de validación con Zod
const createUserSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }),
  matricula: z.string().min(1, { message: "La matrícula es requerida" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
})

// Inferimos el tipo TypeScript del esquema
type CreateUserFormValues = z.infer<typeof createUserSchema>

export default function CreateUserForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserSchema),
  })

  const onSubmit = async (data: CreateUserFormValues) => {
    setIsLoading(true)
    setError("")
    setSuccess("")
    
    const formData = new FormData()
    formData.append("enrollment", data.matricula)
    formData.append("email", data.email)
    formData.append("password", data.password)
    formData.append("name", data.name)

    try {
      const result = await SignUpAction(formData)
      if (!result.success) {
        setError(result.error || "Ocurrió un error al crear el usuario")
      } else {
        setSuccess("Usuario creado exitosamente")
        reset() // Limpiar el formulario después de un registro exitoso
      }
    } catch (err) {
      setError("Error al procesar la solicitud")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const [showPassword, setShowPassword] = useState(false)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Nombre completo"
            {...register("name")}
            className="w-full px-4 py-2 text-sm border rounded-md"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="matricula" className="block text-sm font-medium text-gray-700 mb-1">
            Matrícula
          </label>
          <Input
            id="matricula"
            type="number"
            placeholder="Matrícula"
            {...register("matricula")}
            className="w-full px-4 py-2 text-sm border rounded-md"
          />
          {errors.matricula && <p className="text-red-500 text-xs mt-1">{errors.matricula.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            {...register("email")}
            className="w-full px-4 py-2 text-sm border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              {...register("password")}
              className="w-full px-4 py-2 text-sm border rounded-md pr-10"
            />
            <Button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center bg-transparent hover:bg-transparent border-none focus:outline-none focus:ring-0 shadow-none cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-500" />
              ) : (
                <Eye className="h-4 w-4 text-gray-500" />
              )}
            </Button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button 
          type="submit" 
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 text-sm cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "Creando..." : "Crear Usuario"}
        </Button>
      </div>

      {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
      {success && <p className="text-green-500 text-sm text-center mt-2">{success}</p>}
    </form>
  )
}