"use client";
import { Layout } from "antd";
import { useState, useEffect, useContext } from "react";
import { HQSidebar } from "@/components/HQSidebar";
import { HQHeader } from "@/components/HQHeader";
import { redirect, usePathname } from "next/navigation";
import { ThemeContext } from "@/contexts/ThemeProvider";

export const DashboardLayout = ({ children, sidebarData }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [marginLeft, setMarginLeft] = useState("var(--sidebar-width)");
  const pathname = usePathname();
  const { sidebarToggle, setHeaderPaddingLeft } = useContext(ThemeContext);

  if (pathname === "/stylesheets") {
    redirect("stylesheets/typography");
  }

  useEffect(() => {
    document.querySelector("html").dataset.sidebarShow = sidebarToggle;
  }, [sidebarToggle]);

  sidebarToggle === true
    ? setHeaderPaddingLeft("75px")
    : setHeaderPaddingLeft("20px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1600) {
        {
          !collapsed
            ? setMarginLeft("var(--sidebar-width)")
            : setMarginLeft("var(--sidebar-width-collapsed)");
        }
      } else {
        setMarginLeft("0");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [collapsed]);

  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <HQSidebar
        collapsed={collapsed}
        handleSidebarCollapsed={(value) => setCollapsed(value)}
        items={sidebarData}
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
  );
};
