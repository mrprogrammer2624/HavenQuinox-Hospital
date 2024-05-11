import { Button } from "antd";
import styles from "./HQButton.module.css";
import clsx from "clsx";

export const HQButton = ({
  customClass,
  type,
  handleClick,
  borderSize,
  children,
  block,
  icon,
  shape,
  size,
  link,
  disabled,
  ...rest
}) => {
  return (
    <Button
      className={clsx(
        styles.button,
        customClass,
        borderSize == "md" ? styles.borderMd : styles.borderSm
      )}
      type="default"
      onClick={handleClick}
      block={block}
      disabled={disabled}
      icon={icon}
      shape={shape}
      size={size}
      {...rest}
    >
      {children}
    </Button>
  );
};
