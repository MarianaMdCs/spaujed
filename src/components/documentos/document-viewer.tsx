import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"

interface Link {
  label: string
  url: string
}

interface DocumentViewerProps {
  title: string
  description: string
  icon: LucideIcon
  documentUrl?: string
  imageUrl?: string
  links?: Link[]
}

export function DocumentViewer({
  title,
  description,
  icon: Icon,
  documentUrl,
  imageUrl,
  links,
}: DocumentViewerProps) {
  // Si el documento es de Google Drive, se transforma la URL para vista previa
  const previewUrl = documentUrl ? documentUrl.replace("/view", "/preview") : null

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-8 w-8 text-red-600" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-gray-600">{description}</p>
        </div>

        {links && links.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {imageUrl && (
          <div className="flex justify-center">
            <Image
              src={imageUrl}
              alt={title}
              className="rounded-lg max-w-full h-auto shadow-lg"
            />
          </div>
        )}

        {documentUrl ? (
          <>
            <div className="bg-gray-50 rounded-lg p-4">
              <iframe
                src={previewUrl || documentUrl}
                width="100%"
                height="500px"
                className="rounded-md"
                title="Previsualización del documento"
                allow="fullscreen"
              />
            </div>
            <div className="text-center">
              <a
                href={documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                Seleccionar para visualizar el contenido
              </a>
            </div>
          </>
        ) : (
          !imageUrl && (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-500">
                Seleccione un documento para visualizar su contenido.
              </p>
            </div>
          )
        )}
      </div>
    </Card>
  )
}
