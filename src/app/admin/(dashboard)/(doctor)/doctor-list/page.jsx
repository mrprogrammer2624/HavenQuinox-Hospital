"use client";
import { axiosApi } from "@/axiosApi";
import { HQAvatar, HQTeamCard, HQButton } from "@/components";
import { useEffect, useState } from "react";

const DoctorList = () => {
  const [doctorList, setDoctorList] = useState(null);

  useEffect(() => {
    const fetchDoctorList = async () => {
      try {
        const response = await axiosApi({
          method: "get",
          url: `admin/doctor/viewAllDoctor`,
        });
        setDoctorList(response.data.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching doctor data:", error);
      }
    };
    fetchDoctorList();
  }, []);

  return (
    <div className="grid items-center justify-center card-listing">
      {doctorList ? (
        doctorList.map((doctor, index) => (
          <HQTeamCard
            key={doctor._id + index}
            img={"http://192.168.1.34:8004" + doctor.doctorImage}
            departnment={doctor.departnment}
            name={doctor.name}
            city={doctor.city}
            country={doctor.country}
          ></HQTeamCard>
        ))
      ) : (
        <p>Data Not Found</p>
      )}
    </div>
  );
};

export default DoctorList;
