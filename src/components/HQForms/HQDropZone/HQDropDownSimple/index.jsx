import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./HQDropDownSimple.module.css";
import clsx from "clsx";
export const HQDropDownSimple = ({
  title,
  open,
  items,
  textOnly,
  label,
  customClass,
  placement,
  icon = <DownOutlined />,
  customDropdownMenuClass,
}) => {
  return (
    <Dropdown
      menu={{ items }}
      open={open}
      className={clsx(
        styles.dropDwn,
        textOnly && styles.textOnly,
        label && styles.label,
        customClass
      )}
      overlayClassName={clsx(styles.customDropdown, customDropdownMenuClass)}
      placement={placement}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {title}
          {icon}
        </Space>
      </a>
    </Dropdown>
  );
};
