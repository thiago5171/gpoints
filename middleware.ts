import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Rotas protegidas por role
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token?.role !== "ADMIN"
    ) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (
      req.nextUrl.pathname.startsWith("/owner") &&
      req.nextauth.token?.role !== "OWNER"
    ) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

// Configurar quais rotas serão protegidas
export const config = {
  matcher: [
    // Rotas que requerem autenticação
    "/dashboard/:path*",
    "/admin/:path*",
    "/owner/:path*",
    "/employee/:path*",
    "/profile/:path*",
  ],
};
