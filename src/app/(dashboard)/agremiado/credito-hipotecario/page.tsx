"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreditoHipotecarioPage() {
  // Estado para los documentos del vendedor
  const [vendedorDocs, setVendedorDocs] = useState({
    identificacion: null as File | null,
    actaNacimiento: null as File | null,
    curp: null as File | null,
    rfc: null as File | null,
    comprobanteDomicilio: null as File | null,
    actaMatrimonio: null as File | null,
    referenciaBancaria: null as File | null
  });

  // Estado para los documentos del comprador
  const [compradorDocs, setCompradorDocs] = useState({
    identificacion: null as File | null,
    actaNacimiento: null as File | null,
    curp: null as File | null,
    rfc: null as File | null,
    comprobanteDomicilio: null as File | null,
    actaMatrimonio: null as File | null,
    talonesPago: null as File | null,
    formato1: null as File | null
  });

  // Estado para documentos generales
  const [generalesDocs, setGeneralesDocs] = useState({
    contratoCompraVenta: null as File | null,
    escrituraPropiedad: null as File | null,
    predialActual: null as File | null,
    libertadGravamen: null as File | null,
    avaluoPericial: null as File | null,
    cedulaFiscal: null as File | null
  });

  // Manejo de cambios para documentos del vendedor
  const handleVendedorChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof typeof vendedorDocs) => {
    if (event.target.files && event.target.files[0]) {
      setVendedorDocs({ ...vendedorDocs, [field]: event.target.files[0] });
    }
  };

  // Manejo de cambios para documentos del comprador
  const handleCompradorChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof typeof compradorDocs) => {
    if (event.target.files && event.target.files[0]) {
      setCompradorDocs({ ...compradorDocs, [field]: event.target.files[0] });
    }
  };

  // Manejo de cambios para documentos generales
  const handleGeneralesChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof typeof generalesDocs) => {
    if (event.target.files && event.target.files[0]) {
      setGeneralesDocs({ ...generalesDocs, [field]: event.target.files[0] });
    }
  };

  // Función para enviar los documentos
  const handleSubmit = () => {
    // Validar documentos requeridos
    const vendedorRequeridos = [
      vendedorDocs.identificacion,
      vendedorDocs.actaNacimiento,
      vendedorDocs.curp,
      vendedorDocs.rfc,
      vendedorDocs.comprobanteDomicilio,
      vendedorDocs.referenciaBancaria
    ];

    const compradorRequeridos = [
      compradorDocs.identificacion,
      compradorDocs.actaNacimiento,
      compradorDocs.curp,
      compradorDocs.rfc,
      compradorDocs.comprobanteDomicilio,
      compradorDocs.talonesPago,
      compradorDocs.formato1
    ];

    const generalesRequeridos = [
      generalesDocs.contratoCompraVenta,
      generalesDocs.escrituraPropiedad,
      generalesDocs.predialActual,
      generalesDocs.libertadGravamen,
      generalesDocs.avaluoPericial
    ];

    if (vendedorRequeridos.some(doc => !doc) || 
        compradorRequeridos.some(doc => !doc) || 
        generalesRequeridos.some(doc => !doc)) {
      alert("Por favor, suba todos los documentos requeridos");
      return;
    }

    // Aquí iría la lógica para enviar los documentos al servidor
    console.log("Documentos del vendedor:", vendedorDocs);
    console.log("Documentos del comprador:", compradorDocs);
    console.log("Documentos generales:", generalesDocs);
    alert("Documentos enviados correctamente");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Crédito Hipotecario</h1>
      <p className="mb-6">Aquí encontrarás información sobre los créditos hipotecarios.</p>
      
      {/* Sección Vendedor */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Requisitos para compra de casa o terreno - Vendedor</h2>
        
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-medium">1. Identificación oficial vigente</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleVendedorChange(e, "identificacion")}
              className="mt-2"
            />
            {vendedorDocs.identificacion && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {vendedorDocs.identificacion.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">2. Acta de nacimiento</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleVendedorChange(e, "actaNacimiento")}
              className="mt-2"
            />
            {vendedorDocs.actaNacimiento && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {vendedorDocs.actaNacimiento.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">3. CURP</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleVendedorChange(e, "curp")}
              className="mt-2"
            />
            {vendedorDocs.curp && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {vendedorDocs.curp.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">4. RFC</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleVendedorChange(e, "rfc")}
              className="mt-2"
            />
            {vendedorDocs.rfc && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {vendedorDocs.rfc.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">5. Comprobante de domicilio</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleVendedorChange(e, "comprobanteDomicilio")}
              className="mt-2"
            />
            {vendedorDocs.comprobanteDomicilio && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {vendedorDocs.comprobanteDomicilio.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">6. Acta de matrimonio (si aplica)</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleVendedorChange(e, "actaMatrimonio")}
              className="mt-2"
            />
            {vendedorDocs.actaMatrimonio && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {vendedorDocs.actaMatrimonio.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">7. Referencia bancaria con nombre, número de cuenta y CLABE interbancaria</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleVendedorChange(e, "referenciaBancaria")}
              className="mt-2"
            />
            {vendedorDocs.referenciaBancaria && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {vendedorDocs.referenciaBancaria.name}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Sección Comprador */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Requisitos para compra de casa o terreno - Comprador</h2>
        
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-medium">1. Identificación oficial vigente</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleCompradorChange(e, "identificacion")}
              className="mt-2"
            />
            {compradorDocs.identificacion && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {compradorDocs.identificacion.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">2. Acta de nacimiento</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleCompradorChange(e, "actaNacimiento")}
              className="mt-2"
            />
            {compradorDocs.actaNacimiento && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {compradorDocs.actaNacimiento.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">3. CURP</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleCompradorChange(e, "curp")}
              className="mt-2"
            />
            {compradorDocs.curp && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {compradorDocs.curp.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">4. RFC</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleCompradorChange(e, "rfc")}
              className="mt-2"
            />
            {compradorDocs.rfc && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {compradorDocs.rfc.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">5. Comprobante de domicilio</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleCompradorChange(e, "comprobanteDomicilio")}
              className="mt-2"
            />
            {compradorDocs.comprobanteDomicilio && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {compradorDocs.comprobanteDomicilio.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">6. Acta de matrimonio (si aplica)</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleCompradorChange(e, "actaMatrimonio")}
              className="mt-2"
            />
            {compradorDocs.actaMatrimonio && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {compradorDocs.actaMatrimonio.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">7. Últimos 2 talones de pago</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleCompradorChange(e, "talonesPago")}
              className="mt-2"
            />
            {compradorDocs.talonesPago && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {compradorDocs.talonesPago.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">8. Formato 1 llenado</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleCompradorChange(e, "formato1")}
              className="mt-2"
            />
            {compradorDocs.formato1 && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {compradorDocs.formato1.name}
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
            <p className="font-medium">1. Contrato simple de compra-venta</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleGeneralesChange(e, "contratoCompraVenta")}
              className="mt-2"
            />
            {generalesDocs.contratoCompraVenta && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {generalesDocs.contratoCompraVenta.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">2. Escritura o título de propiedad</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleGeneralesChange(e, "escrituraPropiedad")}
              className="mt-2"
            />
            {generalesDocs.escrituraPropiedad && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {generalesDocs.escrituraPropiedad.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">3. Recibo de pago del impuesto predial del año actual</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleGeneralesChange(e, "predialActual")}
              className="mt-2"
            />
            {generalesDocs.predialActual && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {generalesDocs.predialActual.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">4. Certificado de libertad de gravamen (no mayor a 2 meses)</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleGeneralesChange(e, "libertadGravamen")}
              className="mt-2"
            />
            {generalesDocs.libertadGravamen && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {generalesDocs.libertadGravamen.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">5. Avalúo pericial o ficha técnica del inmueble</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleGeneralesChange(e, "avaluoPericial")}
              className="mt-2"
            />
            {generalesDocs.avaluoPericial && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {generalesDocs.avaluoPericial.name}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium">6. Copia de cédula fiscal de la sociedad mercantil (si aplica)</p>
            <Input 
              type="file" 
              accept="application/pdf" 
              onChange={(e) => handleGeneralesChange(e, "cedulaFiscal")}
              className="mt-2"
            />
            {generalesDocs.cedulaFiscal && (
              <p className="text-sm text-green-600 mt-1">
                Archivo subido: {generalesDocs.cedulaFiscal.name}
              </p>
            )}
          </div>
        </div>
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
      
      <p className="text-sm text-gray-500 mt-4">
        Nota: Cada documento debe subirse individualmente en formato PDF. Asegúrese de que todos los archivos sean legibles.
      </p>
    </div>
  );
}