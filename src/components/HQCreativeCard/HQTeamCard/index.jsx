import { HQAvatar, HQBasicCard, HQButton } from "@/components";
import React from "react";
import styles from "./HQTeamCard.module.css";
import clsx from "clsx";
import { Tag } from "antd";
import { Icons } from "@/utility";

export const HQTeamCard = ({ img, departnment, name, city, country }) => {
  return (
    <HQBasicCard customCardBodyClass={clsx(styles.cardWrapper, "grid")}>
      <div>
        <Tag color="processing">{departnment}</Tag>
      </div>
      <div className="flex items-center gap-12">
        <div className="img-wrapper">
          <HQAvatar single img={img} size={120} />
        </div>
        <div>
          <div className="mb-4 flex flex-col gap-2">
            <h3 className="fw-600">{name}</h3>
            <h5 className="text-secondary fw-600">MDS - Periodontology</h5>
          </div>
          <h5 className="text-quaternary fw-500">
            {Icons.location}
            {city}
          </h5>
        </div>
      </div>
      <div className="flex">
        <HQButton shape="round" block>
          Book An Appointment
        </HQButton>
        <HQButton
          shape="circle"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                fill="white"
              />
            </svg>
          }
        />
      </div>
    </HQBasicCard>
  );
};
