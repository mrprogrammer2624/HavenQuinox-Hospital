"use client"
import { Icons } from "@/utility";
import styles from "../stylesheets.module.css";
import clsx from "clsx";

const GeneralIcons = () => {
  return (
    <>
      <h3 className="mb-5 title-color">Icons:</h3>
      <div className={clsx(styles.HQIconWrapper, "grid")}>
        {Object.entries(Icons).map((item, index) => {
          return (
            <div
              className={clsx(
                styles.HQIConCard,
                "flex flex-col gap-5 justify-center items-center"
              )}
              key={item[0] + index}
            >
              <span
                className={clsx(
                  styles.HQIcon,
                  "flex justify-center items-center"
                )}
              >
                {item[1]}
              </span>
              <span
                className={clsx(
                  "flex justify-center items-center"
                )}
              >
                {item[0]}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GeneralIcons;
