"use client";
import React, { useEffect, useState } from "react";
import { Title } from "../";
import styles from "./Faq.module.css";
import Image from "next/image";
import { FaqDoctor } from "@/assets/images";
import clsx from "clsx";
import { HQAccordion } from "@/components";
import { Icons, accordionItems } from "@/utility";
import { axiosApi } from "@/axiosApi";
import axios from "axios";

export const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const fetchFaqData = async () => {
    try {
      // setLoading(true);
      // const response = await axiosApi({
      //   method: "get",
      //   url: `/admin/faq/viewFaq`,
      // });
      const response = await axios.get(
        process.env.NEXT_PUBLIC_WEB_URL + "/admin/faq/viewFaq"
      );
      alert("response.error" + response.error), setFaqData(response);
    } catch (error) {
      console.error("Error fetching Faq Data:", error);
    } finally {
      // setLoading(false);
    }
  };

  console.log(faqData);

  useEffect(() => {
    const fetchData = async () => {
      await fetchFaqData();
    };

    fetchData();
  }, []);

  return (
    <section className="bg-off-white relative">
      <div className="container">
        <Title title="FAQ&#8217;s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Title>
        <div className={clsx(styles.FaqContentWrapper, "flex justify-between")}>
          <HQAccordion
            items={accordionItems}
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
