import clsx from "clsx";
import { HQButton } from "@/components";
import styles from "./HQImageCard.module.css";
import Image from "next/image";

export const HQImageCard = ({
  customClass,
  cardImg,
  userImg,
  description,
  name,
  email,
  buttonTitle,
  user,
  cardImgContainerClass,
  title,
  subTitle,
  block = false,
  extraContent,
  link,
  overlayImg = false,
  imgOnly = false,
  alt,
  buttonContainerClass,
  userAlt,
}) => {
  return (
    <>
      <div className={clsx(styles.card, customClass, "flex flex-col")}>
        <div
          className={clsx(
            styles.cardImgContainer,
            cardImgContainerClass,
            overlayImg && styles.cardImgContainerOverlay
          )}
        >
          <div>
            <Image alt={alt} src={cardImg} className={styles.cardImg} />
          </div>
        </div>
        {!imgOnly && (
          <div className={clsx(styles.cardBody, "flex flex-col")}>
            <div>
              {title && <h2 className="mb-2 title-color small">{title}</h2>}
              {subTitle && (
                <h3 className="mb-5 text-color small">{subTitle}</h3>
              )}
              {user && (
                <div
                  className={clsx(
                    styles.cardUserContainer,
                    "inline-flex items-center mb-4 gap-6"
                  )}
                >
                  <span className={clsx(styles.cardUserImgContainer, "flex")}>
                    <Image
                      alt={userAlt}
                      src={userImg}
                      className={clsx(styles.cardUserImg)}
                    />
                  </span>
                  <span className="flex flex-col title-color">
                    <span className="h4 small mb-1">{name}</span>
                    <span className="h4 small">{email}</span>
                  </span>
                </div>
              )}
              {description && (
                <h4 className="title-color fw-700 mb-1">{description}</h4>
              )}
              {extraContent && extraContent}
            </div>
            {buttonTitle && (
              <div
                className={clsx(styles.HQButtonContainer, buttonContainerClass)}
              >
                <HQButton
                  customClass="mt-4"
                  type="fill"
                  handleChange={() => console.log("handleChange")}
                  size={"small"}
                  block={block}
                  link={link}
                >
                  {buttonTitle}
                </HQButton>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
