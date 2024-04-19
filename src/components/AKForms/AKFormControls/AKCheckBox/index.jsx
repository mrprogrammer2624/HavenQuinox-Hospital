
import { AKClsx } from "@utils";
import { Checkbox } from "antd";
import styles from "./AKCheckBox.module.css";
export const AKCheckBox = (
  {
    handleChange,
    column,
    options,
    defaultValue,
    flexReverse,
    block
  }
) => {

  return (
    <Checkbox.Group
      options={options}
      onChange={handleChange}
      className={AKClsx(styles.checkbox, column && styles.checkboxColumn, flexReverse && styles.flexReverse, block && styles.block)}
      defaultValue={[defaultValue]}
    />
  )
}
