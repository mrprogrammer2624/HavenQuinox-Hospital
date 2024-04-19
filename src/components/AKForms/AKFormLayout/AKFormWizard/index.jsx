import React, { useState } from 'react';
import { AKBasicCard, AKButton} from '@components';
import { message, Steps, theme } from 'antd';
import { AKClsx } from '@utils';
import styles from './AKFormWizard.module.css';


export const AKFormWizard = ({
  cardTitle,
  stepsData,
  stepsButton,
  stepsCurrent,
  stepItems,
  stepSize,
  stepVertical,
  stepProgressDot,
  stepOnChange
}) => {
  
  // content part
  const { token } = theme.useToken();

  const contentStyle = {
    minHeight: '200px',
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    padding: 16
  };
  return (
    <AKBasicCard cardTitle={cardTitle} customClass={AKClsx(styles.stepFormCardWrap)}>
        <Steps current={stepsCurrent} onChange={stepOnChange} items={stepItems} size={stepSize} direction={stepVertical} progressDot={stepProgressDot} className={AKClsx(styles.stepHead)}/>
        <div style={contentStyle} className={AKClsx(styles.stepContentBody)}>{stepsData}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
            {stepsButton}
        </div>
    </AKBasicCard>
  )
}
