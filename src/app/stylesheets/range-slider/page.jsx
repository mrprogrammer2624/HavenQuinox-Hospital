"use client";
import { HQBasicCard, HQRangeSlider } from "@/components";
import { useState } from "react";
import styles from "../stylesheets.module.css";
import clsx from "clsx";

const marks = {
  0: "0",
  26: "26",
  37: "37",
  100: {
    style: {
      color: "var(--kingfisher)",
    },
    label: <strong>100</strong>,
  },
};

const RangeSliderPage = () => {
  const [inputValue, setInputValue] = useState(10);
  const onChange = (newValue) => {
    setInputValue(newValue);
    console.log(newValue);
  };

  return (
    <>
      <div className={clsx(styles.HQRangeSliderCard, "grid")}>
        <HQBasicCard
          header
          cardTitle="Basic Range Slider:"
          customCardBodyClass="grid gap-4"
        >
          <HQRangeSlider defaultValue={10} />
          <HQRangeSlider range defaultValue={[10, 40]} />
        </HQBasicCard>
        <HQBasicCard
          header
          cardTitle="Range Slider with Input Number:"
          customCardBodyClass=""
        >
          <HQRangeSlider
            showInput
            handleChange={onChange}
            inputValue={inputValue}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </HQBasicCard>
        <HQBasicCard header cardTitle="Reverse Slider:" customCardBodyClass="">
          <HQRangeSlider range reverse defaultValue={[5, 20]} />
        </HQBasicCard>
        <HQBasicCard header cardTitle="Draggable Track:" customCardBodyClass="">
          <HQRangeSlider
            range={{ draggableTrack: true }}
            defaultValue={[5, 20]}
          />
        </HQBasicCard>
        <HQBasicCard
          header
          cardTitle="Multiple Handle Slider:"
          customCardBodyClass=""
        >
          <HQRangeSlider range defaultValue={[0, 15, 35]} />
        </HQBasicCard>
        <HQBasicCard
          header
          cardTitle="Graduated Slider:"
          customCardBodyClass="overflow-visible"
        >
          <h4 className="text-color">Marks: </h4>
          <HQRangeSlider marks={marks} defaultValue={40} />
          <HQRangeSlider marks={marks} range defaultValue={[15, 37]} />
          <h4 className="text-color">Marks & Steps: </h4>
          <HQRangeSlider marks={marks} step={10} defaultValue={37} />
        </HQBasicCard>
      </div>
    </>
  );
};

export default RangeSliderPage;
