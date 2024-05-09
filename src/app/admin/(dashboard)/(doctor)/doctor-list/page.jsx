"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const DoctorList = () => {
  const [doctorList, setDoctorList] = useState(null);

  const fetchDoctorList = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_WEB_URL + "admin/doctor/viewAllDoctor"
      );
      setDoctorList(response.data.data);
    } catch (error) {
      // Handle any errors
      console.error("Error fetching doctor data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchDoctorList();
    };

    fetchData();
  }, []);

  return (
    <div>
      {doctorList ? (
        <ul>
          {doctorList.map((doctor, index) => (
            <li key={doctor.id + index}>
              <p>{doctor.name}</p>
              <p>{doctor.email}</p>
              <p>{doctor.phoneNo}</p>
              <p>{doctor.password}</p>
              <p>{doctor.city}</p>
              <p>{doctor.gender}</p>
              <p></p>
              <img
                src={
                  process.env.NEXT_PUBLIC_WEB_URL +
                  "uploads/doctorImages/" +
                  doctor.doctorImage
                }
                width={150}
                height={150}
                alt={doctor.doctorImage}
              />
              <p>{doctor.isActive}</p>
              <p>{doctor.currentDate}</p>
              <p>{doctor.updateDate}</p>
              <p>{doctor.role}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DoctorList;
