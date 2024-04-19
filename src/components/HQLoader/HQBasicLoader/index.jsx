import { Spin } from "antd";
import styles from "./HQBasicLoader.module.css";
import clsx from "clsx";
export const AKBasicLoader = ({ size, AKLoaderClassname, ...rest }) => {
  return (
    <Spin
      size={size}
      className={clsx(styles.HQBasicLoader, AKLoaderClassname)}
      {...rest}
    />
  );
};
