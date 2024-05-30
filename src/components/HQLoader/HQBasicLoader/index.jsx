import { Spin } from "antd";
import styles from "./HQBasicLoader.module.css";
import clsx from "clsx";
export const HQBasicLoader = ({
  size = "large",
  HQLoaderClassName,
  ...rest
}) => {
  return (
    <Spin
      size={size}
      tip="Loading"
      fullscreen
      className={clsx(styles.HQBasicLoader, HQLoaderClassName)}
      {...rest}
    />
  );
};
