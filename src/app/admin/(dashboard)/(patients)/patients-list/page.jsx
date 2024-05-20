"use client";
import { axiosApi } from "@/axiosApi";
import { Table } from "antd";
import { useEffect, useState } from "react";

const PatientsList = () => {
  const [patientsList, setPatientsList] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPatientsList = async () => {
    try {
      setLoading(true);
      const response = await axiosApi({
        method: "get",
        url: `patient/viewAllPatient`,
      });
      setPatientsList(response.data.data);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchPatientsList();
    };

    fetchData();
  }, []);

  const patientsListColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ellipsis: true,
    },
    {
      title: "RegisterDate",
      dataIndex: "currentDate",
      key: "currentDate",
      ellipsis: true,
    },
  ];

  return (
    <div>
      <Table
        columns={patientsListColumns}
        dataSource={patientsList}
        loading={loading}
        rowKey={"_id"}
      />
    </div>
  );
};

export default PatientsList;
