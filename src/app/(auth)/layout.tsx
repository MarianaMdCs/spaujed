import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import "../globals.css";

export default async function authLayout({
 children
}: {
 children: React.ReactNode;
}) {
  const session = await auth();

  if (session) {
    redirect("/");
  }
  return (
    <html>
      <body>
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}

