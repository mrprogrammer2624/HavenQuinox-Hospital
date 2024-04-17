"use client";
import { HQBasicCard } from "@/components";
import styles from "./HQColors.module.css";
import { Col, Row } from "antd";
import clsx from "clsx";
import { HQColorsWrapper, styleSheetsColorsPrimaryShades } from "@/utility";

const HQColors = () => {
  return (
    <div>
      <h2 className="title-color mb-5">Colors in different level:</h2>
      <div className="grid gap-5">
        {HQColorsWrapper?.map((content, index) => (
          <HQBasicCard key={index}>
            <h3 className="mb-3 capitalize">{content.title}</h3>
            <div className={clsx(styles.colorsGridWrapper, "grid")}>
              {content.styleSheetsColors?.map((content, index) => (
                <div key={index}>
                  <div
                    style={{
                      backgroundColor: content.color,
                    }}
                    className={clsx(styles.colorsGridBox)}
                  ></div>
                  <p className="text-center capitalize fw-700 mt-1">
                    {content.name}
                    <br/>
                    {content.code}
                  </p>
                </div>
              ))}
            </div>
          </HQBasicCard>
        ))}
      </div>
    </div>
  );
};

export default HQColors;
