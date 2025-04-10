"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function SignUpAction(formData: FormData) {
  try {
    const enrollmentValue = formData.get("enrollment");
    const enrollment = enrollmentValue ? parseInt(enrollmentValue as string, 10) : 0;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    
    if (isNaN(enrollment) || enrollment <= 0) {
      return { success: false, error: "Matrícula inválida" };
    }

    const existingUser = await prisma.user.findUnique({
      where: { enrollment },
    });

    if (existingUser) {
      return { success: false, error: "La matricula ya existe" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        enrollment,
        email,
        password: hashedPassword,
        name,
      },
    });

    return { success: true, userId: user.id };
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return { success: false, error: "Error al crear la cuenta" };
  }
}