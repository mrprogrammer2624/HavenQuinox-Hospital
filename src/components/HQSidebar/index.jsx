"use client";
import styles from "./HQSidebar.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";
import { Layout, Menu } from "antd";
import clsx from "clsx";
import Image from "next/image";
import logo from "../../assets/images/logo/HavenQuinox.svg";

const { Sider } = Layout;

export const HQSidebar = ({
  handleSidebarCollapsed,
  collapsed,
  items,
  ...rest
}) => {
  const [marginLeft, setMarginLeft] = useState("var(--sidebar-width)");
  const router = useRouter();
  const { sidebarToggleBtn, setHeaderPaddingLeft } = useContext(ThemeContext);
  let subMenuName = [];
  const pathname = usePathname();

  let selectMenuItem = [];
  let selectItem = null;

  if (selectItem) {
    selectMenuItem.push(selectItem.key);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1600) {
        {
          !collapsed
            ? setMarginLeft("var(--sidebar-width)")
            : setMarginLeft("var(--sidebar-width-collapsed)");
        }
      } else {
        setMarginLeft(0);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [collapsed]);

  useEffect(() => {
    sidebarToggleBtn === true
      ? setHeaderPaddingLeft("75px")
      : setHeaderPaddingLeft("20px");
  }, []);
  return (
    <Sider
      breakpoint="xxl"
      collapsible
      collapsed={collapsed}
      onCollapse={handleSidebarCollapsed}
      style={{
        overflow: "auto",
        height: "calc(100vh - var(--sidebar-trigger-height))",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width={"var(--sidebar-width)"}
      className={clsx(
        styles.HQSidebar,
        sidebarToggleBtn && styles.HQSidebarToggled
      )}
      collapsedWidth="var(--sidebar-width-collapsed)"
      {...rest}
    >
      <div className={styles.HQSidebarLogoWrapper}>
        <Link
          href={"/"}
          className={clsx(styles.HQSidebarLogo, "w-full h-full")}
        >
          <Image
            src={logo}
            alt="logo"
            className={"w-full h-full"}
            width={100}
            height={100}
          />
        </Link>
      </div>
      <Menu
        mode="inline"
        items={items}
        className={styles.HQSidebarMenu}
        selectedKeys={
          subMenuName.length !== 0
            ? subMenuName
            : selectMenuItem.length !== 0
            ? selectMenuItem
            : [pathname]
        }
        onSelect={({ key }) => {
          router.push(key);
        }}
      />
    </Sider>
  );
};
