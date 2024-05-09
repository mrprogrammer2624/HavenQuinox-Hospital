"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import axios from "axios";
import { HQButton, HQInput, HQInputPassword, Loading } from "@/components";
import styles from "../authentication.module.css";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();

  const [patientsCredentials, setPatientCredentials] = useState({
    email: "",
    password: "",
  });

  console.log(patientsCredentials);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientCredentials({ ...patientsCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonLoader(true);
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const response = await axios.post(
        process.env.NEXT_PUBLIC_WEB_URL + "patient/login",
        patientsCredentials,
        config
      );

      const { token } = response.data;
      if (token) {
        document.cookie = `Admintoken=${token}; path=/admin/`;
      }
      router.push("/admin");
    } catch (error) {
      console.error("Login failed:", error);
      console.log(error);
    } finally {
      setButtonLoader(false);
    }
  };

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
            value={patientsCredentials.email}
            id="loginEmail"
            name="email"
            handleChange={handleChange}
          />
          <HQInputPassword
            type="password"
            label="Enter Your Password"
            HQInputLabelClassName={styles.label}
            value={patientsCredentials.password}
            id="loginPassword"
            name="password"
            handleChange={handleChange}
            placeholder="Enter Password"
          />
        </div>
        <Link href={"/forgot-password"} className="my-2 flex justify-end">
          {" "}
          {/* Updated href */}
          Forgot Password?
        </Link>
        <HQButton
          type="default"
          htmlType="submit"
          block
          loading={buttonLoader}
          disabled={buttonDisabled}
        >
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
