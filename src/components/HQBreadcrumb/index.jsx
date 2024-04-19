import { Breadcrumb } from "antd";
import styles from "./HQBreadcrumb.module.css";
import clsx from "clsx";
export const AKBreadcrumb = ({
  items,
  separator,
  AKBreadcrumbClassname,
  ...rest
}) => {
  return (
    <Breadcrumb
      items={items}
      separator={separator}
      className={clsx(styles.HQBreadcrumb, AKBreadcrumbClassname)}
      {...rest}
    />
  );
};
