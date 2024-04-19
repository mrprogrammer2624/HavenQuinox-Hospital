import clsx from "clsx";
import styles from "./HQCreativeLoader.module.css";

export const AKCreativeLoader = ({ size }) => {
  return (
    <>
      <div
        className={clsx(styles.HQCreativeLoader, {
          [styles.smallLoader]: size === "small",
          [styles.largeLoader]: size === "large",
        })}
      ></div>
    </>
  );
};
