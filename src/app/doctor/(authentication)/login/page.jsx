"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { HQButton, HQInput, HQInputPassword, HQToasts } from "@/components";
import styles from "../authentication.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { notification } from "antd";

const LoginForm = () => {
  const loginParams = {
    target: "/doctor/login",
    targetLink: "doctor/",
    tokenName: "doctorToken",
  };
  const { buttonLoader, credentials, handleChange, handleSubmit } =
    LoginHook(loginParams);

  return (
    <div className="ma-auto w-full authentication-right">
      <div className={clsx(styles.authenticationTitle, "w-full")}>
        <h2 className="mb-1 title-color fw-700 text-center">Welcome Back!</h2>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-12">
          <HQInput
            type="email"
            label="Enter Your Email"
            placeholder="Enter Email"
            HQInputLabelClassName={styles.label}
            value={doctorCredentials.email}
            id="loginEmail"
            name="email"
            handleChange={handleChange}
          />
          <HQInputPassword
            type="password"
            label="Enter Your Password"
            HQInputLabelClassName={styles.label}
            value={doctorCredentials.password}
            id="loginPassword"
            name="password"
            handleChange={handleChange}
            placeholder="Enter Password"
          />
        </div>
        <Link href={""} className="my-2 flex justify-end">
          Forgot Password?
        </Link>
        <HQButton type="default" htmlType="submit" block loading={buttonLoader}>
          Login
        </HQButton>
      </form>
    </div>
  );
};

export default LoginForm;
