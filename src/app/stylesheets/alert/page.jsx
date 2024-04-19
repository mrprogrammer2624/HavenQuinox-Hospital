"use client";
import { HQAlert, HQBasicCard } from "@/components";
import styles from "../stylesheets.module.css";
import clsx from "clsx";
const Alert = () => {
  return (
    <div>
      <h2 className="title-color mb-5">Basic Alert : </h2>
      <div className={clsx(styles.progressBarBasic, "grid")}>
        <HQBasicCard header cardTitle="Basic Alert" customClass={styles.card}>
          <HQAlert
            type="success"
            message="Basic Alert"
            handleClose={() => console.log("HQ alert close")}
          />
        </HQBasicCard>

        <HQBasicCard
          header
          cardTitle="Basic Alert with closable"
          customClass={styles.card}
        >
          <HQAlert
            type="success"
            message="Basic Alert With Closable"
            handleClose={() => console.log("HQ alert close")}
            isClosable
          />
        </HQBasicCard>

        <HQBasicCard
          header
          cardTitle="Basic Alert With Description"
          customClass={styles.card}
        >
          <HQAlert
            type="success"
            message="Lorem ipsum dolor sit"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequatur!"
            handleClose={() => console.log("HQ alert close")}
            isClosable={false}
          />
        </HQBasicCard>

        <HQBasicCard header cardTitle="Alert Types" customClass={styles.card}>
          <HQAlert
            customClass="mb-5"
            type="success"
            message="Success Text"
            handleClose={() => console.log("HQ alert close")}
            isClosable
          />
          <HQAlert
            customClass="mb-5"
            type="info"
            message="Info Text"
            handleClose={() => console.log("HQ alert close")}
            isClosable
          />
          <HQAlert
            customClass="mb-5"
            type="warning"
            message="Warning Text"
            handleClose={() => console.log("HQ alert close")}
            isClosable
          />
          <HQAlert
            customClass="mb-5"
            type="error"
            message="Error Text"
            handleClose={() => console.log("HQ alert close")}
            isClosable
          />
        </HQBasicCard>

        <HQBasicCard
          header
          cardTitle="Alert With Icons"
          customClass={styles.card}
        >
          <HQAlert
            customClass="mb-5"
            type="success"
            message="Success Text"
            handleClose={() => console.log("HQ alert close")}
            isClosable
            isIcon
          />
          <HQAlert
            customClass="mb-5"
            type="info"
            message="Info Text"
            handleClose={() => console.log("HQ alert close")}
            isClosable
            isIcon
          />
          <HQAlert
            customClass="mb-5"
            type="warning"
            message="Warning Text"
            handleClose={() => console.log("HQ alert close")}
            isClosable
            isIcon
          />
          <HQAlert
            customClass="mb-5"
            type="error"
            message="Error Text"
            handleClose={() => console.log("HQ alert close")}
            isClosable
            isIcon
          />
        </HQBasicCard>
      </div>
    </div>
  );
};

export default Alert;
