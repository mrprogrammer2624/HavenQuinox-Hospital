import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import styles from "./HQSidebar.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const HQSidebar = ({
  handleSidebarCollapsed,
  collapsed,
  items,
  ...rest
}) => {
  const router = useRouter();
  let subMenuName = [];
  const pathname = usePathname();

  let selectMenuItem = [];
  let selectItem = null;

  if (selectItem) {
    selectMenuItem.push(selectItem.key);
  }
  return (
    <Sider
      breakpoint="lg"
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
      className={styles.HQSidebar}
      collapsedWidth="var(--sidebar-width-collapsed)"
      {...rest}
    >
      <div className={styles.HQSidebarLogoWrapper}>
        <Link href={"/"} className={styles.HQSidebarLogo}>
          Logo Here
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
