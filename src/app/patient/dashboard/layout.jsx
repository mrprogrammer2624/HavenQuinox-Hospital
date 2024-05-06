"use client";
import { Col, Layout, Row } from "antd";
import { useState, useEffect } from "react";
import { HQSidebar } from "@/components/HQSidebar";
import { HQHeader } from "@/components/HQHeader";
import { AdminMenuItems } from "@/utility";
import { usePathname } from "next/navigation";
import styles from "../../admin/admin.module.css";

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [marginLeft, setMarginLeft] = useState("var(--sidebar-width)");
  const pathname = usePathname();

  useEffect(() => {
    {
      !collapsed
        ? setMarginLeft("var(--sidebar-width)")
        : setMarginLeft("var(--sidebar-width-collapsed)");
    }
  }, [collapsed]);

  if (pathname !== "/admin/authentication") {
    return (
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
          className={styles.HQContentLayout}
        >
          <HQHeader />
          <div className={styles.HQMainContent}>{children}</div>
        </Layout>
      </Layout>
    );
  } else {
    return { authentication };
  }
}
