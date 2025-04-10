"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreditoAutosPage() {
  const [files, setFiles] = useState({
    solicitanteTalones: null as File | null,
    solicitanteIdentificacion: null as File | null,
    solicitanteDomicilio: null as File | null,
    avalTalones: null as File | null,
    avalIdentificacion: null as File | null,
    generalIdentificacion: null as File | null,
    generalActaNacimiento: null as File | null,
    generalCURP: null as File | null,
    generalRFC: null as File | null,
    generalDomicilio: null as File | null,
    generalActaMatrimonio: null as File | null,
    generalTalones: null as File | null,
    generalFormato1: null as File | null,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof typeof files) => {
    if (event.target.files && event.target.files[0]) {
      setFiles({ ...files, [field]: event.target.files[0] });
    }
  };

  const handleSubmit = () => {
    // Validar que todos los documentos requeridos estén presentes
    const requiredDocuments = [
      files.solicitanteTalones,
      files.solicitanteIdentificacion,
      files.solicitanteDomicilio,
      files.avalTalones,
      files.avalIdentificacion,
      files.generalIdentificacion,
      files.generalActaNacimiento,
      files.generalCURP,
      files.generalRFC,
      files.generalDomicilio,
      files.generalTalones,
      files.generalFormato1
    ];

    if (requiredDocuments.some(doc => !doc)) {
      alert("Por favor, suba todos los documentos requeridos");
      return;
    }

    // Aquí iría la lógica para enviar los documentos al servidor
    console.log("Documentos a enviar:", files);
    alert("Documentos enviados correctamente");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Crédito para Automóviles</h1>
      <p className="mb-6">Préstamo de hasta $650,000 para la adquisición de un automóvil nuevo o usado.</p>
      
      {/* Sección Solicitante */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Requisitos para Solicitante Académico con Base</h2>
        
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-medium">1. 2 copias del último talón de pago</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "solicitanteTalones")}
              className="mt-2"
            />
            {files.solicitanteTalones && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.solicitanteTalones.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">2. 2 copias de identificación oficial vigente con fotografía</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "solicitanteIdentificacion")}
              className="mt-2"
            />
            {files.solicitanteIdentificacion && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.solicitanteIdentificacion.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">3. 2 copias de comprobante de domicilio</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "solicitanteDomicilio")}
              className="mt-2"
            />
            {files.solicitanteDomicilio && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.solicitanteDomicilio.name}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Sección Aval */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Requisitos para Aval Académico con Base</h2>
        
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-medium">1. 2 copias del último talón de pago</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "avalTalones")}
              className="mt-2"
            />
            {files.avalTalones && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.avalTalones.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">2. 2 copias de identificación oficial vigente con fotografía</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "avalIdentificacion")}
              className="mt-2"
            />
            {files.avalIdentificacion && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.avalIdentificacion.name}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Sección Documentos Generales */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Documentos Generales</h2>
        
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-medium">1. Identificación oficial vigente</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "generalIdentificacion")}
              className="mt-2"
            />
            {files.generalIdentificacion && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.generalIdentificacion.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">2. Acta de nacimiento</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "generalActaNacimiento")}
              className="mt-2"
            />
            {files.generalActaNacimiento && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.generalActaNacimiento.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">3. CURP</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "generalCURP")}
              className="mt-2"
            />
            {files.generalCURP && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.generalCURP.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">4. RFC</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "generalRFC")}
              className="mt-2"
            />
            {files.generalRFC && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.generalRFC.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">5. Comprobante de domicilio</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "generalDomicilio")}
              className="mt-2"
            />
            {files.generalDomicilio && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.generalDomicilio.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">6. Acta de matrimonio (en caso de estar casado)</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "generalActaMatrimonio")}
              className="mt-2"
            />
            {files.generalActaMatrimonio && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.generalActaMatrimonio.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">7. Últimos 2 talones de pago</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "generalTalones")}
              className="mt-2"
            />
            {files.generalTalones && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.generalTalones.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">8. Formato 1 llenado</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleFileChange(e, "generalFormato1")}
              className="mt-2"
            />
            {files.generalFormato1 && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {files.generalFormato1.name}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Notas adicionales */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Notas Importantes</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Lista de espera aproximada de 10 a 15 días hábiles.</li>
          <li>El préstamo está sujeto a autorización.</li>
          <li>Se autoriza únicamente a académicos con titularidad de sus clases.</li>
          <li>Adicional al descuento quincenal, se descontará un seguro de deudor.</li>
        </ul>
      </div>

      {/* Botón para enviar documentos */}
      <div className="mt-6">
        <Button 
          className="bg-[#DC2828] text-white hover:bg-[#B02020]"
          onClick={handleSubmit}
        >
          Enviar Documentos
        </Button>
      </div>
      
      {/* Nota para subir el PDF */}
      <p className="text-sm text-gray-500 mt-4">
        Nota: Cada documento debe subirse individualmente en formato PDF. Asegúrese de que todos los archivos sean legibles.
      </p>
    </div>
  );
}