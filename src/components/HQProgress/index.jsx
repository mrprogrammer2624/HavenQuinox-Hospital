import { Progress } from "antd";
import styles from "./HQProgress.module.css";
import clsx from "clsx";

export const HQProgress = ({
  percent = 45,
  status,
  setInfo = true,
  type,
  customClass,
  strokeColor,
  size,
}) => {
  return (
    <Progress
      percent={percent}
      showInfo={setInfo}
      status={status}
      type={type}
      className={clsx(styles.progress, customClass)}
      strokeColor={strokeColor}
      size={size}
    />
  );
};
