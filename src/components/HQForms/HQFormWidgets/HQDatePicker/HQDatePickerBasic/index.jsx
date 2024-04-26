import { DatePicker } from "antd";
import styles from "./DatePickerBasic.module.css";
import clsx from "clsx";

export const HQDatePickerBasic = ({
  id,
  label,
  labelClassname,
  HQDatePickerClassname,
  handleChange,
  placeholder,
  pickerType,
  suffixIcon,
  status,
  errorMessage,
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={clsx(styles.HQRangePickerLabel, labelClassname)}
        >
          {label}
        </label>
      )}
      <DatePicker
        id={id}
        status={status}
        picker={pickerType}
        placeholder={placeholder}
        className={clsx(styles.HQDatePickerBasic, HQDatePickerClassname)}
        onChange={handleChange}
        // suffixIcon={suffixIcon}
        {...rest}
      />
      {status === "error" && errorMessage && (
        <p className="mb-0 mt-1 text-red">{errorMessage}</p>
      )}
    </div>
  );
};
