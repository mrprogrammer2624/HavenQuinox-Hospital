import { AKClsx } from "@utils";
import { Drawer } from "antd";
import styles from "./AKDrawer.module.css";
export const AKDrawer = ({
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
    <>
      <Drawer
        title={title}
        onClose={handleClose}
        open={setOpen}
        className={AKClsx(styles.AKDrawer, customClass)}
        placement={placement}
        closeIcon={closeIcon}
        size={size}
        {...rest}
      >
        {children}
      </Drawer>
    </>
  );
};
