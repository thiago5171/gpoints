import NextAuth from "next-auth/next";
import { authOptions } from "./authOptions";

// Corrigir a exportação para funções GET e POST
// esljint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const GET = handler;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const POST = handler;
