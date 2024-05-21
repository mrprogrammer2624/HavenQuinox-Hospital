"use client";
import clsx from "clsx";
import React from "react";
import { Icons } from "@/utility";
import styles from "../website.module.css";
import { usePathname } from "next/navigation";

export const SubHero = ({ title }) => {
  const pathname = usePathname();
  const rePathname = pathname.slice(1);
  return (
    <section className={clsx(styles.SubHeroWrapper, "bg-primary")}>
      <div className="container flex justify-between items-center">
        <h1 className="capitalize text-white">{title}</h1>
        <ul
          className={clsx(
            styles.breadcrumbListWrapper,
            "flex items-center justify-end"
          )}
        >
          <li
            className={clsx(
              styles.breadcrumbList,
              "flex items-center fw-600 text-justify capitalize justify-start text-quaternary h4"
            )}
          >
            {Icons.rightArrow}
            Home
          </li>
          <li
            className={clsx(
              styles.breadcrumbList,
              "flex items-center fw-600 text-justify capitalize justify-start text-white h4"
            )}
          >
            {Icons.rightArrow}
            {rePathname}
          </li>
        </ul>
      </div>
    </section>
  );
};
