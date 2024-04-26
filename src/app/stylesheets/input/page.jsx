"use client";
import { HQInput, HQBasicCard } from "@/components";
import styles from "../stylesheets.module.css";
import { Icons } from "@/utility";
const HQInputControls = () => {
  return (
    <>
      <div className="mb-5">
        <h3 className="mb-5 title-color">Input Types:</h3>
        <div className={styles.HQInputCardsContainer}>
          <HQBasicCard header cardTitle={"Basic Input:"}>
            <HQInput />
          </HQBasicCard>
          <HQBasicCard header cardTitle={"Form input with placeholder:"}>
            <HQInput placeholder={"Enter your name"} />
          </HQBasicCard>
          <HQBasicCard header cardTitle={"Form input with label:"}>
            <HQInput
              id={"labeledInput"}
              label={"Enter Email:"}
              placeholder={"Enter your email"}
            />
          </HQBasicCard>
          <HQBasicCard header cardTitle={"Form input with prefix:"}>
            <HQInput placeholder={"Enter your name"} prefix={Icons.search} />
          </HQBasicCard>
          <HQBasicCard header cardTitle={"Type text:"}>
            <HQInput type="text" placeholder={"Text"} />
          </HQBasicCard>
          <HQBasicCard header cardTitle={"Type number:"}>
            <HQInput type="number" placeholder={"Number"} />
          </HQBasicCard>
          <HQBasicCard header cardTitle={"Type email:"}>
            <HQInput type="email" placeholder={"email@xyz.com"} />
          </HQBasicCard>
          <HQBasicCard header cardTitle={"Type tel:"}>
            <HQInput type="tel" placeholder={"+1234-2023-5679"} />
          </HQBasicCard>
          <HQBasicCard header cardTitle={"Type password:"}>
            <HQInput type="password" placeholder={"Confirm password"} />
          </HQBasicCard>
          <HQBasicCard
            header
            cardTitle={"Form input with error and error message:"}
          >
            <HQInput
              status={"error"}
              errorMessage={"please enter field"}
              type="tel"
              placeholder={"please enter name"}
            />
          </HQBasicCard>
        </div>
      </div>
      <div>
        <h3 className="mb-5 title-color">Input shapes:</h3>
      </div>
    </>
  );
};
export default HQInputControls;
