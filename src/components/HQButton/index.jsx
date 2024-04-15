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
  ...rest
}) => {
  return (
    <Button
      className={clsx(
        styles.button,
        customClass,
        borderSize == "md" ? styles.borderMd : styles.borderSm
      )}
      type={type}
      onClick={link ? handleNavigate : handleClick}
      block={block}
      icon={icon}
      shape={shape}
      size={size}
      {...rest}
    >
      {children}
    </Button>
  );
};
