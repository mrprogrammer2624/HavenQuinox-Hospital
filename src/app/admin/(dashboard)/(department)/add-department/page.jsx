"use client";
import React, { useState } from "react";
import { HQButton, HQInput, HQInputPassword, HQToasts } from "@/components";
import { axiosApi } from "@/axiosApi";
import { notification } from "antd";

const AddDepartment = () => {
  const [error, setError] = useState(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [department, setDepartment] = useState({
    departImage: "",
    name: "",
  });

  const handleImageChange = (e) => {
    const file = e.target;
    setDepartment({
      ...department,
      departImage: e.target.files[0],
    });
  };

  const departmentData = (e) => {
    const { name, value } = e.target;
    setDepartment((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoader(true);
    try {
      // append data
      let formData = new FormData();
      formData.append("departImage", department?.departImage);
      formData.append("name", department.name);

      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      console.log(department);
      const response = await axiosApi({
        method: "post",
        url: `/admin/addDepartenment`,
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
    <div>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="w-full"
      >
        <HQInput
          type="text"
          id="name"
          name="name"
          placeholder="add Department"
          label="Department"
          value={department.name}
          handleChange={departmentData}
        />

        <input type="file" onChange={handleImageChange} />
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

export default AddDepartment;
