"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import axios from "axios";
import { HQButton, HQInput, HQInputPassword, Loading } from "@/components";
import styles from "../authentication.module.css";
import Link from "next/link";
import { LoginHook } from "@/hook";

const LoginForm = () => {
  const loginParams = {
    target: "patient/login",
    targetLink: "patient/",
  };
  const { buttonLoader, credentials, handleChange, handleSubmit } =
    LoginHook(loginParams);

  return (
    <div className="ma-auto w-full authentication-right">
      <div className={clsx(styles.authenticationTitle, "w-full text-center")}>
        <h2 className="mb-3 title-color fw-700">Welcome Back!</h2>
        <p className="fw-500 capitalize">Please sign-in to your account</p>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-12">
          <HQInput
            type="email"
            label="Enter Your Email"
            placeholder="Enter Email"
            HQInputLabelClassName={styles.label}
            value={credentials.email}
            id="loginEmail"
            name="email"
            handleChange={handleChange}
          />
          <HQInputPassword
            type="password"
            label="Enter Your Password"
            HQInputLabelClassName={styles.label}
            value={credentials.password}
            id="loginPassword"
            name="password"
            handleChange={handleChange}
            placeholder="Enter Password"
          />
        </div>
        <Link href={"/forgot-password"} className="my-2 flex justify-end">
          {/* Updated href */}
          Forgot Password?
        </Link>
        <HQButton type="default" htmlType="submit" block loading={buttonLoader}>
          Login
        </HQButton>
      </form>
      <h6 className="flex mt-3 gap-4 fw-500 justify-center">
        New on our platform?
        <Link href="/patient/signup">Create an account</Link>
      </h6>
    </div>
  );
};

export default LoginForm;
