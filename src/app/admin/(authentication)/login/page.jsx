"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { HQButton, HQInput, HQInputPassword, Loading } from "@/components";
import styles from "../authentication.module.css";
import Link from "next/link";
import { axiosApi } from "@/axiosApi";

const LoginForm = () => {
  const [user, setUser] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [buttonLoader, setButtonLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonLoader(true);
      const response = await axiosApi({
        method: "post",
        url: "/admin/insertAdminData",
        data: {
          email: user.loginEmail,
          password: user.loginPassword,
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoader(false);
    }
  };

  useEffect(() => {
    const { loginEmail, loginPassword } = user;
    // setButtonDisabled(!(loginEmail && loginPassword)); // Disable button if either field is empty
  }, [user]);

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
            value={user.loginEmail} // Changed from user.email
            id="loginEmail"
            name="loginEmail"
            handleChange={handleChange}
          />
          <HQInputPassword
            type="password"
            label="Enter Your Password"
            HQInputLabelClassName={styles.label}
            value={user.loginPassword} // Changed from user.password
            id="loginPassword"
            name="loginPassword"
            handleChange={handleChange}
            placeholder="Enter Password"
          />
        </div>
        <Link href={""} className="my-2 flex justify-end">
          Forgot Password?
        </Link>
        <HQButton
          type="default"
          htmlType="submit"
          block
          // disabled={buttonDisabled}
          loading={buttonLoader}
        >
          Login
        </HQButton>
      </form>
    </div>
  );
};

export default LoginForm;
