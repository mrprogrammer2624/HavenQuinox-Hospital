"use client";
import { Title } from "../";
import styles from "./Faq.module.css";
import Image from "next/image";
import { FaqDoctor } from "@/assets/images";
import clsx from "clsx";
import { HQAccordion } from "@/components";
import { Icons } from "@/utility";
import { GetDataHook } from "@/hook";

export const Faq = () => {
  const faqParams = {
    url: "/admin/faq/viewFaq",
    tokenName: "adminToken",
  };

  const [getData] = GetDataHook(faqParams);

  const modifiedData = getData.map((item) => ({
    _id: item._id,
    label: item.title,
    children: item.content,
    isActive: item.isActive,
    currentDate: item.currentDate,
    updateDate: item.updateDate,
    __v: item.__v,
  }));

  return (
    <section className="bg-off-white relative">
      <div className="container">
        <Title title="FAQ&#8217;s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Title>
        <div className={clsx(styles.FaqContentWrapper, "flex justify-between")}>
          <HQAccordion
            items={modifiedData}
            defaultActiveKey={1}
            expandIconPosition="end"
            HQAccordionClassName="faq-icon-accordion w-full"
            expandIcon={({ isActive }) => (
              <span
                className={clsx(
                  "transition-all",
                  isActive ? "deg-180" : "deg-0"
                )}
              >
                {Icons.fillArrow}
              </span>
            )}
          />
          <div className={clsx(styles.faqLeftSideImage, "relative")}>
            <Image
              width={"100%"}
              height={"100%"}
              alt="images"
              src={FaqDoctor}
              className="absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
