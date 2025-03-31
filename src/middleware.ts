import Roles from "@/types/role";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const role = req.nextauth.token?.role as Roles;

    // Log para verificar as condições de redirecionamento
    if (role && role !== Roles[role]) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    // Log para verificar acesso à área admin
    if (req.nextUrl.pathname.startsWith("/admin")) {
      console.log("Role atual:", req.nextauth.token?.role);

      if (req.nextauth.token?.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }

    // Log para verificar acesso à área owner
    if (req.nextUrl.pathname.startsWith("/owner")) {
      console.log("Role atual:", req.nextauth.token?.role);

      if (req.nextauth.token?.role !== "OWNER") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token;
      },
    },
  },
);

// Configurar quais rotas serão protegidas
export const config = {
  matcher: [

    
  ],
};
