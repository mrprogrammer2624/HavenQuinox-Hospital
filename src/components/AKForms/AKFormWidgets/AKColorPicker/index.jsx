import { AKClsx } from "@utils";
import { ColorPicker } from "antd";
import styles from "./AKColorPicker.module.css";
export const AKColorPicker = ({
  id,
  size,
  showText,
  handleChange,
  AKColorPickerClassname,
  ...rest
}) => {
  return (
    <ColorPicker
      id={id}
      size={size}
      showText={showText}
      onChange={handleChange}
      className={AKClsx(styles.AKColorPicker, AKColorPickerClassname)}
      defaultValue="#7367F0"
      {...rest}
    />
  )
}
