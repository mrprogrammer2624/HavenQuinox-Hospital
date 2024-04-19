"use client";
import { Layout } from "antd";
import { useState, useEffect, Suspense } from "react";
import { HQSidebar } from "@/components/HQSidebar";
import { HQHeader } from "@/components/HQHeader";
import { stylesheetsMenuItems } from "@/utility";
import { redirect, usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [marginLeft, setMarginLeft] = useState("var(--sidebar-width)");

  const pathname = usePathname();

  if (pathname === "/stylesheets") {
    redirect("stylesheets/typography");
  }

  useEffect(() => {
    {
      !collapsed
        ? setMarginLeft("var(--sidebar-width)")
        : setMarginLeft("var(--sidebar-width-collapsed)");
    }
  }, [collapsed]);

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <Layout hasSider style={{ minHeight: "100vh" }}>
        <HQSidebar
          collapsed={collapsed}
          handleSidebarCollapsed={(value) => setCollapsed(value)}
          items={stylesheetsMenuItems}
        />
        <Layout
          style={{
            marginLeft: marginLeft,
            transition: `var(--transition-all)`,
          }}
        >
          <HQHeader />
          <main>{children}</main>
        </Layout>
      </Layout>
    </Suspense>
  );
}
