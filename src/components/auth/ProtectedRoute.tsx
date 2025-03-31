"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ThemeConfig from "../theme/themeConfig";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/login");
      return;
    }

    if (allowedRoles && !allowedRoles.includes(session.user.role)) {
      router.push("/unauthorized");
    }
  }, [session, status, router, allowedRoles]);

  if (status === "loading") {
    return (
      <div
        className="flex min-h-screen items-center justify-center"
        style={{
          backgroundColor: "transparent",
          background: "var(--background-color)",
        }}
      >
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <ThemeConfig>
        <div />
      </ThemeConfig>
    );
  }

  if (allowedRoles && !allowedRoles.includes(session.user.role)) {
    return (
      <ThemeConfig>
        <div />
      </ThemeConfig>
    );
  }

  return <ThemeConfig>{children}</ThemeConfig>;
}
