import styles from "./HQFlagIcon.module.css";
import Image from "next/image";
import { flagIconImgData } from "@/utility";
import clsx from "clsx";

const HQFlagIcon = () => {
  return (
    <div>
      <h3 className="mb-5 title-color">Country Flags:</h3>
      <div className={clsx(styles.AKFlagCardWrapper, "grid")}>
        {flagIconImgData.map((flag, index) => {
          return (
            <div
              key={index}
              className={clsx(
                styles.AKFlagImgWrapper,
                "flex justify-center items-center"
              )}
            >
              <div className={clsx(styles.AKFlagImgCard, "overflow-hidden")}>
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
