"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import {
  HQButton,
  HQSelect,
  HQInput,
  HQInputPassword,
  HQToasts,
} from "@/components";
import styles from "../../../admin.module.css";
import { gender } from "@/utility";
import { axiosApi } from "@/axiosApi";
import { useRouter } from "next/navigation";
import { notification } from "antd";
import axios from "axios";

const AddDoctor = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [doctor, setDoctor] = useState({
    doctorImage: "", // This state should hold the selected image
    fname: "",
    lname: "",
    email: "",
    phoneNo: "",
    city: "",
    gender: "",
    password: "",
    cPass: "",
  });

  const handleImageChange = (e) => {
    const file = e.target;
    setDoctor({
      ...doctor,
      doctorImage: e.target.files[0], // Update adminImage state with the selected file object
    });
  };

  const typeNotification = (type) => {
    api[type]({
      message: `Notification ${type}`,
    });
  };

  // Admin Data
  const doctorData = (e) => {
    const { name, value } = e.target;
    setDoctor((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleGenderChange = (selectedGender) => {
    setDoctor((prevUser) => ({
      ...prevUser,
      gender: selectedGender,
    }));
  };

  // OnSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoader(true);
    try {
      // append data
      let formData = new FormData();
      formData.append("doctorImage", doctor?.doctorImage);
      formData.append("fname", doctor.fname);
      formData.append("lname", doctor.lname);
      formData.append("email", doctor.email);
      formData.append("phoneNo", doctor.phoneNo);
      formData.append("city", doctor.city);
      formData.append("gender", doctor.gender);
      formData.append("password", doctor.password);
      formData.append("cPass", doctor.cPass);

      // const response = await axiosApi({
      //   method: "post",
      //   url: `/admin/insertdoctorData`,
      //   data: formData,
      //   headers: { "Content-Type": "multipart/form-data" },
      // });
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      const response = await axios.post(
        "http://192.168.134.166:8004/admin/doctor/insertDoctor",
        formData,
        config
      );
      typeNotification("success", "SignUp successful!");
      router.push("/doctor/login");
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
          <div>
            <input type="file" onChange={handleImageChange} />
          </div>
          <div className="flex w-full gap-12">
            <HQInput
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter First Name"
              HQInputLabelClassName={styles.label}
              label="first name"
              value={doctor.fname}
              handleChange={doctorData}
            />
            <HQInput
              type="text"
              id="lName"
              name="lname"
              placeholder="Enter Last Name"
              HQInputLabelClassName={styles.label}
              label="last name"
              value={doctor.lname}
              handleChange={doctorData}
            />
          </div>
          <HQInput
            type="email"
            id="email"
            name="email"
            placeholder="enter email"
            HQInputLabelClassName={styles.label}
            label="email"
            value={doctor.email}
            handleChange={doctorData}
          />
          <HQInput
            type="number"
            id="phoneNo"
            name="phoneNo"
            placeholder="enter mobile number"
            HQInputLabelClassName={styles.label}
            label="mobile number"
            value={doctor.phoneNo}
            handleChange={doctorData}
          />
          <div className="flex w-full gap-12">
            <HQInput
              type="text"
              id="city"
              name="city"
              placeholder="enter City"
              HQInputLabelClassName={styles.label}
              label="Enter City"
              value={doctor.city}
              handleChange={doctorData}
            />
            <HQSelect
              id="gender"
              name="gender"
              placeholder="enter gender"
              HQInputLabelClassName={styles.label}
              HQSelectContainerClassName={"w-full"}
              label="gender"
              options={gender}
              handleChange={handleGenderChange}
            />
          </div>
          <HQInputPassword
            type="password"
            id="password"
            name="password"
            placeholder="enter password"
            HQInputLabelClassName={styles.label}
            label="password"
            value={doctor.password}
            handleChange={doctorData}
          />
          <HQInputPassword
            type="password"
            id="ReenterPassword"
            name="cPass"
            placeholder="Re Enter password"
            label="Re Enter password"
            HQInputLabelClassName={styles.label}
            value={doctor.cPass}
            handleChange={doctorData}
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

export default AddDoctor;
