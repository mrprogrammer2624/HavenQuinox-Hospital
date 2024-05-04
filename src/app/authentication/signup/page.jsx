"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import clsx from "clsx";
import { HQButton, HQInput } from "@/components";
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
      await axios.post("../../api/authentication/signup", user);
      router.push("/authentication/login");
    } catch (error) {
      console.log(error.message);
    } finally {
      setButtonLoader(false);
    }
  };

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
              type="primary"
              id="name"
              name="name"
              label="name"
              value={user.name}
              onChange={handleChange}
            />
            <HQInput
              type="email"
              id="email"
              name="email"
              label="email"
              value={user.email}
              onChange={handleChange}
            />
            <HQInput
              type="password"
              id="password"
              name="password"
              label="password"
              value={user.password}
              onChange={handleChange}
            />
            <HQButton
              type="default"
              htmlType="submit"
              loading={buttonLoader}
              // disabled={buttonDisabled === true ? true : false}
              block
            >
              Sign Up
            </HQButton>
          </form>
        </Col>
        <Col xs={24}>
          <h6 className="title-color small flex justify-center gap-3 mx-auto fw-500">
            Already You Have Account ?
            <Link
              className="text-kingfisher h5 small"
              href="/authentication/login"
            >
              Create an account
            </Link>
          </h6>
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

export default SignUpForm;
