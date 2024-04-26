"use client";
import { HQDatePickerBasic, HQRangePicker, HQBasicCard } from "@/components";
import styles from "../stylesheets.module.css";
import clsx from "clsx";

const HQDatePickerPage = () => {
  return (
    <div>
      <h3 className="mb-5 title-color">Date Picker Types:</h3>
      <div className={clsx(styles.HQDatePickerCardWrapper)}>
        <HQBasicCard header cardTitle={"Basic DatePicker:"}>
          <HQDatePickerBasic id="HQDatePickerBasic" placeholder="Select Date" />
        </HQBasicCard>
        <HQBasicCard header cardTitle={"DatePicker Type Month:"}>
          <HQDatePickerBasic
            id="HQDatePickerMonth"
            placeholder="Select Month"
            pickerType="month"
          />
        </HQBasicCard>
        <HQBasicCard header cardTitle={"DatePicker Type Week:"}>
          <HQDatePickerBasic
            id="HQDatePickerWeek"
            placeholder="Select Week"
            pickerType="week"
          />
        </HQBasicCard>
        <HQBasicCard header cardTitle={"DatePicker Type Year:"}>
          <HQDatePickerBasic
            id="HQDatePickerYear"
            placeholder="Select Year"
            pickerType="year"
          />
        </HQBasicCard>
        <HQBasicCard header cardTitle={"DatePicker With Label:"}>
          <HQDatePickerBasic
            id="HQDatePickerWithLabel"
            placeholder="Select Date"
            label="Select Date:"
          />
        </HQBasicCard>
        <HQBasicCard header cardTitle={"DatePicker With Error:"}>
          <HQDatePickerBasic
            id="HQDatePickerWithError"
            placeholder="Select Date"
            status="error"
            errorMessage="Please select date"
          />
        </HQBasicCard>
        <HQBasicCard header cardTitle={"Range Picker:"}>
          <HQRangePicker />
        </HQBasicCard>
        <HQBasicCard header cardTitle={"Range Picker:"}>
          <HQRangePicker label="Range Picker With Label" />
        </HQBasicCard>
        <HQBasicCard header cardTitle={"Range Picker:"}>
          <HQRangePicker
            status="error"
            errorMessage="Please Select Date Range"
          />
        </HQBasicCard>
      </div>
    </div>
  );
};

export default HQDatePickerPage;
