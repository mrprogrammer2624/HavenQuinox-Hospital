"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import clsx from "clsx";
import { HQButton, HQInput, HQInputPassword } from "@/components";
import styles from "../authentication.module.css";
import { Col, Row } from "antd";
import { Icons } from "@/utility";

const SignUpForm = () => {
  const router = useRouter();
  const [loadings, setLoadings] = useState([]);
  const [buttonLoader, setButtonLoader] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonLoader(true);
      await axios.post("../../api/auth/signup", user);
      router.push("/authentication/login");
    } catch (error) {
      console.log(error.message);
    } finally {
      setButtonLoader(false);
    }
  };

  return (
    <>
      <div className={clsx(styles.authenticationTitle, "w-full")}>
        <h2 className="mb-1 title-color fw-700">Welcome Haven Quinox</h2>
        <p className="mb-0 h5 fw-400 text-gray">
          Please Create your Haven Quinox Hospital Account to continue
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-12">
          <HQInput
            type="primary"
            id="name"
            name="name"
            placeholder="Enter name"
            HQInputLabelClassName={styles.label}
            label="name"
            value={user.name}
            onChange={handleChange}
          />
          <HQInput
            type="email"
            id="email"
            name="email"
            placeholder="enter email"
            HQInputLabelClassName={styles.label}
            label="email"
            value={user.email}
            onChange={handleChange}
          />
          <HQInputPassword
            type="password"
            id="password"
            name="password"
            placeholder="enter password"
            HQInputLabelClassName={styles.label}
            label="password"
            value={user.password}
            onChange={handleChange}
          />
          {/* <HQInputPassword
            type="password"
            id="ReenterPassword"
            name="ReenterPassword"
            placeholder="Re Enter password"
            label="Re Enter password"
            HQInputLabelClassName={styles.label}
            value={user.rePassword}
            onChange={handleChange}
          /> */}
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
          <Link href={"/authentication/login"}>Login</Link>
        </p>
      </div>
    </>
  );
};

export default SignUpForm;
