import clsx from "clsx";
import styles from "./HQRangePicker.module.css";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

export const HQRangePicker = ({
  id,
  label,
  labelClassname,
  HQRangePickerClassname,
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
          className={clsx(styles.HQRangePickerLabel, labelClassname)}
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
        className={clsx(styles.HQRangePicker, HQRangePickerClassname)}
      />
      {status === "error" && errorMessage && (
        <p className="mb-0 mt-1 text-red">{errorMessage}</p>
      )}
    </div>
  );
};
