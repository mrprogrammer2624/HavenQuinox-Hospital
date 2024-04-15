import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import styles from "./HQSidebar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const HQSidebar = ({
  handleSidebarCollapsed,
  collapsed,
  items,
  ...rest
}) => {
  const router = useRouter();
  let subMenuName = [];

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
      className={styles.AKSidebar}
      collapsedWidth="var(--sidebar-width-collapsed)"
      {...rest}
    >
      <div className={styles.AKSidebarLogoWrapper}>
        <Link href={"/"} className={styles.AKSidebarLogo}>
          Logo Here
        </Link>
      </div>
      <Menu
        mode="inline"
        items={items}
        className={styles.AKSidebarMenu}
        selectedKeys={
          subMenuName.length !== 0 ? subMenuName : selectMenuItem.length !== 0
        }
        onSelect={({ key }) => {
          router.push(key);
        }}
      />
    </Sider>
  );
};
