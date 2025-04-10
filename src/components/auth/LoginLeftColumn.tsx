import Link from "next/link"
import Image from "next/image"

export default function LoginLeftColumn() {
  return (
    <div className="bg-[#f8f9fa] hidden p-8 md:flex flex-col items-center justify-center space-y-8">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo SPAUJED"
          width={300}
          height={100}
          className="w-auto h-16"
        />
      </Link>
      <div className="relative w-64 h-64">
        <Image
          src="/assets/auth/ujed.png"
          alt="Escudo UJED"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}