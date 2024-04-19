import clsx from "clsx";
import { Popover } from "antd";
import styles from "./HQPopover.module.css";
export const HQPopover = ({
  content,
  children,
  title,
  trigger,
  placement,
  open,
  ...rest
}) => {
  return (
    <>
      <Popover
        content={content}
        title={title}
        trigger={trigger}
        placement={placement}
        {...rest}
        className={clsx(styles.popover)}
        overlayClassName={clsx(styles.customOverlayClass)}
        open={open}
      >
        {children}
      </Popover>
    </>
  );
};
