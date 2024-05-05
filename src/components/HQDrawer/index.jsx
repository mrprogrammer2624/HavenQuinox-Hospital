import clsx from "clsx";
import { Drawer } from "antd";
import styles from "./HQDrawer.module.css";
export const HQDrawer = ({
  handleClose,
  setOpen,
  children,
  title,
  customClass,
  placement,
  closeIcon,
  size,
  ...rest
}) => {
  return (
    <Drawer
      title={title}
      onClose={handleClose}
      open={setOpen}
      className={clsx(styles.HQDrawer, customClass)}
      placement={placement}
      closeIcon={closeIcon}
      size={size}
      {...rest}
    >
      {children}
    </Drawer>
  );
};
