import clsx from "clsx";
import styles from "./HQSimpleCard.module.css";

export const HQSimpleCard = ({
  children,
  title,
  titlePosition,
  customClass,
}) => {
  const titlePositionClass =
    titlePosition == "center"
      ? "text-center"
      : titlePosition == "right"
      ? "text-right"
      : titlePosition == "left"
      ? "text-left"
      : "text-left";
  return (
    <div className={clsx(styles.card, titlePositionClass, customClass)}>
      {title && (
        <div>
          <h2 className={clsx("title-color mb-2")}>{title}</h2>
        </div>
      )}
      <div className={clsx(styles.cardBody, "text-color")}>{children}</div>
    </div>
  );
};
