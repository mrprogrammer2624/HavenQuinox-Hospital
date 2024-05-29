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
          <HQAvatar
            customClass={styles.imgAvatar}
            single
            img={img}
            size={120}
          />
        </div>
        <div>
          <div className="mb-4 flex flex-col gap-2">
            <h3 className="fw-600">{name}</h3>
            <h5 className="text-secondary fw-600">MDS - Periodontology</h5>
          </div>
          <h5 className="text-quaternary fw-500 gap-5 flex">
            {Icons.location}
            {city} &nbsp;
            {country}
          </h5>
        </div>
      </div>
      <div className="flex">
        <HQButton shape="round" block>
          Book An Appointment
        </HQButton>
        <HQButton shape="circle" icon={Icons.CorseUpArrow} />
      </div>
    </HQBasicCard>
  );
};
