import clsx from "clsx";
import { Collapse } from "antd";
import styles from "./HQAccordion.module.css";

export const HQAccordion = ({
  items,
  size,
  defaultActiveKey,
  HQAccordionClassName,
  expandIcon,
  expandIconPosition,
  ...rest
}) => {
  return (
    <Collapse
      accordion
      items={items}
      defaultActiveKey={defaultActiveKey}
      size={size}
      className={clsx(styles.HQAccordion, HQAccordionClassName)}
      expandIcon={expandIcon}
      expandIconPosition={expandIconPosition}
      {...rest}
    />
  );
};
