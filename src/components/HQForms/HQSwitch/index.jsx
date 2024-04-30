import { Switch } from "antd";
import styles from "./HQSwitch.module.css";
import clsx from "clsx";
export const HQSwitch = ({
  id,
  handleChange,
  HQSwitchClassName,
  size,
  checkedChildren,
  unCheckedChildren,
  ...rest
}) => {
  return (
    <div>
      <Switch
        id={id}
        className={clsx(styles.HQSwitch, HQSwitchClassName)}
        onChange={handleChange}
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
        size={size}
        {...rest}
      />
    </div>
  );
};
