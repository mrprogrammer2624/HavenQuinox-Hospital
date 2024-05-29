"use client";
import React from "react";
import { Avatar } from "antd";
import styles from "./HQAvatar.module.css";
import clsx from "clsx";

export const HQAvatar = ({
  data,
  shape = "",
  size,
  imgContain,
  single = false,
  customClass,
  icon,
  bg,
  img,
  parentAvatar,
  children,
}) => {
  return (
    <Avatar.Group className={parentAvatar} shape={shape}>
      {!single ? (
        data &&
        data.map((item, index) => {
          return (
            <Avatar
              size={size}
              style={{ backgroundColor: item.bg }}
              icon={item.icon && item.icon}
              key={"avatar" + index}
              src={item.img && item.img}
              className={clsx(
                styles.avatar,
                imgContain && styles.imgContain,
                customClass
              )}
            >
              {item.children}
            </Avatar>
          );
        })
      ) : (
        <Avatar
          size={size}
          style={{ backgroundColor: bg }}
          icon={icon && icon}
          src={img && img}
          className={clsx(
            styles.avatar,
            imgContain && styles.imgContain,
            customClass
          )}
        >
          {children}
        </Avatar>
      )}
    </Avatar.Group>
  );
};
