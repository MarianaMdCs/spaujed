import Link from "next/link"
import Image from "next/image"
import LoginForm from "./LoginForm"

export default function LoginRightColumn() {
  return (
    <div className="bg-white p-8 flex flex-col justify-center">
      {/* Logo en móvil */}
      <div className="md:hidden flex justify-center mb-8">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo SPAUJED"
            width={200}
            height={60}
            className="w-auto h-12"
          />
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">INICIAR SESIÓN</h1>
      
      <LoginForm />
    </div>
  )
}