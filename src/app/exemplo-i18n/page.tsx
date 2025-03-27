"use client";

import { useAppTranslation, translate } from "@/hooks/useAppTranslation";
import Translator from "@/components/i18n/translator";
import I18n from "@/components/i18n/i18n";

export default function ExemploI18n() {
  // 1. Usando o hook dentro de um componente
  const { t } = useAppTranslation();

  // 2. String que será traduzida dinamicamente
  const mensagemTraduzida = t("home.message");

  // 3. Função estática para usar em qualquer lugar (até fora de componentes React)
  const mensagemEstatica = translate("home.message");

  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Exemplos de uso do i18n</h1>

      <div className="mb-8">
        <I18n />
      </div>

      <div className="space-y-4">
        <div className="rounded border p-4">
          <h2 className="mb-2 font-semibold">1. Usando hook (t)</h2>
          <p>{t("home.message")}</p>
        </div>

        <div className="rounded border p-4">
          <h2 className="mb-2 font-semibold">
            2. String pré-traduzida com hook
          </h2>
          <p>{mensagemTraduzida}</p>
        </div>

        <div className="rounded border p-4">
          <h2 className="mb-2 font-semibold">3. Função estática (translate)</h2>
          <p>{mensagemEstatica}</p>
        </div>

        <div className="rounded border p-4">
          <h2 className="mb-2 font-semibold">
            4. Usando componente Translator
          </h2>
          <p>
            <Translator path="home.message" />
          </p>
        </div>
      </div>
    </div>
  );
}
