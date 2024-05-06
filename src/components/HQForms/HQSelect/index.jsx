import { Select } from "antd";
import styles from "./HQSelect.module.css";
import clsx from "clsx";

export const HQSelect = ({
  defaultValue,
  handleChange,
  isOpen,
  dropdownClass,
  selectClass,
  options,
  placeholder,
  HQSelectContainerClassName,
  suffixIcon,
  label,
  id,
  HQSelectLabelClassName,
  variant = "outlined",
}) => {
  return (
    <div className={clsx(HQSelectContainerClassName, "relative w-full")}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(styles.HQInputLabel, HQSelectLabelClassName)}
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
