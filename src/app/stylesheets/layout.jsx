"use client";

import { Layout } from "antd";
import { useState, useEffect } from "react";
import { HQSidebar } from "@/components/HQSidebar";
import { HQHeader } from "@/components/HQHeader";
import styles from "./admin.module.css";
import { stylesheetsMenuItems } from "@/utility";

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [marginLeft, setMarginLeft] = useState("var(--sidebar-width)");

  useEffect(() => {
    {
      !collapsed
        ? setMarginLeft("var(--sidebar-width)")
        : setMarginLeft("var(--sidebar-width-collapsed)");
    }
  }, [collapsed]);

  return (
    <>
      <Layout hasSider style={{ minHeight: "100vh" }}>
        <HQSidebar
          collapsed={collapsed}
          handleSidebarCollapsed={(value) => setCollapsed(value)}
          items={stylesheetsMenuItems}
        />
        <Layout
          style={{ marginLeft: marginLeft }}
          className={styles.AKContentLayout}
        >
          <HQHeader />
          <main>{children}</main>
        </Layout>
      </Layout>
    </>
  );
}
