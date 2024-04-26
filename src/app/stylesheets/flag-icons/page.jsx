"use client"
import styles from "../stylesheets.module.css";
import Image from "next/image";
import { flagIconImgData } from "@/utility";
import clsx from "clsx";

const HQFlagIcon = () => {
  return (
    <div>
      <h3 className="mb-5 title-color">Country Flags:</h3>
      <div className={clsx(styles.HQFlagCardWrapper, "grid")}>
        {flagIconImgData.map((flag, index) => {
          return (
            <div
              key={index}
              className={clsx(
                styles.HQFlagImgWrapper,
                "flex justify-center items-center"
              )}
            >
              <div className={clsx(styles.HQFlagImgCard, "overflow-hidden")}>
                <Image
                  width={1920}
                  height={1920}
                  src={flag.imgSrc}
                  alt={flag.imgAlt}
                  className="w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HQFlagIcon;
