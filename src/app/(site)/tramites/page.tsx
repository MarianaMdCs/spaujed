"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Car, Home, Wallet, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { TramiteGeneral } from "@/components/tramites/TramiteGeneral";
import { TramiteCreditoVehiculo } from "@/components/tramites/TramiteCreditoVehiculo";
import { TramiteCreditoHipotecario } from "@/components/tramites/TramiteCreditoHipotecario";
import { TramiteCreditoPersonal } from "@/components/tramites/TramiteCreditoPersonal";
import Head from "next/head";




const tramites = [
  {
    id: 1,
    title: "Crédito de vehículo",
    description: "Préstamo de hasta 650 mil pesos para adquisición de un automóvil.",
    icon: Car,
    contenido: {
      introduccion:
        "Seguimos trabajando en acciones que beneficien a todos los integrantes del SPAUJED, dando respuesta a sus peticiones y favoreciendo su patrimonio de la mejor manera.",
      montoMaximo: "$650,000",
      requisitosNuevo: [
        "Cotización para auto nuevo o lote con razón social en hoja membretada firmada y sellada de la agencia o lote.",
        "Cuentas y claves interbancarias impresa en hoja membretada firmada y sellada de la agencia.",
      ],
      requisitosUsado: [
        "Libro azul del vehículo.",
        "Factura de compra-venta.",
        "Identificación oficial del vendedor.",
      ],
    },
  },
  {
    id: 2,
    title: "Crédito hipotecario",
    description: "Financiamiento para adquisición, construcción o remodelación de vivienda.",
    icon: Home,
  },
  {
    id: 3,
    title: "Crédito personal",
    description: "Préstamos con montos máximos de $100,000 a través de la Caja de Ahorro.",
    icon: Wallet,
  },
  {
    id: 4,
    title: "Lentes",
    description: "Apoyo para adquisición de lentes y atención oftalmológica.",
    icon: Eye,
  },
];

export default function TramitesPage() {
  const [selectedTramite, setSelectedTramite] = useState(tramites[0]);

  return (
    <>
      <div className="container mx-auto px-4 py-24 min-h-screen">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 flex-shrink-0">
            <Card className="p-4">
              <nav className="space-y-1">
                {tramites.map((tramite) => (
                  <button
                    key={tramite.id}
                    onClick={() => setSelectedTramite(tramite)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
                      selectedTramite.id === tramite.id
                        ? "bg-red-50 text-red-600"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <tramite.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="flex-grow text-left">{tramite.title}</span>
                  </button>
                ))}
              </nav>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {selectedTramite.id === 1 ? (
              <TramiteCreditoVehiculo
                title={selectedTramite.title}
                description={selectedTramite.description} contenido={{
                  introduccion: "",
                  montoMaximo: "$650,000",
                  requisitosNuevo: [],
                  requisitosUsado: [],
                  requisitosSolicitante: [],
                  requisitosAval: [],
                  condiciones: [],
                  notasImportantes: []
                }}              />
            ) : selectedTramite.id === 2 ? (
              <TramiteCreditoHipotecario
                title={selectedTramite.title}
                description={selectedTramite.description}
              />
            ) : selectedTramite.id === 3 ? (
              <TramiteCreditoPersonal
                title={selectedTramite.title}
                description={selectedTramite.description}
              />
            ) : (
              <TramiteGeneral
                      title={selectedTramite.title}
                      description={selectedTramite.description} icon={"symbol"} requisitos={[]} proceso={[]}              />
            )}
          </main>
        </div>
      </div>
    </>
  );
}