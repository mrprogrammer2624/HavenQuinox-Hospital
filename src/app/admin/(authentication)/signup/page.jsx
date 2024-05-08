"use client";
import React, { useState } from "react";
import clsx from "clsx";
import {
  HQButton,
  HQSelect,
  HQInput,
  HQInputPassword,
  HQToasts,
} from "@/components";
import styles from "../authentication.module.css";
import { gender } from "@/utility";
import { axiosApi } from "@/axiosApi";
import { useRouter } from "next/navigation";
import { notification } from "antd";

const SignUpForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [admin, setAdmin] = useState({
    adminImage: "", // This state should hold the selected image
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
    setAdmin({
      ...admin,
      adminImage: e.target.files[0], // Update adminImage state with the selected file object
    });
  };

  const typeNotification = (type) => {
    api[type]({
      message: `Notification ${type}`,
    });
  };

  // Admin Data
  const adminData = (e) => {
    const { name, value } = e.target;
    setAdmin((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleGenderChange = (selectedGender) => {
    setAdmin((prevUser) => ({
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
      formData.append("adminImage", admin?.adminImage);
      formData.append("fname", admin.fname);
      formData.append("lname", admin.lname);
      formData.append("email", admin.email);
      formData.append("phoneNo", admin.phoneNo);
      formData.append("city", admin.city);
      formData.append("gender", admin.gender);
      formData.append("password", admin.password);
      formData.append("cPass", admin.cPass);

      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const response = await axiosApi({
        method: "post",
        url: `/admin/insertAdminData`,
        data: formData,
        config,
      });

      typeNotification("success", "SignUp successful!");
      router.push("/admin/login");
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
      <div className={clsx(styles.authenticationTitle, "w-full")}>
        <h2 className="mb-1 title-color fw-700">Welcome Haven Quinox</h2>
        <p className="mb-0 h5 fw-400 text-gray">
          Please Create your HavenQuinox Hospital Account to continue
        </p>
      </div>
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
              value={admin.fname}
              handleChange={adminData}
            />
            <HQInput
              type="text"
              id="lName"
              name="lname"
              placeholder="Enter Last Name"
              HQInputLabelClassName={styles.label}
              label="last name"
              value={admin.lname}
              handleChange={adminData}
            />
          </div>
          <HQInput
            type="email"
            id="email"
            name="email"
            placeholder="enter email"
            HQInputLabelClassName={styles.label}
            label="email"
            value={admin.email}
            handleChange={adminData}
          />
          <HQInput
            type="number"
            id="phoneNo"
            name="phoneNo"
            placeholder="enter mobile number"
            HQInputLabelClassName={styles.label}
            label="mobile number"
            value={admin.phoneNo}
            handleChange={adminData}
          />
          <div className="flex w-full gap-12">
            <HQInput
              type="text"
              id="city"
              name="city"
              placeholder="enter City"
              HQInputLabelClassName={styles.label}
              label="Enter City"
              value={admin.city}
              handleChange={adminData}
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
            value={admin.password}
            handleChange={adminData}
          />
          <HQInputPassword
            type="password"
            id="ReenterPassword"
            name="cPass"
            placeholder="Re Enter password"
            label="Re Enter password"
            HQInputLabelClassName={styles.label}
            value={admin.cPass}
            handleChange={adminData}
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

export default SignUpForm;
