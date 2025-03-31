import { theme } from "antd";

export const lightTheme = {
  algorithm: theme.getDesignToken,

  token: {
    // Cores principais - Tema Claro
    colorPrimary: "#7C3AED", // Roxo vibrante
    colorSuccess: "#10B981", // Verde esmeralda
    colorWarning: "#F59E0B", // Laranja âmbar
    colorError: "#EF4444", // Vermelho vibrante
    colorInfo: "#3B82F6", // Azul royal

    // Cores de fundo e texto - Tema Claro
    colorBgLayout: "#F8FAFC", // Fundo principal
    colorBgContainer: "#FFFFFF", // Fundo dos cards
    colorText: "#1E293B",
    colorTextSecondary: "#64748B",
    colorBorder: "#E2E8F0",
    colorBgBase: "#ef4444", // VER PQ N FUNFA
    colorTextBase: "#ff8686", // VER PQ N FUNFA

    // Ajustes de componentes
    borderRadius: 8,
    colorLink: "#7C3AED",
    colorLinkHover: "#6D28D9",
  },

  components: {
    Layout: {
      bodyBg: "#F8FAFC", // Fundo do layout
      headerBg: "#FFFFFF",
      siderBg: "#FFFFFF",
    },
    Menu: {
      itemBg: "transparent",
      itemColor: "#1E293B",
      itemSelectedColor: "#7C3AED",
      itemHoverColor: "#6D28D9",
    },
    Button: {
      colorPrimary: "#7C3AED",
      colorPrimaryHover: "#6D28D9",
      colorPrimaryActive: "#5B21B6",
    },
    Card: {
      colorBgContainer: "#FFFFFF",
      colorBorder: "#E2E8F0",
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
    },
    Input: {
      colorBorder: "#E2E8F0",
      colorPrimary: "#7C3AED",
    },
    Progress: {
      colorBgContainer: "#F1F5F9",
      colorPrimary: "#7C3AED",
    },
  },
};

export const darkTheme = {
  algorithm: theme.darkAlgorithm,

  token: {
    // Cores principais - Tema Escuro
    colorPrimary: "#A78BFA", // Roxo mais claro
    colorSuccess: "#34D399", // Verde mais claro
    colorWarning: "#FBBF24", // Laranja mais claro
    colorError: "#F87171", // Vermelho mais claro
    colorInfo: "#60A5FA", // Azul mais claro

    // Cores de fundo e texto - Tema Escuro
    colorBgLayout: "#111827", // Fundo principal escuro
    colorBgContainer: "#1F2937", // Fundo dos cards escuro
    colorText: "#F9FAFB",
    colorTextSecondary: "#D1D5DB",
    colorBorder: "#374151",
    colorItemBg: "#ef4444",
    colorTextBase: "#ff8686",

    // Ajustes de componentes
    borderRadius: 8,
    colorLink: "#A78BFA",
    colorLinkHover: "#8B5CF6",
  },
  components: {
    Layout: {
      bodyBg: "#111827", // Fundo do layout escuro
      headerBg: "#1F2937",
      siderBg: "#1F2937",
    },
    Menu: {
      itemBg: "transparent",
      itemColor: "#F9FAFB",
      itemSelectedColor: "#A78BFA",
      itemHoverColor: "#8B5CF6",
    },
    Button: {
      colorPrimary: "#A78BFA",
      colorPrimaryHover: "#8B5CF6",
      colorPrimaryActive: "#7C3AED",
    },
    Card: {
      colorBgContainer: "#1F2937",
      colorBorder: "#374151",
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.3)",
    },
    Input: {
      colorBorder: "#374151",
      colorPrimary: "#A78BFA",
    },
    Progress: {
      colorBgContainer: "#111827",
      colorPrimary: "#A78BFA",
    },
  },
};
