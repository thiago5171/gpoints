import { ConfigProvider } from "antd";
import React from "react";

const ThemeConfig = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

export default ThemeConfig;
