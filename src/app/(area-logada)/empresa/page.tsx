"use client";

import { useTheme } from "@/components/theme/themeContext";
import { BulbFilled, BulbOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Input, Space, Switch } from "antd";
import Title from "antd/es/typography/Title";

const EmpresaPage = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      <Card>
        <Space
          style={{
            width: "100%",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Title level={3} style={{ margin: 0 }}>
            Sistema de Fidelidade
          </Title>
          <Space>
            <Input.Search placeholder="Buscar..." style={{ width: 200 }} />
            <Switch
              checked={isDarkMode}
              checkedChildren={<BulbFilled />}
              unCheckedChildren={<BulbOutlined />}
              defaultChecked
              onChange={toggleTheme}
            />
            <Button
              type="text"
              icon={isDarkMode ? <BulbFilled /> : <BulbOutlined />}
              onClick={toggleTheme}
            />
            <Avatar icon={<UserOutlined />} />
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default EmpresaPage;
