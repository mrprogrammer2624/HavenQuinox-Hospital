
import React from 'react';
import { Radio, Space } from 'antd';
import styles from "./AKRadio.module.css";
import { AKClsx } from '@utils';
export const AKRadio = ({
  direction,
  defaultValue,
  radioItems,
  radioClass,
  buttonStyle,
  handleChange
}) => {
  return (<>
    <Radio.Group
      name="radiogroup"
      defaultValue={defaultValue}
      className={AKClsx(styles.radioGroup, radioClass)}
      buttonStyle={buttonStyle}
      onChange={handleChange}
    >
      <Space
        direction={direction}
      >

        {buttonStyle && buttonStyle == "solid" ? (radioItems && radioItems.map((item, index) => (
          <Radio.Button
            value={item.value}
            key={item.name + index}
          >
            {item.value}
          </Radio.Button>
        ))) : (radioItems && radioItems.map((item, index) => (
          <Radio
            value={item.value}
            key={item.name + index}
          >
            {item.name}
          </Radio>
        )))}

      </Space>
    </Radio.Group>
  </>
  )
}


