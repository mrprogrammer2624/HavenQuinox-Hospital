"use client";

import React, { useEffect, useState } from "react";
import {
  HQButton,
  HQSelect,
  HQInput,
  HQInputPassword,
  HQToasts,
  HQAvatar,
  HQInputFile,
} from "@/components";
import styles from "../../../admin.module.css";
import { Icons, gender } from "@/utility";
import { axiosApi } from "@/axiosApi";
import { useRouter } from "next/navigation";
import { notification } from "antd";
import axios from "axios";

const AddDoctor = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [departmentList, setDepartmentList] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const [getPath, setPath] = useState({
    originalImagePath: "",
  });
  const [doctor, setDoctor] = useState({
    doctorImage: "",
    fname: "",
    lname: "",
    email: "",
    departnment: "",
    phoneNo: "",
    city: "",
    state: "",
    country: "",
    gender: "",
    password: "",
    cPass: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imagePath = URL.createObjectURL(file);
    setDoctor({
      ...doctor,
      doctorImage: file,
    });
    setPath({
      ...getPath,
      originalImagePath: imagePath,
    });
  };

  const typeNotification = (type) => {
    api[type]({
      message: `Notification ${type}`,
    });
  };

  // Get DepartmentList
  useEffect(() => {
    const fetchDepartmentList = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_WEB_URL + "admin/viewAllDepart"
        );
        const updatedDepartmentList = response.data.data.map((department) => ({
          ...department,
          label: department._id,
          value: department._id,
        }));
        setDepartmentList(updatedDepartmentList);
      } catch (error) {
        console.error("Error fetching department data:", error);
      }
    };

    fetchDepartmentList();
  }, []);

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

  const handleDepartmentChange = (selectedDepartmentChange) => {
    setDoctor((prevUser) => ({
      ...prevUser,
      departnment: selectedDepartmentChange,
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
      formData.append("departnment", doctor.departnment);
      formData.append("phoneNo", doctor.phoneNo);
      formData.append("city", doctor.city);
      formData.append("state", doctor.state);
      formData.append("country", doctor.country);
      formData.append("gender", doctor.gender);
      formData.append("password", doctor.password);
      formData.append("cPass", doctor.cPass);

      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const response = await axiosApi({
        method: "post",
        url: `/admin/doctor/insertDoctor`,
        data: formData,
        config,
      });

      console.log(response.data);
      typeNotification("success", "SignUp successful!");
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
    <div className="ma-auto w-full dashboard-add-from">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="w-full"
      >
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5 ma-auto">
            <HQAvatar
              single
              size={150}
              parentAvatar={"ma-auto"}
              img={getPath.originalImagePath}
              alt="Uploaded Image"
            />
            <HQInputFile handleChange={handleImageChange}>
              <span className="flex">{Icons.camera}</span>photos
            </HQInputFile>
          </div>
          <div className="grid dashboard-add-from-layout">
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
            <HQSelect
              id="gender"
              name="gender"
              placeholder="Enter Department"
              HQSelectLabelClassName={styles.label}
              HQSelectContainerClassName={"w-full"}
              label="Department"
              options={departmentList}
              // options={gender}
              handleChange={handleDepartmentChange}
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
            <HQInput
              type="text"
              id="state"
              name="state"
              placeholder="enter state"
              HQInputLabelClassName={styles.label}
              label="Enter state"
              value={doctor.state}
              handleChange={doctorData}
            />
            <HQInput
              type="text"
              id="country"
              name="country"
              placeholder="enter country"
              HQInputLabelClassName={styles.label}
              label="Enter country"
              value={doctor.country}
              handleChange={doctorData}
            />
            <HQSelect
              id="gender"
              name="gender"
              placeholder="enter gender"
              HQSelectLabelClassName={styles.label}
              HQSelectContainerClassName={"w-full"}
              label="gender"
              options={gender}
              handleChange={handleGenderChange}
            />
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
