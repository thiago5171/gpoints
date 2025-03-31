import React from "react";
import { TRPCReactProvider } from "@/trpc/react";
import { Providers } from "@/app/api/auth/providers";
//import Roles from "@/types/role";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Roles from "@/types/role";
import { ThemeProvider } from "@/components/theme/themeContext";
//import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

// Definição das cores do tema personalizado
/*
const themeConfig = {
  token: {
    // Cor principal
    colorPrimary: "#7C3AED", // Roxo vibrante

    // Cores secundárias
    colorBgLayout: "#F3F4F6", // Cinza claro para fundos
    colorText: "#1F2937", // Cinza escuro para textos
    colorSuccess: "#10B981", // Verde para sucesso
    colorError: "#EF4444", // Vermelho para alertas

    // Outros ajustes para harmonizar com a cor principal
    colorInfo: "#7C3AED",
    colorWarning: "#FBBF24",

    // Raio de borda
    borderRadius: 6,

    // Algoritmo de cores para gerar variações
    algorithm: theme.defaultAlgorithm,
  },
};

*/

export default function EmpresaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <ThemeProvider>
        <TRPCReactProvider>
          <Providers>
            <div
              style={{
                minHeight: "100vh",
                background: "var(--background-color)",
              }}
            >
              <ProtectedRoute
                allowedRoles={[Roles.OWNER, Roles.ADMIN, Roles.EMPLOYEE]}
              >
                <Providers>{children}</Providers>
              </ProtectedRoute>{" "}
            </div>
          </Providers>
        </TRPCReactProvider>
      </ThemeProvider>
    </body>
  );
}
