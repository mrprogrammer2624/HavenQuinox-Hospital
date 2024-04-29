"use client";
import { HQBasicCard, HQClipBoard } from "@/components";
import styles from "../stylesheets.module.css";
import clsx from "clsx";

const HQClipBoardPage = () => {
  return (
    <>
      <h3 className="mb-5 title-color">Clip-board Types:</h3>
      <div className={clsx(styles.HQClipBoardCardWrapper)}>
        <HQBasicCard header cardTitle="Basic Clip-board:">
          <HQClipBoard />
        </HQBasicCard>
        <HQBasicCard header cardTitle="Vertical Clip-board:">
          <HQClipBoard HQClipBoardCardClassName={"flex-col"} />
        </HQBasicCard>
      </div>
    </>
  );
};

export default HQClipBoardPage;
