import { Checkbox } from "antd";
import styles from "./HQCheckBox.module.css";
import clsx from "clsx";
export const HQCheckBox = ({
  handleChange,
  column,
  options,
  defaultValue,
  flexReverse,
  block,
}) => {
  return (
    <Checkbox.Group
      options={options}
      onChange={handleChange}
      className={clsx(
        styles.checkbox,
        column && styles.checkboxColumn,
        flexReverse && styles.flexReverse,
        block && styles.block
      )}
      defaultValue={[defaultValue]}
    />
  );
};
