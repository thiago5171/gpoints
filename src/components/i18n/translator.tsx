"use client";

import { useAppTranslation } from "@/hooks/useAppTranslation";

interface TranslatorProps {
  path: string;
  options?: Record<string, unknown>;
}

const Translator = ({ path, options }: TranslatorProps) => {
  const { t } = useAppTranslation();
  return t(path, options);
};

export default Translator;
