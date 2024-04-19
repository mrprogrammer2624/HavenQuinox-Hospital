import { HQBasicCard } from "@/components";
import React from "react";

const Badge = () => {
  const topisInterested = [
    {
      name: "UI Design",
      color: "#07B8D0",
    },
    {
      name: "UX Design",
      color: "#29B169",
    },
    {
      name: "Music",
      color: "#96999F",
    },
    {
      name: "Animation",
      color: "#CE4F53",
    },

    {
      name: "React",
      color: "#CE4F53",
    },
    {
      name: "SEO",
      color: "#E08F44",
    },
  ];
  return (
    <div>
      <div>
        <HQBasicCard cardTitle={"Group Of Badge"}>
          {/* <HQStatusBadge group customClass={""} data={topisInterested} /> */}
        </HQBasicCard>

        <HQBasicCard cardTitle={"Single Badge"}>
          {/* <HQStatusBadge name="Animation" color="green" /> */}
        </HQBasicCard>
      </div>
    </div>
  );
};

export default Badge;
