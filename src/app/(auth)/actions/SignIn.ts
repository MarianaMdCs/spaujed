"use server";

import { signIn } from "@/lib/auth";

export async function SignInAction(formData: FormData) {
  try {
    const enrollmentValue = formData.get("enrollment");
    const enrollment = enrollmentValue ? parseInt(enrollmentValue as string, 10) : 0;
    
    if (isNaN(enrollment) || enrollment <= 0) {
      return { success: false, error: "Matrícula inválida" };
    }
    
    await signIn("credentials", {
      enrollment,
      password: formData.get("password") as string,
      redirect: false
    });
    return { success: true };
  } catch (error) {
    console.log(error)
    return { success: false, error: "Credenciales inválidas" };
  }
}