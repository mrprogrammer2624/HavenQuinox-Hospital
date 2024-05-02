"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import clsx from "clsx";
import { HQButton, HQInput, Loading } from "@/components";

const LoginForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  // Set Loading State
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("../../api/authentication/login", user);
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
    <>
      {/* {loading && <Loading />} */}
      <section
        className={clsx(
          "h-dvh authentication-bg bg-no-repeat bg-cover flex items-center justify-center"
        )}
      >
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="max-w-[40%] mx-auto bg-white p-[3.5rem] flex flex-col gap-[2.6rem] rounded-3xl">
              <div className="flex flex-col gap-[8px] text-center">
                <Link href="/" className="text-secondary h1 font-semibold">
                  MEGA.news
                </Link>
                <h2 className="font-medium leading-tight">Login Account</h2>
              </div>
              <div className="flex flex-col gap-5">
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
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    className="mr-2"
                  />
                  <label htmlFor="agree" className="text-gray-700 text-sm">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <HQButton
                  type="primary"
                  htmlType="submit"
                  // disabled={buttonDisabled === true ? true : false}
                >
                  Sign Up
                </HQButton>
                <h4>
                  Don&apos;t have an account?
                  <Link
                    href="/authentication/signup"
                    className="h5 text-red-600"
                  >
                    signup
                  </Link>
                </h4>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
