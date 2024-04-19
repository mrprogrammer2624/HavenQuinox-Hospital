import clsx from "clsx";
import { Tooltip } from "antd";
export const HQTooltip = ({
  children,
  placement,
  title,
  arrowPlacement,
  tooltipText,
  trigger,
  customClass,
  ...rest
}) => {
  return (
    <>
      <Tooltip
        title={title}
        placement={placement}
        trigger={trigger}
        className={clsx(customClass)}
        {...rest}
      >
        {children}
      </Tooltip>
    </>
  );
};
