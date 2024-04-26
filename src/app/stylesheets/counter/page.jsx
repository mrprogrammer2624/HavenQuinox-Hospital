"use client";
import { HQCounter, HQBasicCard } from "@/components";
import styles from "../stylesheets.module.css";
import clsx from "clsx";

const HQCounterPage = () => {
  return (
    <>
      <h3 className="mb-5 title-color">Counter Types:</h3>
      <div className={clsx(styles.HQCounterCardWrapper)}>
        <HQBasicCard cardTitle="Basic Counter:">
          <HQCounter />
        </HQBasicCard>
        <HQBasicCard cardTitle="Counter With Reset:">
          <HQCounter showResetBtn HQCounterBtnClassName="HQ-counter-btn-card" />
        </HQBasicCard>
      </div>
    </>
  );
};

export default HQCounterPage;
