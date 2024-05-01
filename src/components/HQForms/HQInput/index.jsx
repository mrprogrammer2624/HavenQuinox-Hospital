import { Input } from "antd";
import styles from "./HQInput.module.css";
import clsx from "clsx";

export const HQInput = ({
  HQInputClassName,
  placeholder,
  label,
  id,
  HQInputLabelClassName,
  HQInputContainerClassName,
  type,
  status,
  errorMessage,
  prefix,
  ...rest
}) => {
  return (
    <div className={HQInputContainerClassName}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(styles.HQInputLabel, HQInputLabelClassName)}
        >
          {label}
        </label>
      )}
      <Input
        status={status}
        type={type}
        id={id}
        placeholder={placeholder}
        className={clsx(styles.HQInput, HQInputClassName)}
        prefix={prefix}
        {...rest}
      />
      {status === "error" && errorMessage && (
        <p className="mb-0 mt-1 text-red">{errorMessage}</p>
      )}
    </div>
  );
};
