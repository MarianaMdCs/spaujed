import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { v4 as uuid } from "uuid";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import { encode } from "next-auth/jwt";
import bcrypt from "bcryptjs";

const adapter = PrismaAdapter(prisma);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter,
  providers: [
    Credentials({
      credentials: {
        enrollment: {},
        password: {},
      },
      authorize: async (credentials) => {
        // Convertir enrollment a número entero
        const enrollmentValue = credentials?.enrollment;
        const enrollment = enrollmentValue ? parseInt(enrollmentValue as string, 10) : 0;
        
        if (isNaN(enrollment) || enrollment <= 0) {
          throw new Error("Matrícula inválida");
        }
        
        const user = await prisma.user.findUnique({
          where: {
            enrollment,
          },
        });

        if (!user) {
          throw new Error("Credenciales inválidas");
        }

        // Verificar la contraseña con bcrypt
        const isPasswordValid = await bcrypt.compare(
          credentials?.password as string,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Credenciales inválidas");
        } else {
          console.log("User found");
        }

        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true;
      }
      return token;
    },
  },

  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = uuid();

        if (!params.token.sub) {
          throw new Error("No subject");
        }
        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        });

        if (!createdSession) {
          throw new Error("No session created");
        }

        return sessionToken;
      }
      return encode(params);
    },
  },
});
