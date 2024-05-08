"use client";
import React, { useState } from "react";
import { HQButton, HQInput, HQInputPassword, HQToasts } from "@/components";
import { notification } from "antd";
import axios from "axios";
import styles from "../../../admin/admin.module.css";
import clsx from "clsx";
import Link from "next/link";

const SignUpForm = () => {
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
      const response = await axios.post(
        "http://192.168.134.166:8004/patient/insertPatient",
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
      <div className={clsx(styles.authenticationTitle, "w-full text-center")}>
        <h2 className="mb-3 title-color fw-700"> Welcome To HavenQuinox</h2>
      </div>
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
      <h6 className="flex mt-3 fw-500 gap-4 justify-center">
        You have already account
        <Link href="/patient/login">login Now</Link>
      </h6>

      <HQToasts contextHolder={notification.useNotification().contextHolder} />
    </div>
  );
};

export default SignUpForm;
