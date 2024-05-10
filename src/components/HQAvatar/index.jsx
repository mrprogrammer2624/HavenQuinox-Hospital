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
  icon,
  bg,
  img,
  parentAvatar,
  children,
}) => {
  return (
    <>
      {!single ? (
        <Avatar.Group className={parentAvatar} shape={shape}>
          {data &&
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
                    imgContain && styles.imgContain
                  )}
                >
                  {item.children}
                </Avatar>
              );
            })}
        </Avatar.Group>
      ) : (
        <Avatar.Group className={parentAvatar} shape={shape}>
          <Avatar
            size={size}
            style={{ backgroundColor: bg }}
            icon={icon && icon}
            src={img && img}
            className={clsx(styles.avatar, imgContain && styles.imgContain)}
          >
            {children}
          </Avatar>
        </Avatar.Group>
      )}
    </>
  );
};
