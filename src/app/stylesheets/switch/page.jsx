"use client";
import { HQBasicCard, HQSwitch } from "@/components";
import styles from "../stylesheets.module.css";
import clsx from "clsx";

const SwitchPage = () => {
  return (
    <div>
      <h3 className="mb-5 title-color">Switch Types:</h3>
      <div className={clsx(styles.HQSwitchCardWrapper)}>
        <HQBasicCard header cardTitle="Basic Switch:">
          <HQSwitch
            defaultChecked
            handleChange={() => console.log("Basic Switch")}
          />
        </HQBasicCard>
        <HQBasicCard header cardTitle="Switch With Default Off:">
          <HQSwitch
            handleChange={() => console.log("Switch With Default Off")}
          />
        </HQBasicCard>
        <HQBasicCard header cardTitle="Small Switch:">
          <HQSwitch
            defaultChecked
            size={"small"}
            handleChange={() => console.log("Small Switch")}
          />
        </HQBasicCard>
        <HQBasicCard header cardTitle="Disabled Switch:">
          <HQSwitch
            defaultChecked
            disabled
            handleChange={() => console.log("Disabled Switch")}
          />
        </HQBasicCard>
        <HQBasicCard header cardTitle="Switch With Text:">
          <HQSwitch
            defaultChecked
            checkedChildren={1}
            unCheckedChildren={0}
            handleChange={() => console.log("Switch With Text")}
          />
        </HQBasicCard>
      </div>
    </div>
  );
};

export default SwitchPage;
