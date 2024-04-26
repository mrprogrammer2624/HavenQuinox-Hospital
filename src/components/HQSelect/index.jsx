import clsx from "clsx";
import { Select } from "antd";
import styles from "./HQSelect.module.css";
export const HQSelect = ({
  defaultValue,
  handleChange,
  isOpen,
  dropdownClass,
  selectClass,
  options,
  placeholder,
  suffixIcon,
  label,
  id,
  HQSelectLabelClassname,
  variant = "outlined",
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={clsx(styles.HQInputLabel, HQSelectLabelClassname)}
        >
          {label}
        </label>
      )}
      <Select
        popupClassName={clsx(styles.dropdown, dropdownClass)}
        open={isOpen}
        defaultValue={defaultValue}
        style={{
          width: "100%",
        }}
        className={clsx(styles.select, selectClass)}
        onChange={handleChange}
        placeholder={placeholder}
        options={options}
        suffixIcon={suffixIcon}
        variant={variant}
      />
    </div>
  );
};
