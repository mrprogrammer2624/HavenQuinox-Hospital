import { AKClsx } from "@utils"
import { DatePicker } from "antd"
import styles from "./DatePickerBasic.module.css"

export const AKDatePickerBasic = ({
  id,
  label,
  labelClassname,
  AKDatePickerClassname,
  handleChange,
  placeholder,
  pickerType,
  suffixIcon,
  status,
  errorMessage,
  ...rest
}) => {
  return (
    <>
      <div>
        {label && <label
          htmlFor={id}
          className={AKClsx(styles.AKRangePickerLabel, labelClassname)}
        >
          {label}
        </label>}
        <DatePicker
          id={id}
          status={status}
          picker={pickerType}
          placeholder={placeholder}
          className={AKClsx(styles.AKDatePickerBasic, AKDatePickerClassname)}
          onChange={handleChange}
          // suffixIcon={suffixIcon}
          {...rest}
        />
        {status === "error" && errorMessage && <p className="mb-0 mt-1 text-red">{errorMessage}</p>}
      </div>
    </>
  )
}