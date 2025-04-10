"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreditoLentesPage() {
  // Estado para los documentos
  const [files, setFiles] = useState({
    talonPago: null as File | null,
    actaNacimiento: null as File | null,
    credencialAlumno: null as File | null,
    ineAlumno: null as File | null,
    datosAlumno: null as File | null,
  });

  // Estado para los datos del alumno (opcional, si quieres hacerlo con inputs en lugar de PDF)
  const [alumnoData, setAlumnoData] = useState({
    facultad: "",
    matricula: "",
    semestre: "",
    tipoTramite: "",
    celularAcademico: ""
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, section: keyof typeof files) => {
    if (event.target.files && event.target.files[0]) {
      setFiles({ ...files, [section]: event.target.files[0] });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAlumnoData({ ...alumnoData, [name]: value });
  };

  const handleSubmit = () => {
    // Validar documentos requeridos
    const requiredDocs = [
      files.talonPago,
      files.actaNacimiento,
      files.credencialAlumno,
      files.ineAlumno,
      files.datosAlumno
    ];

    if (requiredDocs.some(doc => !doc)) {
      alert("Por favor, suba todos los documentos requeridos");
      return;
    }

    // Validar datos del alumno si no se subió PDF
    if (!files.datosAlumno && (
      !alumnoData.facultad || 
      !alumnoData.matricula || 
      !alumnoData.semestre || 
      !alumnoData.tipoTramite || 
      !alumnoData.celularAcademico
    )) {
      alert("Por favor, complete todos los datos del alumno o suba el PDF correspondiente");
      return;
    }

    // Aquí iría la lógica para enviar los datos al servidor
    console.log("Documentos:", files);
    console.log("Datos del alumno:", alumnoData);
    alert("Solicitud enviada correctamente");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Crédito para Lentes</h1>
      <p className="mb-6">Trámite exento de pago para académicos y alumnos de la Facultad de Ciencias Forestales.</p>

      {/* Sección Talón de Pago */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Talón de Pago Actualizado del Académico</h2>
        <Input 
          type="file" 
          accept="application/pdf" 
          onChange={(e) => handleFileChange(e, "talonPago")} 
          className="mt-4" 
        />
        {files.talonPago && (
          <p className="text-sm text-green-600 mt-2">Archivo subido: {files.talonPago.name}</p>
        )}
      </div>

      {/* Sección Acta de Nacimiento del Alumno */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Acta de Nacimiento del Alumno</h2>
        <Input 
          type="file" 
          accept="application/pdf" 
          onChange={(e) => handleFileChange(e, "actaNacimiento")} 
          className="mt-4" 
        />
        {files.actaNacimiento && (
          <p className="text-sm text-green-600 mt-2">Archivo subido: {files.actaNacimiento.name}</p>
        )}
      </div>

      {/* Sección Credencial del Alumno */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Credencial del Alumno de la Facultad</h2>
        <p className="text-sm text-gray-500">(Únicamente Facultad de Ciencias Forestales)</p>
        <Input 
          type="file" 
          accept="application/pdf" 
          onChange={(e) => handleFileChange(e, "credencialAlumno")} 
          className="mt-4" 
        />
        {files.credencialAlumno && (
          <p className="text-sm text-green-600 mt-2">Archivo subido: {files.credencialAlumno.name}</p>
        )}
      </div>

      {/* Sección INE del Alumno */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">INE del Alumno</h2>
        <Input 
          type="file" 
          accept="application/pdf" 
          onChange={(e) => handleFileChange(e, "ineAlumno")} 
          className="mt-4" 
        />
        {files.ineAlumno && (
          <p className="text-sm text-green-600 mt-2">Archivo subido: {files.ineAlumno.name}</p>
        )}
      </div>

      {/* Sección Datos del Alumno - Opción 1: Subir PDF */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold">Datos del Alumno (PDF)</h2>
        <p className="text-sm text-gray-500 mb-2">Puede subir un PDF con los datos o completar el formulario a continuación</p>
        <Input 
          type="file" 
          accept="application/pdf" 
          onChange={(e) => handleFileChange(e, "datosAlumno")} 
          className="mt-2" 
        />
        {files.datosAlumno && (
          <p className="text-sm text-green-600 mt-2">Archivo subido: {files.datosAlumno.name}</p>
        )}
      </div>

      {/* Sección Datos del Alumno - Opción 2: Formulario */}
      <div className="mb-6 border p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Formulario de Datos del Alumno</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Facultad</label>
            <Input 
              type="text" 
              name="facultad"
              value={alumnoData.facultad}
              onChange={handleInputChange}
              className="mt-1"
              placeholder="Facultad de Ciencias Forestales"
            />
          </div>

          <div>
            <label className="block font-medium">Matrícula</label>
            <Input 
              type="text" 
              name="matricula"
              value={alumnoData.matricula}
              onChange={handleInputChange}
              className="mt-1"
              placeholder="Ej: 123456"
            />
          </div>

          <div>
            <label className="block font-medium">Semestre</label>
            <Input 
              type="text" 
              name="semestre"
              value={alumnoData.semestre}
              onChange={handleInputChange}
              className="mt-1"
              placeholder="Ej: 5°"
            />
          </div>

          <div>
            <label className="block font-medium">Tipo de trámite</label>
            <select
              name="tipoTramite"
              value={alumnoData.tipoTramite}
              onChange={handleInputChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
            >
              <option value="">Seleccione una opción</option>
              <option value="Exento inscripción">Exento inscripción</option>
              <option value="Cuota interna">Cuota interna</option>
              <option value="Ambos">Ambos</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Número de celular del Académico</label>
            <Input 
              type="tel" 
              name="celularAcademico"
              value={alumnoData.celularAcademico}
              onChange={handleInputChange}
              className="mt-1"
              placeholder="Ej: 1234567890"
            />
          </div>
        </div>
      </div>

      {/* Botón para enviar documentos */}
      <div className="mt-6">
        <Button 
          className="bg-[#DC2828] text-white hover:bg-[#B02020]"
          onClick={handleSubmit}
        >
          Enviar Solicitud
        </Button>
      </div>

      {/* Nota para subir el PDF */}
      <p className="text-sm text-gray-500 mt-4">
        Nota: Puede subir los documentos en PDF o completar el formulario. Todos los campos son obligatorios.
      </p>
    </div>
  );
}