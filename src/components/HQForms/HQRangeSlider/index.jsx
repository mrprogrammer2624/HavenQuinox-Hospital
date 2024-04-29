import { InputNumber, Slider } from "antd";
import styles from "./HQRangeSlider.module.css";
import clsx from "clsx";

export const HQRangeSlider = ({
  defaultValue,
  minValue,
  maxValue,
  disabled,
  marks,
  steps,
  handleChange,
  HQRangeSliderClassName,
  showInput,
  inputValue,
  ...rest
}) => {
  return (
    <div>
      <Slider
        marks={marks}
        defaultValue={defaultValue}
        min={minValue}
        max={maxValue}
        step={steps}
        onChange={handleChange}
        className={clsx(styles.HQRangeSlider, HQRangeSliderClassName)}
        {...rest}
      />
      {showInput && (
        <InputNumber
          className={styles.HQSliderInputNumber}
          onChange={handleChange}
          value={inputValue}
        />
      )}
    </div>
  );
};
