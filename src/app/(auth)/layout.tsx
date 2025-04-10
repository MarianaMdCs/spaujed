import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import "../globals.css";
import Navbar from "@/components/general/Navbar";

export default async function authLayout({
 children
}: {
 children: React.ReactNode;
}) {
  const session = await auth();

  //ESTA LEYENDO MAL EN ESTA PC EL COMO MANEJA LA REDIRECCION, EL SIGN IN DEBE SER PRIORITARIO EN LA OTRA VISTA Y ESTE SECUNDARIO PARA CUANDO UNA VEZ INICIES SESION NO PUEDAS REGRESAR AQUI
  if (session) {
    redirect("/agremiado");
  }
  return (
    <html>
      <body>
        <Navbar/>
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}

