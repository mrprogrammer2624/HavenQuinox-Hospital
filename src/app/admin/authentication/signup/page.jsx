"use client";
import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { HQButton, HQSelect, HQInput, HQInputPassword } from "@/components";
import styles from "../authentication.module.css";
import { gender } from "@/utility";

const SignUpForm = () => {
  const [buttonLoader, setButtonLoader] = useState(false);
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

  console.log(admin);

  const adminData = (e) => {
    const { name, value } = e.target;
    setAdmin((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0].name;
    setAdmin((prevUser) => ({
      ...prevUser,
      adminImage: file, // Update adminImage state with the selected file object
    }));
  };

  const handleGenderChange = (selectedGender) => {
    setAdmin((prevUser) => ({
      ...prevUser,
      gender: selectedGender,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoader(true);
    try {
      console.log("Form submitted:", admin);
      const response = await axios.post(
        "http://192.168.1.35:8004/admin/insertAdminData",
        admin
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setButtonLoader(false);
      console.log("solved");
    }
  };

  return (
    <>
      <div className={clsx(styles.authenticationTitle, "w-full")}>
        <h2 className="mb-1 title-color fw-700">Welcome Haven Quinox</h2>
        <p className="mb-0 h5 fw-400 text-gray">
          Please Create your HavenQuinox Hospital Account to continue
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-12">
          <div>
            <input
              type="file"
              name="adminImage"
              id="adminImage"
              onChange={handleImageChange}
            />
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
              HQSelectContainerClassName={"w-full"}
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
      <div>
        <p className="mt-3 h6 flex justify-center gap-3 items-center">
          You Have Already Account
          <Link href={"/authentication/signup"}>Login</Link>
        </p>
      </div>
    </>
  );
};

export default SignUpForm;
