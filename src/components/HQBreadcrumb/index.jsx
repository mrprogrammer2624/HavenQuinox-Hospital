import { Breadcrumb } from "antd";
import styles from "./HQBreadcrumb.module.css";
import clsx from "clsx";
export const HQBreadcrumb = ({
  items,
  separator,
  HQBreadcrumbClassname,
  ...rest
}) => {
  return (
    <Breadcrumb
      items={items}
      separator={separator}
      className={clsx(styles.HQBreadcrumb, HQBreadcrumbClassname)}
      {...rest}
    />
  );
};
