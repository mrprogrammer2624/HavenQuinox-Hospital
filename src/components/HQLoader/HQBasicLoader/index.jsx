import { Spin } from "antd";
import styles from "./HQBasicLoader.module.css";
import clsx from "clsx";
export const HQBasicLoader = ({ size, HQLoaderClassname, ...rest }) => {
  return (
    <Spin
      size={size}
      className={clsx(styles.HQBasicLoader, HQLoaderClassname)}
      {...rest}
    />
  );
};
