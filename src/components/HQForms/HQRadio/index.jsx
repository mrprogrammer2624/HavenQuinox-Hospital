import React from "react";
import { Radio, Space } from "antd";
import styles from "./HQRadio.module.css";
import clsx from "clsx";

export const HQRadio = ({
  direction,
  defaultValue,
  radioItems,
  radioClass,
  buttonStyle,
  handleChange,
}) => {
  return (
    <>
      <Radio.Group
        name="radiogroup"
        defaultValue={defaultValue}
        className={clsx(styles.radioGroup, radioClass)}
        buttonStyle={buttonStyle}
        onChange={handleChange}
      >
        <Space direction={direction}>
          {buttonStyle && buttonStyle == "solid"
            ? radioItems &&
              radioItems.map((item, index) => (
                <Radio.Button value={item.value} key={item.name + index}>
                  {item.value}
                </Radio.Button>
              ))
            : radioItems &&
              radioItems.map((item, index) => (
                <Radio value={item.value} key={item.name + index}>
                  {item.name}
                </Radio>
              ))}
        </Space>
      </Radio.Group>
    </>
  );
};
