"use client";
// AdminAddForm.js
import React, { useState } from "react";
import { HQButton, HQInput, HQInputPassword, HQToasts } from "@/components";
import styles from "../../../admin.module.css";
import { axiosApi } from "@/axiosApi";
import { useRouter } from "next/navigation";
import { notification } from "antd";

const AddPatients = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [patients, setPatients] = useState({
    name: "",
    email: "",
    password: "",
    cPass: "",
  });

  const typeNotification = (type) => {
    api[type]({
      message: `Notification ${type}`,
    });
  };

  const patientsData = (e) => {
    const { name, value } = e.target;
    if (name === "fname" || name === "lname") {
      setPatients((prevPatients) => ({
        ...prevPatients,
        [name]: value,
        name:
          name === "fname"
            ? `${value} ${prevPatients.lname || ""}`
            : `${prevPatients.fname || ""} ${value}`,
      }));
    } else {
      setPatients((prevPatients) => ({
        ...prevPatients,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoader(true);
    try {
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const response = await axiosApi({
        method: "post",
        url: `/patient/insertPatient`,
        data: patients,
        config,
      });

      typeNotification("success", "SignUp successful!");
      router.push("/patients/login");
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password."); // Set error message
        typeNotification("Error", "Login unsuccessful!");
      } else {
        setError("An error occurred during login."); // Set generic error message
      }
    } finally {
      setButtonLoader(false);
    }
  };

  return (
    <div className="ma-auto w-full authentication-right">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="w-full"
      >
        <div className="flex flex-col gap-12">
          <div className="flex w-full gap-12">
            {/* Combine first name and last name fields */}
            <HQInput
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter First Name"
              HQInputLabelClassName={styles.label}
              label="Name"
              value={patients.fname}
              handleChange={patientsData}
            />
            <HQInput
              type="text"
              id="lName"
              name="lname"
              placeholder="Enter Last Name"
              HQInputLabelClassName={styles.label}
              label="Name"
              value={patients.lname}
              handleChange={patientsData}
            />
          </div>
          <HQInput
            type="email"
            id="email"
            name="email"
            placeholder="enter email"
            HQInputLabelClassName={styles.label}
            label="email"
            value={patients.email}
            handleChange={patientsData}
          />
          <HQInputPassword
            type="password"
            id="password"
            name="password"
            placeholder="enter password"
            HQInputLabelClassName={styles.label}
            label="password"
            value={patients.password}
            handleChange={patientsData}
          />
          <HQInputPassword
            type="password"
            id="ReenterPassword"
            name="cPass"
            placeholder="Re Enter password"
            label="Re Enter password"
            HQInputLabelClassName={styles.label}
            value={patients.cPass}
            handleChange={patientsData}
          />
        </div>
        <HQButton
          customClass={"mt-5"}
          type="default"
          htmlType="submit"
          loading={buttonLoader}
          block
        >
          Sign Up
        </HQButton>
      </form>
      <HQToasts contextHolder={contextHolder} />
    </div>
  );
};

export default AddPatients;
