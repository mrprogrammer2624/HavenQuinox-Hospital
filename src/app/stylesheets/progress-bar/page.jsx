import { HQBasicCard } from "@/components";
import { HQProgress } from "@/components/HQProgress";
import styles from "../stylesheets.module.css";
import clsx from "clsx";

const ProgressBar = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <h2 className="title-color ">Basic Progress Bar</h2>
        <div className={clsx(styles.progressBarBasic, "grid")}>
          <HQBasicCard
            header
            cardTitle={"Progress basic"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <HQProgress percent={50} customClass="mr-4" />
          </HQBasicCard>

          <HQBasicCard
            header
            cardTitle={"Progressbar success"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <HQProgress percent={100} customClass="mr-4" />
          </HQBasicCard>

          <HQBasicCard
            header
            cardTitle={"Progressbar exception"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <HQProgress percent={50} status="exception" />
          </HQBasicCard>

          <HQBasicCard
            header
            cardTitle={"Progressbar hide info"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <HQProgress percent={50} setInfo={false} customClass="mr-4" />
          </HQBasicCard>

          <HQBasicCard
            header
            cardTitle={"Gradient color progress"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <HQProgress
              percent={50}
              customClass="mr-4"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
          </HQBasicCard>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="title-color">Circle Progress Bar</h2>
        <div className={clsx(styles.progressBarBasic, "grid")}>
          <HQBasicCard
            header
            cardTitle={"Circle Progress basic"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <HQProgress type="circle" percent={50} customClass="mr-4" />
          </HQBasicCard>

          <HQBasicCard
            header
            cardTitle={"Circle Progressbar success"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <HQProgress type="circle" percent={100} customClass="mr-4" />
          </HQBasicCard>

          <HQBasicCard
            header
            cardTitle={"Circle Progressbar exception"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <HQProgress type="circle" percent={50} status="exception" />
          </HQBasicCard>

          <HQBasicCard
            header
            cardTitle={"Gradient Circle Progress Bar :  "}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <HQProgress
              type="circle"
              percent={85}
              customClass="mr-4"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
          </HQBasicCard>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="title-color">Dashboard Type Circle Progress Bar</h2>
        <div className="grid">
          <HQBasicCard
            header
            cardTitle={"Circle Progress Bar dashboard type :  "}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <HQProgress
              type="dashboard"
              percent={85}
              customClass="mr-4"
              strokeColor={{
                "0%": "#87d068",
                "50%": "#ffe58f",
                "100%": "#ffccc7",
              }}
            />
          </HQBasicCard>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
