"use client";
import { axiosApi, setAuthHeader } from "@/axiosApi";
import { HQTeamCard } from "@/components";
import { useEffect, useState } from "react";

const DoctorList = () => {
  const [doctorList, setDoctorList] = useState(null);

  useEffect(() => {
    const fetchDoctorList = async () => {
      try {
        const response = await axiosApi({
          method: "get",
          url: `/admin/doctor/viewAllDoctor`,
        });

        setDoctorList(response.data.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching doctor data:", error);
      }
    };
    fetchDoctorList();
  }, []);

  const imagesUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  return (
    <div className="grid items-center justify-center card-listing">
      {doctorList ? (
        doctorList.map((doctor, index) => (
          <HQTeamCard
            key={doctor._id + index}
            img={doctor?.doctorImage && imagesUrl + doctor?.doctorImage}
            departnment={doctor?.departnment}
            name={doctor?.name}
            city={doctor?.city}
            country={doctor?.country}
          ></HQTeamCard>
        ))
      ) : (
        <p>Data Not Found</p>
      )}
    </div>
  );
};

export default DoctorList;
