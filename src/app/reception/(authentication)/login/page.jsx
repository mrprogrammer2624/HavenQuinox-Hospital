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

  const [user, setUser] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  // Set Loading State
  const [loading, setLoading] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      setButtonLoader(true);
      await axios.post("../../api/auth/login", user);
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
      setButtonLoader(false);
    }
  };

  useEffect(() => {
    if (user.loginEmail.length > 0 && user.loginPassword.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
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
            value={user.email}
            id="loginEmail"
            name="loginEmail"
            handleChange={handleChange}
          />
          <HQInputPassword
            type="password"
            label="Enter Your Password"
            HQInputLabelClassName={styles.label}
            value={user.password}
            id="loginPassword"
            name="loginPassword"
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
