"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { SignInAction } from "@/app/(auth)/actions"
import { redirect } from "next/navigation"

// Definimos el esquema de validación con Zod
const loginSchema = z.object({
  matricula: z.string().min(1, { message: "La matrícula es requerida" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
})

// Inferimos el tipo TypeScript del esquema
type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append("enrollment", data.matricula)
    formData.append("password", data.password)

    const result = await SignInAction(formData)
    if (!result.success) {
     setError(result.error || "Ocurrió un error al iniciar sesión")
     setIsLoading(false) 
    } else {
      console.log("Login successful")
      redirect("/")
    }
  }

  const [showPassword, setShowPassword] = useState(false)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          type="number"
          placeholder="Matricula"
          {...register("matricula")}
          className="w-full px-4 py-2 text-lg border rounded-md"/>
        {errors.matricula && <p className="text-red-500 text-sm mt-1">{errors.matricula.message}</p>}
      </div>

      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          {...register("password")}
          className="w-full px-4 py-2 text-lg border rounded-md pr-10"
        />
        <Button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center bg-transparent hover:bg-transparent border-none focus:outline-none focus:ring-0 shadow-none cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-500" />
          ) : (
            <Eye className="h-5 w-5 text-gray-500" />
          )}
        </Button>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg cursor-pointer">
        INICIAR SESIÓN
      </Button>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div className="text-center space-y-2 text-gray-600">
        <Link href="/forgot-password" className="block hover:text-red-500">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </form>
  )
}