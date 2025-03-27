"use client";

import { useTranslation } from "react-i18next";
import "@/i18n"; // Importar instância do i18next

export const useAppTranslation = () => {
  const { t, i18n } = useTranslation();

  return {
    t,
    i18n,
    translate: (path: string, options?: Record<string, unknown>) =>
      String(t(path, options)),
    changeLanguage: (lang: string) => void i18n.changeLanguage(lang),
    currentLanguage: i18n.language,
  };
};

// Exportar também funções estáticas para uso fora de componentes React
import i18n from "@/i18n";

export const translate = (
  path: string,
  options?: Record<string, unknown>,
): string => String(i18n.t(path, options));
export const currentLanguage = () => i18n.language;
export const changeLanguage = (lang: string) => void i18n.changeLanguage(lang);
