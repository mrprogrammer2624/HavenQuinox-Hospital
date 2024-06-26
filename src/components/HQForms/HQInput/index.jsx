import { Input } from "antd";
import styles from "./HQInput.module.css";
import clsx from "clsx";
import { HQButton } from "@/components";

export const HQInput = ({
  HQInputClassName,
  placeholder,
  handleChange,
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
    <div className={clsx(HQInputContainerClassName, "relative w-full")}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            styles.HQInputLabel,
            HQInputLabelClassName,
            "absolute capitalize"
          )}
        >
          {label}
        </label>
      )}
      <Input
        status={status}
        type={type}
        id={id}
        placeholder={placeholder}
        className={clsx(styles.HQInput, HQInputClassName, "h6 h-full")}
        prefix={prefix}
        onChange={handleChange}
        {...rest}
      />
      {status === "error" && errorMessage && (
        <p className="mb-0 mt-1 text-red">{errorMessage}</p>
      )}
    </div>
  );
};

export const HQInputPassword = ({
  placeholder,
  HQInputClassName,
  handleChange,
  label,
  id,
  HQInputLabelClassName,
  HQInputContainerClassName,
  type,
  status,
  errorMessage,
  prefix,
  visibilityToggle,
  iconRender,
  ...rest
}) => {
  return (
    <div className={clsx(HQInputContainerClassName, "relative w-full")}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            styles.HQInputLabel,
            HQInputLabelClassName,
            "absolute capitalize"
          )}
        >
          {label}
        </label>
      )}
      <Input.Password
        status={status}
        type={type}
        id={id}
        placeholder={placeholder}
        className={clsx(styles.HQInput, HQInputClassName, "h6")}
        prefix={prefix}
        onChange={handleChange}
        visibilityToggle={visibilityToggle}
        iconRender={iconRender}
        {...rest}
      />
      {status === "error" && errorMessage && (
        <p className="mb-0 mt-1 text-red">{errorMessage}</p>
      )}
    </div>
  );
};

export const HQInputFile = ({ handleChange, children, id }) => {
  return (
    <label className={styles.HQInputFile} htmlFor={id}>
      {children}
      <HQInput
        type="file"
        id={id}
        HQInputClassName="hidden"
        onChange={handleChange}
      />
    </label>
  );
};
