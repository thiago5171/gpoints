"use client";

import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-red-600">
          Acesso Não Autorizado
        </h1>
        <p className="mb-6 text-gray-600">
          Você não tem permissão para acessar esta página.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/")}
            className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            Voltar ao Início
          </button>
          <button
            onClick={() => router.back()}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
