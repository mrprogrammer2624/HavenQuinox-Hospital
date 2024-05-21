import React from "react";
import { Title } from "../";
import { HQButton, HQTeamCard } from "@/components/";
import { Icons, doctorWebList } from "@/utility";
import styles from "../website.module.css";
import clsx from "clsx";

export const OurDoctors = () => {
  return (
    <section className="bg-off-white">
      <div className="container">
        <Title title="Our Doctors">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Title>
        <div>
          <div className={clsx(styles.OurDoctorsWrapper, "grid")}>
            {doctorWebList?.map((doctor, index) => (
              <HQTeamCard
                key={doctor._id + index}
                // img={"http://192.168.1.34:8004" + doctor.doctorImage}
                img={""}
                departnment={doctor.departnment}
                name={doctor.name}
                city={doctor.city}
                country={doctor.country}
              ></HQTeamCard>
            ))}
          </div>
          <div className="flex mt-5 items-center justify-center">
            <HQButton shape="round">View All</HQButton>
            <HQButton shape="circle" icon={Icons.CorseUpArrow} />
          </div>
        </div>
      </div>
    </section>
  );
};
