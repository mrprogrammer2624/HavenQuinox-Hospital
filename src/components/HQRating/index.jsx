import clsx from "clsx";
import { Rate } from "antd";
import styles from "./HQRating.module.css";
export const HQRating = ({
  value,
  defaultValue,
  character,
  allowClear,
  allowHalf,
  tooltips,
  handleChange,
  HQRatingClassName,
  ...rest
}) => {
  return (
    <Rate
      value={value}
      defaultValue={defaultValue}
      character={character}
      allowClear={allowClear}
      allowHalf={allowHalf}
      tooltips={tooltips}
      onChange={handleChange}
      className={clsx(styles.HQRating, HQRatingClassName)}
      {...rest}
    />
  );
};
