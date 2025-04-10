"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
  FileText,
  Scale,
  Calculator,
  TrendingUp,
  FileCheck,
  Gavel,
  BarChart,
  Users,
  CreditCard,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { DocumentViewer } from "@/components/documentos/document-viewer"
import Head from "next/head"

const documentos = [
  {
    id: 1,
    title: "Estatutos",
    description: "Estatutos y reglamentos del Sindicato de Personal Académico de la UJED.",
    icon: FileText,
    documentUrl: "https://drive.google.com/file/d/1kVF78q1ZRfA-u2TF55l3CE6kCmgUSiE7/view",
  },
  {
    id: 2,
    title: "Contratos Colectivos",
    description: "Contratos colectivos de trabajo vigentes.",
    icon: Scale,
    documentUrl: "https://drive.google.com/file/d/1d-jsHP1n1TsZPRstPyCK5zyerpv6H4ih/view",
    links: [
      {
        label: "Contrato colectivo 2024",
        url: "https://drive.google.com/file/d/1d-jsHP1n1TsZPRstPyCK5zyerpv6H4ih/view",
      },
      {
        label: "Contrato colectivo 2023",
        url: "https://drive.google.com/file/d/1SmUQPI2z4pBqxS45Sfa-TMZ-aSitaxII/view",
      },
      {
        label: "Contrato colectivo 2022",
        url: "https://drive.google.com/file/d/1SmUQPI2z4pBqxS45Sfa-TMZ-aSitaxII/view",
      },
      {
        label: "Contrato colectivo 2021",
        url: "https://drive.google.com/file/d/1SmUQPI2z4pBqxS45Sfa-TMZ-aSitaxII/view",
      },
    ],
  },
  {
    id: 3,
    title: "Medidas compensatorias",
    description: "Información sobre medidas compensatorias para el personal académico.",
    icon: Calculator,
    documentUrl: "https://drive.google.com/file/d/10z9-FTnzdOB0VihFb5qv57RzfCKQtGto/view",
  },
  {
    id: 4,
    title: "Retabulación",
    description: "Proceso y resultados de retabulación.",
    icon: TrendingUp,
    documentUrl: "https://drive.google.com/file/d/1zPQoyH-f2V1BPQgCLmXaM-RebpAW1hcq/view",
    links: [
      {
        label: "Resultados de Retabulacion",
        url: "https://drive.google.com/file/d/1zPQoyH-f2V1BPQgCLmXaM-RebpAW1hcq/view",
      },
      {
        label: "Formato De Retabulacion",
        url: "https://drive.google.com/file/d/1zVzoTN_oAc1Uj7Kjm_Zs4DD11gsT3eKc/view",
      },
    ],
  },
  {
    id: 5,
    title: "Convenios de revisión",
    description: "Convenios de revisión contractual y salarial.",
    icon: FileCheck,
    documentUrl: "https://drive.google.com/file/d/1SFCA4kI4QHkTjeTcX0bcRykBbeL8xjqJ/view",
    links: [
      {
        label: "Convenio 2024 - 2025",
        url: "https://drive.google.com/file/d/1SFCA4kI4QHkTjeTcX0bcRykBbeL8xjqJ/view",
      },
      {
        label: "Convenio 2023 - 2024",
        url: "https://drive.google.com/file/d/138BTTVPdEpejFcAmUewI1gZuEmtp7lSK/view",
      },
      {
        label: "Convenio 2022 - 2023",
        url: "https://drive.google.com/file/d/14GFTUC9M_HTdXeybr1iQbhXDdmW9sArp/view",
      },
    ],
  },
  {
    id: 6,
    title: "Emplazamientos",
    description: "Documentos relacionados con emplazamientos.",
    icon: Gavel,
    documentUrl: "https://drive.google.com/file/d/1nTGa66cgZdQ5pGz3Cwg9gz-2RRpFMnaR/view",
    links: [
      {
        label: "Emplazamiento 2024 - 2025",
        url: "https://drive.google.com/file/d/1nTGa66cgZdQ5pGz3Cwg9gz-2RRpFMnaR/view",
      },
      {
        label: "Emplazamiento 2023 - 2024",
        url: "https://drive.google.com/file/d/13pMpBOaRCRFYp_GhXG-XZXWiDGi7GysC/view",
      },
    ],
  },
  {
    id: 7,
    title: "Informes de Actividades",
    description: "Informes de actividades del sindicato.",
    icon: BarChart,
    documentUrl: "https://drive.google.com/file/d/1XJOsJEVihCVnyGNwsGu0SRre4qHboREh/view",
    links: [
      {
        label: "Informe 2023 - 2024",
        url: "https://drive.google.com/file/d/1XJOsJEVihCVnyGNwsGu0SRre4qHboREh/view",
      },
      {
        label: "Informe 2022 - 2023",
        url: "https://drive.google.com/file/d/1Lx0Z-eROtFxuSE9lCfGANMtG89GD8cuj/view",
      },
      {
        label: "Informe 2021 - 2022",
        url: "https://drive.google.com/file/d/1K9TN0aImA9ZHEz1M67pOGwVD2p6yesE1/view",
      },
    ],
  },
  {
    id: 8,
    title: "Concursos por oposición",
    description: "Información sobre concursos por oposición.",
    icon: Users,
    documentUrl: "https://drive.google.com/file/d/1YyCFqVKCWdpf93zi6Wcf8siRjFYyrRLH/view",
    links: [
      {
        label: "Febrero de 2024: Concurso por oposición FECA",
        url: "https://drive.google.com/file/d/1YyCFqVKCWdpf93zi6Wcf8siRjFYyrRLH/view",
      },
      {
        label: "Febrero de 2024 – Concurso por oposición Institiuto de Ciencias Sociales",
        url: "https://drive.google.com/file/d/12UGm3JSFhN-yKZRs1friy12pYM0NOG5G/view",
      },
      {
        label: "Marzo de 2024 – Concurso por oposición Colegio de Ciencias y Humanidades",
        url: "https://drive.google.com/file/d/1fYwRZL4II4Jxceh05lMZ1lK5w272bAjt/view",
      },
    ],
  },
  {
    id: 9,
    title: "Beneficios de nómina Banamex",
    description: "Información sobre beneficios de nómina con Banamex.",
    icon: CreditCard,
    documentUrl: "https://drive.google.com/file/d/13JH4T9aawzIraDi_OfDoP1xr0k4qomRf/view",
    links: [
      {
        label: "Promocion Gana Un Auto",
        url: "https://drive.google.com/file/d/13JH4T9aawzIraDi_OfDoP1xr0k4qomRf/view",
      },
      {
        label: "Reclamacion De Siniestro",
        url: "https://drive.google.com/file/d/1H88IGBBMTKck6kwf-JGw53Dt1u-6ccXZ/view",
      },
      {
        label: "Seguro De Vida",
        url: "https://drive.google.com/file/d/1xf1areH01hmK49xvaWsTcMImsyyq3A9s/view",
      },
      {
        label: "Reclamo Por Muerte Accidental",
        url: "https://drive.google.com/file/d/105G3rHtsJV04wNJqnBp-QVtAmPwcqHHG/view",
      },
      {
        label: "Seguro De Accidentes",
        url: "https://drive.google.com/file/d/1M0VkzTcCHF6rlHsXbPXJjP6tTA420jIU/view",
      },
      {
        label: "Paquete De Asistencias",
        url: "https://drive.google.com/file/d/1hGo9iq2mqMk5-Y9WVrZKbJjWvwgqFXPR/view",
      },
      {
        label: "Folleto De Asistencias 2024",
        url: "https://drive.google.com/file/d/1ntv9yP0OF_4FpuHRuTBEhpKcx8QsGoaF/view",
      },
      {
        label: "Seguro De Vida UJED",
        url: "https://drive.google.com/file/d/1YMLeZhpEpBaQctZwkzG7Pv6OOaKQ7aWq/view",
      },
      {
        label: "Seguro De Muerte Accidental UJED",
        url: "https://drive.google.com/file/d/1YMLeZhpEpBaQctZwkzG7Pv6OOaKQ7aWq/view",
      },
    ],
  },
]

export default function DocumentosPage() {
  const [selectedDocument, setSelectedDocument] = useState(documentos[0])

  return (
    <>
      <Head>
        <title>Documentos | SPAUJED</title>
        <meta
          name="description"
          content="Acceda a documentos importantes de SPAUJED, incluyendo estatutos, contratos colectivos, convenios y más."
        />
        <meta
          name="keywords"
          content="SPAUJED, documentos, estatutos, contratos colectivos, convenios, informes"
        />
      </Head>
      <div className="container mx-auto px-4 py-24 min-h-screen">
        <h1 className="text-4xl font-bold mb-12 text-center">Documentos</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mini Sidebar */}
          <aside className="md:w-64 flex-shrink-0">
            <Card className="p-4">
              <nav className="space-y-1">
                {documentos.map((documento) => (
                  <button
                    key={documento.id}
                    onClick={() => setSelectedDocument(documento)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
                      selectedDocument.id === documento.id
                        ? "bg-red-50 text-red-600"
                        : "text-gray-600 hover:bg-gray-50",
                    )}
                  >
                    <documento.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="flex-grow text-left">{documento.title}</span>
                  </button>
                ))}
              </nav>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <DocumentViewer
              title={selectedDocument.title}
              description={selectedDocument.description}
              icon={selectedDocument.icon}
              documentUrl={selectedDocument.documentUrl}
              links={selectedDocument.links}
            />
          </main>
        </div>
      </div>
    </>
  )
}
