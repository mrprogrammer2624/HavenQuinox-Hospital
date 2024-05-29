import { Dropdown } from "antd";
import styles from "./HQDropDownImg.module.css";
import Image from "next/image";
import clsx from "clsx";
export const HQDropDownImg = ({ items, name, image, email, imageAlt }) => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow
      overlayClassName={styles.customDropdown}
      className={styles.dropDwn}
    >
      <button className={clsx(styles.dropDwnButton, "flex gap-5")}>
        <div className={clsx(styles.dropdownImgContainer)}>
          <Image src={image} width={150} height={150} alt={imageAlt} />
        </div>
        <div className={styles.dropDwnContent}>
          <div className={clsx(styles.dropDwnTitle, "block text-left mb-1")}>
            {name}
          </div>
          <div className={clsx(styles.dropDwnSubTitle, "block  text-left")}>
            {email}
          </div>
        </div>
      </button>
    </Dropdown>
  );
};
