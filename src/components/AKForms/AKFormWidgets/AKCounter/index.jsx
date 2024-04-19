import { AKClsx } from '@utils';
import { useState } from 'react';
import { AKButton } from '@components';
import styles from './AKCounter.module.css';
export const AKCounter = ({
  idDecrementBtn,
  idIncrementBtn,
  idResetBtn,
  showResetBtn,
  AKCounterClassname,
}) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    count > 0 && setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0);
  }
  return (
    <div className="flex flex-col items-center">
      <div className="mb-5">
        <span className={AKClsx(styles.AKCounterValue)}>{count}</span>
      </div>
      <div className="flex items-center gap-6">
        <AKButton
          type="fill"
          size="small"
          handleClick={handleDecrement}
        >
          <i class="ri-subtract-line"></i>
        </AKButton>
        {showResetBtn && <AKButton
          type="fill"
          size="small"
          customClass="ak-counter-reset-btn"
          handleClick={handleReset}
        >Reset</AKButton>}
        <AKButton
          customClass="mr-2"
          type="fill"
          size="small"
          handleClick={handleIncrement}
        >
          <i class="ri-add-line"></i>
        </AKButton>
      </div>
    </div>
  )
}
