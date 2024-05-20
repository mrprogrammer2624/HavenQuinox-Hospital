import clsx from "clsx";
import React from "react";
import styles from "./Title.module.css";

export const Title = ({ title, children }) => {
  return (
    <div className={clsx(styles.TitleWrapper, "text-center")}>
      <h2 className="fw-700 capitalize">{title}</h2>
      <p className="h5 fw-500 lh-base text-quaternary ">{children}</p>
    </div>
  );
};
