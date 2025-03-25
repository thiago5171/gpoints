"use client";

import { useState } from "react";
import { api } from "@/trpc/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthTestPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Mutations do tRPC
  const { mutateAsync: login } = api.auth.login.useMutation();
  const { mutateAsync: register } = api.auth.register.useMutation();
  const { data: userData } = api.auth.me.useQuery(undefined, {
    enabled: !!session,
  });

  // Dados de teste
  const testUser = {
    email: "teste1@example.com",
    password: "senha123",
    name: "Usuário Teste",
    role: "OWNER" as const,
    companyId: 1,
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await login({
        email: testUser.email,
        password: testUser.password,
      });

      const result = await signIn("credentials", {
        email: testUser.email,
        password: testUser.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        setSuccessMessage("Login realizado com sucesso!");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await register(testUser);
      setSuccessMessage("Usuário registrado com sucesso!");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    setSuccessMessage("Logout realizado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl space-y-8 rounded-lg bg-white p-8 shadow">
        <h1 className="text-3xl font-bold">Teste de Autenticação</h1>

        {/* Status da Sessão */}
        <div className="rounded-lg bg-gray-100 p-4">
          <h2 className="text-xl font-semibold">Status da Sessão:</h2>
          <pre className="mt-2 whitespace-pre-wrap">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>

        {/* Dados do Usuário */}

        <div className="rounded-lg bg-gray-100 p-4">
          <h2 className="text-xl font-semibold">Dados do Usuário (ME):</h2>
          <pre className="mt-2 whitespace-pre-wrap">
            {JSON.stringify(userData, null, 2)}
          </pre>
        </div>

        {/* Mensagens */}
        {error && (
          <div className="rounded-lg bg-red-100 p-4 text-red-700">{error}</div>
        )}
        {successMessage && (
          <div className="rounded-lg bg-green-100 p-4 text-green-700">
            {successMessage}
          </div>
        )}

        {/* Botões de Ação */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handleRegister}
            disabled={loading}
            className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Processando..." : "Registrar Usuário Teste"}
          </button>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Processando..." : "Login com Usuário Teste"}
          </button>

          <button
            onClick={handleLogout}
            disabled={loading}
            className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Processando..." : "Fazer Logout"}
          </button>
        </div>

        {/* Dados de Teste */}
        <div className="rounded-lg bg-gray-100 p-4">
          <h2 className="text-xl font-semibold">Dados do Usuário Teste:</h2>
          <pre className="mt-2 whitespace-pre-wrap">
            {JSON.stringify(testUser, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
