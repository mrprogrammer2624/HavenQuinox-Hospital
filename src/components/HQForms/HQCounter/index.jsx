"use client";
import { useState } from "react";
import { HQButton } from "@/components";
import styles from "./HQCounter.module.css";
import clsx from "clsx";
export const HQCounter = ({
  idDecrementBtn,
  idIncrementBtn,
  idResetBtn,
  HQCounterBtnClassName,
  showResetBtn,
}) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="mb-5">
        <span className={clsx(styles.HQCounterValue)}>{count}</span>
      </div>
      <div className="flex items-center gap-6">
        <HQButton type="fill" size="small" handleClick={handleDecrement}>
          <i class="ri-subtract-line"></i>
        </HQButton>
        {showResetBtn && (
          <HQButton
            type="fill"
            size="small"
            customClass="HQ-counter-reset-btn"
            handleClick={handleReset}
          >
            Reset
          </HQButton>
        )}
        <HQButton
          customClass="mr-2"
          type="fill"
          size="small"
          handleClick={handleIncrement}
        >
          <i class="ri-add-line"></i>
        </HQButton>
      </div>
    </div>
  );
};
