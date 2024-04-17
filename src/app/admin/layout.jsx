"use client";
import { Layout } from "antd";
import { useState, useEffect } from "react";
import styles from "./admin.module.css";
import { HQSidebar } from "@/components/HQSidebar";
import { HQHeader } from "@/components/HQHeader";
import { AdminMenuItems } from "@/utility";

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
          items={AdminMenuItems}
        />
        <Layout
          style={{
            marginLeft: marginLeft,
            transition: `var(--transition-all)`,
          }}
          className={styles.AKContentLayout}
        >
          <HQHeader />
          <main className={styles.AKMainContent}>{children}</main>
        </Layout>
      </Layout>
    </>
  );
}
