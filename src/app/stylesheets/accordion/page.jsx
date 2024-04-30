"use client";
import styles from "../stylesheets.module.css";
import clsx from "clsx";
import { HQAccordion, HQBasicCard } from "@/components";
import { Icons, accordionItems } from "@/utility";

const AccordionPage = () => {
  return (
    <div className={clsx(styles.HQAccordionCardWrapper, "grid")}>
      <HQBasicCard header cardTitle="Basic Accordion:">
        <HQAccordion items={accordionItems} defaultActiveKey={1} />
      </HQBasicCard>
      <HQBasicCard header cardTitle="Borderless Accordion:">
        <HQAccordion
          items={accordionItems}
          defaultActiveKey={1}
          HQAccordionClassName="borderless-accordion"
        />
      </HQBasicCard>
      <HQBasicCard header cardTitle="Accordion With Custom Position Icon:">
        <HQAccordion
          items={accordionItems}
          defaultActiveKey={1}
          expandIconPosition="end"
          HQAccordionClassName="custom-icon-accordion"
          expandIcon={({ isActive }) => (
            <span className={clsx("transition-all", isActive ? "deg-180" : "deg-0")}>
              {Icons.fillArrow}
            </span>
          )}
        />
      </HQBasicCard>
    </div>
  );
};

export default AccordionPage;
