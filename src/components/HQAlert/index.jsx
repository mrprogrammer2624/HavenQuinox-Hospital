import { Alert } from "antd";
import styles from "./HQAlert.module.css";
import clsx from "clsx";

export const HQAlert = ({
  type,
  message,
  description,
  handleClose,
  isClosable,
  customClass,
  isIcon,
}) => {
  const alertType =
    type == "default"
      ? styles.default
      : type == "success"
      ? styles.success
      : type == "info"
      ? styles.info
      : type == "warning"
      ? styles.warning
      : type == "error"
      ? styles.error
      : styles.success;

  return (
    <Alert
      type={type}
      message={message}
      description={description}
      onClose={handleClose}
      closable={isClosable}
      className={clsx(styles.alert, customClass, alertType)}
      showIcon={isIcon}
    />
  );
};
