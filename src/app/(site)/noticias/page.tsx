"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const categorias = ["Todos", "Convenios y Contratos", "Noticias y Eventos", "Créditos y Beneficios",];

const noticias = [
  {
    id: 1,
    titulo: "Lista, consulta del Convenio de Revisión integral 2024",
    descripcion: "El próximo 13 de febrero será ...",
    imagen: "/assets/news/CONVOCATORIA-Consulta-contenido-de-convenio.png",
    fecha: "8 de marzo de 2025",
    categoria: "Convenios y Contratos",
  },
  {
    id: 2,
    titulo: "Beca «Lic. Hector Garcia Calderon>",
    descripcion: "Puedes acceder a más información con el siguiente link ...",
    imagen: "/assets/news/beca.png",
    fecha: "21 de Enero de 2024 ",
    categoria: "Noticias y Eventos",
  },
  {
    id: 3,
    titulo: "Crédito hipotecario.",
    descripcion: "Informacion sobre el credito hipotecario...",
    imagen: "/assets/news/credito-Hipotecario.png",
    fecha: "21 de Enero de 2024 ",
    categoria: "Créditos y Beneficios",
  },
  {
    id: 4,
    titulo: "Prestamos De Caja De Ahorro",
    descripcion: "De diciembre de 2023 a febrero de 2024 están abiertas solicitudes de préstamo ...",
    imagen: "/assets/news/cajadeahorro.png",
    fecha: "21 de Enero de 2024",
    categoria: "Créditos y Beneficios",
  },
  {
    id: 5,
    titulo: "Crédito Vehicular",
    descripcion: "A partir del pasado 1 de agosto de 2023, los préstamos...",
    imagen: "/assets/news/creditovehicular.png",
    fecha: "21 de Enero de 2024",
    categoria: "Créditos y Beneficios",
  },
  {
    id: 6,
    titulo: "Excentos de pago",
    descripcion: "Trámites de excentos de pago Documentación y datos...",
    imagen: "/assets/news/excentosdepago.png",
    fecha: "21 de Enero de 2024",
    categoria: "Créditos y Beneficios",
  },
  {
    id: 7,
    titulo: "Medidas compensatorias",
    descripcion: "Convenio celebrado entre la universidad Juárez del estado de Durango...",
    imagen: "/assets/news/Convenio Mayo 2022 (Medidas compensatorias)_page-0001.jpg",
    fecha: "21 de Enero de 2024",
    categoria: "Convenios y Contratos",
  },
  {
    id: 8,
    titulo: "Informes de Actividades",
    descripcion: "Cuadernillos Informes SPAUJED...",
    imagen: "/assets/news/informesactividades.png",
    fecha: "21 de Enero de 2024",
    categoria: "Noticias y Eventos",
  },
  {
    id: 9,
    titulo: "Emplazamientos a Huelga",
    descripcion: "Emplazamiento a huelga promovido por el sindicato de personal...",
    imagen: "/assets/news/emplazamientohuelga.jpeg",
    fecha: "21 de Enero de 2024",
    categoria: "Noticias y Eventos",
  },
  {
    id: 10,
    titulo: "Convenios de Revisión",
    descripcion: "Convenio que celebran por una parte el Sindicato de Personal Académico de la UJED...",
    imagen: "/assets/news/conveniosderevision.jpeg",
    fecha: "21 de Enero de 2024",
    categoria: "Convenios y Contratos",
  },
  {
    id: 11,
    titulo: "Estatutos SPAUJED",
    descripcion: "Estatutos SPAUJED...",
    imagen: "/assets/news/ESTATUTOS SPAUJED 2024 29 de junio_page-0001.jpg",
    fecha: "21 de Enero de 2024",
    categoria: "Convenios y Contratos",
  },
  {
    id: 12,
    titulo: "Contrato Colectivo de Trabajo",
    descripcion: "La Universidad Juárez del Estado de Durango y el Sindicato de Personal Académico de la UJED...",
    imagen: "/assets/news/contratocolectivo.png",
    fecha: "21 de Enero de 2024",
    categoria: "Convenios y Contratos",
  },
  {
    id: 13,
    titulo: "Inicia SPAUJED acopio de prendas invernales",
    descripcion: "Este lunes 8 de enero, el SPAUJED inició el acopio de prendas invernales...",
    imagen: "/assets/news/prendasinvernales.jpeg",
    fecha: "21 de Enero de 2024",
    categoria: "Noticias y Eventos",
  },
  {
    id: 14,
    titulo: "Resultados y formato de retabulación",
    descripcion: "Este lunes 8 de enero, el SPAUJED inició el acopio de prendas invernales...",
    imagen: "/assets/news/Resultados de Retabulación 2024_page-0001.jpg",
    fecha: "noviembre 8, 2024",
    categoria: "Noticias y Eventos",
  },
  {
    id: 15,
    titulo: "Beneficios de nómina Banamex",
    descripcion: "Este lunes 8 de enero, el SPAUJED inició el acopio de prendas invernales...",
    imagen: "/assets/news/Promo Gana un Auto Sep 24_page-0001.jpg",
    fecha: "21 de Enero de 2024",
    categoria: "Créditos y Beneficios",
  },
  {
    id: 16,
    titulo: "Concursos por oposición",
    descripcion: "Este lunes 8 de enero, el SPAUJED inició el acopio de prendas invernales...",
    imagen: "/assets/news/CONCURSO POR OPOSICION FECA A2024_page-0001.jpg",
    fecha: "7 de Febrero de 2024",
    categoria: "Convenios y Contratos",
  },
];

export default function NoticiasPage() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const noticiasFiltradas = noticias.filter(
    (noticia) =>
      (categoriaSeleccionada === "Todos" || noticia.categoria === categoriaSeleccionada) &&
      noticia.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Últimas Noticias</h1>

      {/* Barra de búsqueda */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            placeholder="Buscar noticias..."
            className="w-full pr-10"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
        </div>
      </div>

     {/* Filtros de categorías */}
<div className="flex flex-wrap justify-center gap-2 mb-6 overflow-x-auto">
  {categorias.map((categoria) => (
    <Button
      key={categoria}
      variant={categoria === categoriaSeleccionada ? "default" : "outline"}
      className="px-4 py-2 text-sm md:text-base"
      onClick={() => setCategoriaSeleccionada(categoria)}
    >
      {categoria}
    </Button>
  ))}
</div>


      {/* Lista de noticias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticiasFiltradas.length > 0 ? (
          noticiasFiltradas.map((noticia) => (
            <div key={noticia.id} className="border rounded-lg shadow-sm overflow-hidden">
              <Link href={`/noticias/${noticia.id}`} passHref>
                <div className="cursor-pointer">
                  <Image
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{noticia.titulo}</h2>
                    <p className="text-gray-600 text-sm">
                      {noticia.fecha} - <span className="font-bold">{noticia.categoria}</span>
                    </p>
                    <p className="mt-2 text-gray-700">{noticia.descripcion}</p>
                    {/* Enlace de "Leer más" */}
                    <div className="mt-4 text-red-600 font-bold inline-block">
                      Leer más →
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No se encontraron noticias.</p>
        )}
      </div>
    </main>
  );
}
