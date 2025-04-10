"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function CreditoPersonalPage() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    tipoPrestamo: "",
    nombre: "",
    matricula: "",
    unidad: "",
    telParticular: "",
    telCelular: "",
    cantidadSolicitada: "",
    esAhorrador: "",
  });

  const [documentos, setDocumentos] = useState({
    identificacion: null as File | null,
    talonCheque: null as File | null,
    capacidadPago: null as File | null,
    pagare: null as File | null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (name: keyof typeof documentos, files: FileList | null) => {
    if (files && files.length > 0) {
      setDocumentos({ ...documentos, [name]: files[0] });
    }
  };

  const handleSubmit = () => {
    // Aquí puedes implementar la lógica para enviar los datos y documentos
    console.log("Datos del formulario:", formData);
    console.log("Documentos:", documentos);
    alert("Formulario enviado correctamente");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Préstamos de Caja de Ahorro</h1>
      <p className="mb-6">
        Préstamos con montos máximos de $100,000 a través de la Caja de Ahorro.
      </p>

      {/* Botón para abrir el formulario */}
      <Button
        onClick={() => setOpen(true)}
        className="bg-[#DC2828] text-white hover:bg-[#B22020] mb-6"
      >
        Formulario
      </Button>

      {/* Modal con preguntas sencillas */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Formulario</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <label>Tipo de Préstamo</label>
            <Select
              value={formData.tipoPrestamo}
              onValueChange={(value) => handleSelectChange("tipoPrestamo", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="prestamoCajaAhorro">Préstamo Caja de Ahorro</SelectItem>
                <SelectItem value="retiroAhorro">Retiro de Ahorro</SelectItem>
                <SelectItem value="reembolsoDescuento">
                  Reembolso por Descuento Improcedente
                </SelectItem>
              </SelectContent>
            </Select>

            <Input
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <Input
              name="matricula"
              placeholder="Matrícula"
              value={formData.matricula}
              onChange={handleChange}
              required
            />
            <Input
              name="unidad"
              placeholder="Unidad donde trabaja"
              value={formData.unidad}
              onChange={handleChange}
              required
            />
            <Input
              name="telParticular"
              placeholder="Teléfono Particular"
              value={formData.telParticular}
              onChange={handleChange}
              required
            />
            <Input
              name="telCelular"
              placeholder="Teléfono Celular"
              value={formData.telCelular}
              onChange={handleChange}
              required
            />
            <Input
              name="cantidadSolicitada"
              placeholder="Cantidad Solicitada"
              value={formData.cantidadSolicitada}
              onChange={handleChange}
              required
            />

            <label>¿Es Ahorrador?</label>
            <Select
              value={formData.esAhorrador}
              onValueChange={(value) => handleSelectChange("esAhorrador", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="si">Sí</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={() => setOpen(false)}
            className="bg-[#DC2828] text-white hover:bg-[#B22020] mb-6"
          >
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>

      {/* Secciones de Requisitos con campos de archivo individuales */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Requisitos para Aval</h2>
        
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-medium">1. Identificación oficial vigente</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              className="mt-2"
              onChange={(e) => handleFileChange("identificacion", e.target.files)}
            />
            {documentos.identificacion && (
              <p className="text-sm text-green-600 mt-1">
                Archivo seleccionado: {documentos.identificacion.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">2. Último talón de cheque</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              className="mt-2"
              onChange={(e) => handleFileChange("talonCheque", e.target.files)}
            />
            {documentos.talonCheque && (
              <p className="text-sm text-green-600 mt-1">
                Archivo seleccionado: {documentos.talonCheque.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">3. Capacidad de pago</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              className="mt-2"
              onChange={(e) => handleFileChange("capacidadPago", e.target.files)}
            />
            {documentos.capacidadPago && (
              <p className="text-sm text-green-600 mt-1">
                Archivo seleccionado: {documentos.capacidadPago.name}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Requisitos para Pagaré</h2>
        
        <div className="mt-4">
          <p className="font-medium">1. Pagaré firmado</p>
          <Input 
            type="file" 
            accept="application/pdf" 
            className="mt-2"
            onChange={(e) => handleFileChange("pagare", e.target.files)}
          />
          {documentos.pagare && (
            <p className="text-sm text-green-600 mt-1">
              Archivo seleccionado: {documentos.pagare.name}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <Button 
          className="bg-red-600 text-white hover:bg-red-800"
          onClick={handleSubmit}
        >
          Enviar Documentos
        </Button>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Nota: Cada documento debe subirse en formato PDF. Asegúrese de que todos los archivos sean legibles.
      </p>
    </div>
  );
}