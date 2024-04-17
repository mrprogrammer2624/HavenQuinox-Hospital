import { Icons } from "@/utility";
import styles from "./GeneralIcons.module.css";
import clsx from "clsx";

const GeneralIcons = () => {
  return (
    <>
      <h3 className="mb-5 title-color">Icons:</h3>
      <div className={clsx(styles.AKIconWrapper, "grid")}>
        {Object.keys(Icons).map((key, index) => {
          return (
            <div
              className={clsx(
                styles.AKIConCard,
                "flex justify-center items-center"
              )}
              key={index}
            >
              <span
                className={clsx(
                  styles.AKIcon,
                  "flex justify-center items-center"
                )}
              >
                {Icons[key]}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GeneralIcons;
