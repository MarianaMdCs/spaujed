"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { FileText, Image, File, Upload, Trash2, Download } from "lucide-react"

type FileType = 'pdf' | 'image' | 'doc' | 'ppt' | 'other'

interface MyFile {
  id: number
  name: string
  size: string
  uploadedBy: string
  date: string
  type: FileType
}

export default function DashboardPage() {
  const [files, setFiles] = useState<MyFile[]>([])
  const [user, setUser] = useState<string>("Juan Pérez")
  const [selectedFiles, setSelectedFiles] = useState<number[]>([])

  useEffect(() => {
    // Simulando la obtención de datos de archivos
    const fetchedFiles = [
      { id: 1, name: "Documento_Contrato.pdf", size: "1.5MB", uploadedBy: "Juan Pérez", date: "2025-03-01", type: 'pdf' },
      { id: 2, name: "Foto_Perfil.jpg", size: "500KB", uploadedBy: "María López", date: "2025-03-02", type: 'image' },
      { id: 3, name: "Informe_Trimestral.docx", size: "2.2MB", uploadedBy: "Carlos Martínez", date: "2025-03-03", type: 'doc' },
      { id: 4, name: "Presentacion_Proyecto.pptx", size: "3MB", uploadedBy: "Ana García", date: "2025-03-04", type: 'ppt' },
      { id: 5, name: "Backup_Datos.zip", size: "5.7MB", uploadedBy: "Juan Pérez", date: "2025-03-05", type: 'other' },
      { id: 6, name: "Manual_Usuario.pdf", size: "4.1MB", uploadedBy: "Juan Pérez", date: "2025-03-06", type: 'pdf' }
    ]
    setFiles(fetchedFiles as MyFile[])

  }, [])

  // Filtrar archivos del usuario
  const userFiles = files.filter(file => file.uploadedBy === user)
  
  // Calcular espacio total usado
  const totalSize = userFiles.reduce((sum, file) => {
    const sizeNum = parseFloat(file.size)
    return sum + (file.size.includes('MB') ? sizeNum * 1024 : sizeNum)
  }, 0).toFixed(2)

  const toggleFileSelection = (id: number) => {
    setSelectedFiles(prev => 
      prev.includes(id) 
        ? prev.filter(fileId => fileId !== id) 
        : [...prev, id]
    )
  }

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'pdf': return <FileText className="text-red-500" size={20} />
      case 'image': return <Image className="text-blue-500" size={20} />
      case 'doc': return <File className="text-blue-600" size={20} />
      case 'ppt': return <File className="text-orange-500" size={20} />
      default: return <File className="text-gray-500" size={20} />
    }
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Mi Gestor de Archivos</h1>
          <p className="text-gray-600">Bienvenido, {user}</p>
        </header>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Archivos subidos</CardTitle>
              <div className="p-2 rounded-lg bg-blue-50">
                <File className="text-blue-600" size={18} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{userFiles.length}</p>
              <p className="text-xs text-gray-500 mt-1">Total de archivos</p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Espacio usado</CardTitle>
              <div className="p-2 rounded-lg bg-purple-50">
                <File className="text-purple-600" size={18} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalSize} KB</p>
              <p className="text-xs text-gray-500 mt-1">Almacenamiento</p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Último archivo</CardTitle>
              <div className="p-2 rounded-lg bg-green-50">
                <Upload className="text-green-600" size={18} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium truncate">
                {userFiles.length > 0 ? userFiles[userFiles.length - 1].name : 'Ninguno'}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {userFiles.length > 0 ? userFiles[userFiles.length - 1].date : ''}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Acciones</CardTitle>
              <div className="p-2 rounded-lg bg-red-50">
                <Trash2 className="text-red-600" size={18} />
              </div>
            </CardHeader>
            <CardContent className="flex gap-2">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md text-sm flex items-center justify-center gap-1 transition-colors">
                <Upload size={16} />
                <span>Subir</span>
              </button>
              <button 
                className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 py-2 px-3 rounded-md text-sm flex items-center justify-center gap-1 transition-colors disabled:opacity-50"
                disabled={selectedFiles.length === 0}
              >
                <Trash2 size={16} />
                <span>Eliminar</span>
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Lista de archivos */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Mis archivos</h3>
            <div className="text-sm text-gray-500">
              Mostrando {userFiles.length} de {files.length} archivos
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamaño</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userFiles.map((file) => (
                  <tr key={file.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input 
                        type="checkbox" 
                        checked={selectedFiles.includes(file.id)}
                        onChange={() => toggleFileSelection(file.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-3">
                          {getFileIcon(file.type)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{file.name}</div>
                          <div className="text-sm text-gray-500">{file.uploadedBy}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {file.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {file.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 flex items-center gap-1 p-1 rounded hover:bg-blue-50">
                          <Download size={16} />
                          <span>Descargar</span>
                        </button>
                        <button className="text-red-600 hover:text-red-900 flex items-center gap-1 p-1 rounded hover:bg-red-50">
                          <Trash2 size={16} />
                          <span>Eliminar</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {userFiles.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No hay archivos subidos aún. Comienza subiendo tu primer archivo.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}