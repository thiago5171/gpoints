"use client";

import React from "react";
import { useAppTranslation } from "@/hooks/useAppTranslation";
// useTranslation é um hook
// que devolve uma função de tradução (t) e a instância do i18n

// Importa as bandeiras (imagens e componente)
import Flag from "./flag";
import "@/i18n"; // Importar instância do i18next

const I18n = () => {
  const { changeLanguage, currentLanguage } = useAppTranslation();
  // Instância do i18n

  const selectedLanguage = currentLanguage;
  return (
    <div className="flags-container">
      <Flag
        alt="Bandeira do Brasil"
        image="https://upload.wikimedia.org/wikipedia/commons/9/99/Brazilian_Football_Confederation_logo.svg"
        isSelected={selectedLanguage === "pt-BR"} // Verifica o idioma escolhido
        onClick={() => changeLanguage("pt-BR")} // Troca o idioma para pt-BR
      />
      <Flag
        alt="Bandeira dos EUA"
        image="https://upload.wikimedia.org/wikipedia/commons/9/99/Brazilian_Football_Confederation_logo.svg"
        isSelected={selectedLanguage === "en-US"} // Verifica o idioma escolhido
        onClick={() => changeLanguage("en-US")} // Troca o idioma para en-US
      />
    </div>
  );
};

export default I18n;
