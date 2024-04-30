import { Dropdown } from "antd";
import styles from "./HQDropDownImg.module.css";
import Image from "next/image";
import clsx from "clsx";
export const HQDropDownImg = ({ items }) => {
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
          <Image
            src="https://i.pravatar.cc"
            width={100}
            height={100}
            alt="pravatar"
          />
        </div>
        <div className={styles.dropDwnContent}>
          <div className={clsx(styles.dropDwnTitle, "block text-left mb-1")}>
            Json Taylor
          </div>
          <div className={clsx(styles.dropDwnSubTitle, "block  text-left")}>
            Web Designer
          </div>
        </div>
      </button>
    </Dropdown>
  );
};
