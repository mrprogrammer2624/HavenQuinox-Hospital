"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { HQButton, HQInput, Loading } from "@/components";
import styles from "../authentication.module.css";
import { Icons } from "@/utility";

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
      await axios.post("../../api/authentication/login", user);
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
    <div className={clsx(styles.authContent)}>
      <Row gutter={[20, 20]}>
        <Col xs={24} className="">
          <h2 className="mb-1 title-color fw-700">Welcome To</h2>
          <p className="mb-0 small text-color fw-400">
            Please sign-in to your account and start the adventure
          </p>
        </Col>
        <Col xs={24}>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-12">
            <HQInput
              type="email"
              label="Enter Your Email"
              value={user.email}
              id="loginEmail"
              name="loginEmail"
              handleChange={handleChange}
            />
            <HQInput
              type="password"
              label="Enter Your Password"
              value={user.password}
              id="loginPassword"
              name="loginPassword"
              handleChange={handleChange}
            />
            <HQButton
              type="default"
              htmlType="submit"
              block
              loading={buttonLoader}
              // disabled={buttonDisabled === true ? true : false}
            >
              Sign Up
            </HQButton>
          </form>
        </Col>
        <Col xs={24} className="">
          <h3 className="title-color small text-center mx-auto fw-500">
            New on our platform ?{" "}
            <Link
              className="text-kingfisher h3 small"
              href="/authentication/signup"
            >
              Create an account
            </Link>
          </h3>
        </Col>
        <Col xs={24} className="">
          <div className="flex items-center justify-center">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="social-icons blue"
            >
              {Icons.facebook}
            </Link>
            <Link
              href="https://google.com"
              target="_blank"
              className="social-icons red ml-3"
            >
              {Icons.google}
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="social-icons white ml-3"
            >
              {Icons.twitter}
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginForm;
