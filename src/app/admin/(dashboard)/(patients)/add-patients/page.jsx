"use client";
import React, { useState } from "react";
import { HQButton, HQInput, HQInputPassword, HQToasts } from "@/components";
import styles from "../../../admin.module.css";
import { notification } from "antd";
import axios from "axios";

const AddPatients = () => {
  const [buttonLoader, setButtonLoader] = useState(false);
  const [patients, setPatients] = useState({
    name: "",
    email: "",
    password: "",
    cPass: "",
  });

  const { error: antdError } = notification;

  const typeNotification = (type, message) => {
    antdError({
      message: message,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatients({ ...patients, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoader(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      console.log(patients);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_WEB_URL + "patient/insertPatient",
        patients,
        config
      );

      if (response.status === 200) {
        notification.success({
          message: "Sign Up successful!",
        });
        // Redirect user to login page or do something else after successful signup
      } else {
        throw new Error("Sign Up failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      notification.error({
        message: "Sign Up unsuccessful!",
        description: "An error occurred during signup.",
      });
    } finally {
      setButtonLoader(false);
    }
  };

  return (
    <div className="ma-auto w-full authentication-right">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-12">
          <div className="flex gap-12">
            <HQInput
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              label="Name"
              value={patients.name}
              handleChange={handleInputChange}
            />
            <HQInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              label="Email"
              value={patients.email}
              handleChange={handleInputChange}
            />
          </div>
          <HQInputPassword
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            label="Password"
            value={patients.password}
            handleChange={handleInputChange}
          />
          <HQInputPassword
            type="password"
            id="ReenterPassword"
            name="cPass"
            placeholder="Re-enter Password"
            label="Re-enter Password"
            value={patients.cPass}
            handleChange={handleInputChange}
          />
        </div>
        <HQButton
          customClass="mt-5"
          type="default"
          htmlType="submit"
          loading={buttonLoader}
          block
        >
          Sign Up
        </HQButton>
      </form>
      <HQToasts contextHolder={notification.useNotification().contextHolder} />
    </div>
  );
};

export default AddPatients;
