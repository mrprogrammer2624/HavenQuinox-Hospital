import clsx from "clsx";
import styles from "./HQRangePicker.module.css";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

export const HQRangePicker = ({
  id,
  label,
  labelClassName,
  HQRangePickerClassName,
  handleChange,
  placeholder,
  suffixIcon,
  status,
  errorMessage,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={clsx(styles.HQRangePickerLabel, labelClassName)}
        >
          {label}
        </label>
      )}
      <RangePicker
        id={id}
        placeholder={placeholder}
        status={status}
        // suffixIcon={suffixIcon}
        onChange={handleChange}
        className={clsx(styles.HQRangePicker, HQRangePickerClassName)}
      />
      {status === "error" && errorMessage && (
        <p className="mb-0 mt-1 text-red">{errorMessage}</p>
      )}
    </div>
  );
};
