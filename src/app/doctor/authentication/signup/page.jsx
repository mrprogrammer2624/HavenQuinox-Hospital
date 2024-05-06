"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Upload } from "antd";
import { HQButton, HQSelect, HQInput, HQInputPassword } from "@/components";
import styles from "../authentication.module.css";
import { gender } from "@/utility";
import ImgCrop from "antd-img-crop";
import { axiosApi } from "@/axiosApi";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const SignUpForm = () => {
  const [buttonLoader, setButtonLoader] = useState(false);
  const [fileList, setFileList] = useState([]);
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

  // Images
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleImageChange = (e) => {
    const file = e.target;
    setAdmin({
      ...admin,
      adminImage: e.target.files[0], // Update adminImage state with the selected file object
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
      console.log({ admin });
      formData.append("adminImage", admin?.adminImage);
      formData.append("fname", admin.fname);
      formData.append("lname", admin.lname);
      formData.append("email", admin.email);
      formData.append("phoneNo", admin.phoneNo);
      formData.append("city", admin.city);
      formData.append("gender", admin.gender);
      formData.append("password", admin.password);
      formData.append("cPass", admin.cPass);

      console.log(admin.adminImage);
      const response = await axiosApi({
        method: "post",
        url: `/admin/insertAdminData`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data, "response.data");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setButtonLoader(false);
      console.log("solved");
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
    </div>
  );
};

export default SignUpForm;
