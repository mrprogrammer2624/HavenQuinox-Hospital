import styles from "./HQBasicCard.module.css";
import clsx from "clsx";

export const HQBasicCard = ({
  cardTitle,
  cardExtraContent,
  customClass,
  children,
  customCardBodyClass,
  header = false,
  removeCardBodySpacing,
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        customClass,
        removeCardBodySpacing && styles.removeCardSpacing
      )}
    >
      <div
        className={clsx(
          styles.cardHeader,
          "items-center justify-between",
          header == false ? "hidden" : "flex"
        )}
      >
        <span className={clsx("fw-800", styles.AKCardTitle)}>{cardTitle}</span>
        <span className={clsx(styles.cardExtraContent, "text-color")}>
          {cardExtraContent}
        </span>
      </div>
      <div
        className={clsx(styles.cardBody, "scroll-hover", customCardBodyClass)}
      >
        {children}
      </div>
    </div>
  );
};

export default HQBasicCard;
