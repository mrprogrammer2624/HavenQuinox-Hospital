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
  status,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.selectParentClass,
        HQSelectContainerClassName,
        "relative w-full"
      )}
    >
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            styles.HQInputLabel,
            HQSelectLabelClassName,
            "absolute capitalize"
          )}
        >
          {label}
        </label>
      )}
      <Select
        popupClassName={clsx(styles.dropdown, dropdownClass)}
        open={isOpen}
        defaultValue={defaultValue}
        className={clsx(styles.select, selectClass, "h6 h-full")}
        onChange={handleChange}
        placeholder={placeholder}
        options={options}
        suffixIcon={suffixIcon}
        variant={variant}
        {...rest}
      />
      {status === "error" && errorMessage && (
        <p className="mb-0 mt-1 text-red">{errorMessage}</p>
      )}
    </div>
  );
};
