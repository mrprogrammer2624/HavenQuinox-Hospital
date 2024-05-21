import clsx from "clsx";
import React from "react";
import styles from "./title.module.css";

export const Title = ({ title, children }) => {
  return (
    <div className={clsx(styles.titleWrapper, "text-center capitalize flex flex-col gap-5 ma-auto")}>
      <h2 className="fw-700">{title}</h2>
      <p className="h5 fw-500 text-quaternary">{children}</p>
    </div>
  );
};
