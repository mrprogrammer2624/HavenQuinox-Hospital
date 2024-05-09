"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { HQButton, HQInput, HQInputPassword, HQToasts } from "@/components";
import styles from "../authentication.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { notification } from "antd";
import { axiosApi } from "@/axiosApi";
import axios from "axios";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [adminCredentials, setAdminCredentials] = useState({
    email: "",
    password: "",
  });

  const typeNotification = (type, message) => {
    api[type]({
      message: message,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminCredentials({ ...adminCredentials, [name]: value });
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

      // const response = await axiosApi({
      //   method: "post",
      //   url: `/admin/login`,
      //   data: adminCredentials,
      //   config,
      // });

      const response = await axios.post(
        process.env.NEXT_PUBLIC_WEB_URL + "admin/login",
        adminCredentials,
        config
      );
      const { token } = response.data;
      if (token) {
        document.cookie = `Admintoken=${token}; path=/admin`;
      }
      typeNotification("success", "Login successful!");
      router.push("/admin");
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password."); // Set error message
        typeNotification("error", "Login unsuccessful!");
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
        <h2 className="mb-1 title-color fw-700 text-center">Welcome Back!</h2>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-12">
          <HQInput
            required
            type="email"
            label="Enter Your Email"
            placeholder="Enter Email"
            HQInputLabelClassName={styles.label}
            value={adminCredentials.email}
            id="loginEmail"
            name="email"
            handleChange={handleChange}
          />
          <HQInputPassword
            required
            type="password"
            label="Enter Your Password"
            HQInputLabelClassName={styles.label}
            value={adminCredentials.password}
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
      <HQToasts contextHolder={contextHolder} />
    </div>
  );
};

export default LoginForm;
