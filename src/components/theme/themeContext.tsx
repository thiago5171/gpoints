"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { lightTheme, darkTheme } from "@/styles/theme";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const newTheme = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light",
    );
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      document.documentElement.setAttribute(
        "data-theme",
        newTheme ? "dark" : "light",
      );
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
