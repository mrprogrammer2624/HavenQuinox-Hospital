"use client";
import { HQBasicCard, HQButton } from "@/components";
import clsx from "clsx";
import styles from "../stylesheets.module.css";

const ButtonsPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2>Buttons</h2>
      <HQBasicCard>
        <h3 className="mb-3 capitalize">Default Buttons</h3>
        <div className={clsx(styles.buttonWrapper, "flex flex-wrap")}>
          <HQButton type="default">Default Button</HQButton>
        </div>
      </HQBasicCard>
      <HQBasicCard>
        <h3 className="mb-3 capitalize">large Buttons</h3>
        <div className={clsx(styles.buttonWrapper, "flex flex-wrap")}>
          <HQButton size="large">Default large Button</HQButton>
        </div>
      </HQBasicCard>
      <HQBasicCard>
        <h3 className="mb-3 capitalize">middle Buttons</h3>
        <div className={clsx(styles.buttonWrapper, "flex flex-wrap")}>
          <HQButton size="middle">Default middle Button</HQButton>
        </div>
      </HQBasicCard>
      <HQBasicCard>
        <h3 className="mb-3 capitalize">Full Screen Buttons</h3>
        <div className={clsx(styles.buttonWrapper, "flex flex-col")}>
          <HQButton block>Button</HQButton>
        </div>
      </HQBasicCard>
      <HQBasicCard>
        <h3 className="mb-3 capitalize">disabled Buttons</h3>
        <div className={clsx(styles.buttonWrapper, "grid")}>
          <HQButton disabled>Button(disabled)</HQButton>
        </div>
      </HQBasicCard>
    </div>
  );
};

export default ButtonsPage;
