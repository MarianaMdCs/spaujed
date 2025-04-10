"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Car, Home, User, Glasses } from "lucide-react"; // Importamos los iconos

export default function agremiadoPage() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-6">CREDITOS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          className="cursor-pointer"
          onClick={() => navigateTo("/agremiado/credito-autos")}
        >
          <CardHeader>
            <CardTitle>CREDITO DE AUTOS</CardTitle>
          </CardHeader>
          <CardContent>
            <Car className="w-8 h-8 mx-auto mt-2 text-gray-500" />{" "}
            {/* Icono de auto */}
          </CardContent>
        </Card>
        <Card
          className="cursor-pointer"
          onClick={() => navigateTo("/agremiado/credito-hipotecario")}
        >
          <CardHeader>
            <CardTitle>CREDITO HIPOTECARIO</CardTitle>
          </CardHeader>
          <CardContent>
            <Home className="w-8 h-8 mx-auto mt-2 text-gray-500" />{" "}
            {/* Icono de casa */}
          </CardContent>
        </Card>
        <Card
          className="cursor-pointer"
          onClick={() => navigateTo("/agremiado/credito-personal")}
        >
          <CardHeader>
            <CardTitle>CREDITO PERSONAL</CardTitle>
          </CardHeader>
          <CardContent>
            <User className="w-8 h-8 mx-auto mt-2 text-gray-500" />{" "}
            {/* Icono de usuario */}
          </CardContent>
        </Card>
        <Card
          className="cursor-pointer"
          onClick={() => navigateTo("/agremiado/credito-lentes")}
        >
          <CardHeader>
            <CardTitle>CREDITO LENTES</CardTitle>
          </CardHeader>
          <CardContent>
            <Glasses className="w-8 h-8 mx-auto mt-2 text-gray-500" />{" "}
            {/* Icono de lentes */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
