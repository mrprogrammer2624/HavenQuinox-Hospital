import clsx from "clsx";
import { Rate } from "antd";
import styles from "./HQRating.module.css";
export const AKRating = ({
  value,
  defaultValue,
  character,
  allowClear,
  allowHalf,
  tooltips,
  handleChange,
  AKRatingClassname,
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
      className={clsx(styles.HQRating, AKRatingClassname)}
      {...rest}
    />
  );
};
