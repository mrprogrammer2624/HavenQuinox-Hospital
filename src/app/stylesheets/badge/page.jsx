"use client";
import { HQBasicCard } from "@/components";
import { HQStatusBadge } from "@/components/HQBadge";

const BadgePage = () => {
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
        <HQBasicCard header cardTitle={"Group Of Badge"}>
          <HQStatusBadge group customClass={""} data={topisInterested} />
        </HQBasicCard>

        <HQBasicCard header cardTitle={"Single Badge"}>
          <HQStatusBadge name="Animation" color="green" />
        </HQBasicCard>
      </div>
    </div>
  );
};

export default BadgePage;
