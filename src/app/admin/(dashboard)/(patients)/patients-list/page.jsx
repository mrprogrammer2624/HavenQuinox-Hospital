"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const PatientsList = () => {
  const [patientsList, setPatientsList] = useState(null);

  const fetchPatientsList = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_WEB_URL + "patient/viewAllPatient"
      );
      setPatientsList(response.data.data);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchPatientsList();
    };

    fetchData();
  }, []);

  console.log(patientsList);

  return (
    <div>
      {patientsList ? (
        <ul>
          {patientsList.map((patient, index) => (
            <li key={patient.id + index}>
              <p>{patient.name}</p>
              <p>{patient.email}</p>
              <p>{patient.password}</p>
              <p>{patient.isActive}</p>
              <p>{patient.currentDate}</p>
              <p>{patient.updateDate}</p>
              <p>{patient.role}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PatientsList;
