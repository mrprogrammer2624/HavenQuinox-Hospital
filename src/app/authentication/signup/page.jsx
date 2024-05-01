"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import clsx from "clsx";
import { HQButton, HQInput } from "@/components";

const SignUpForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
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
      setLoading(false);
      await axios.post("../../api/authentication/signup", user);
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.name.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-400">
      {/* {loading && <Loading />} */}
      <form
        className="bg-white p-16 rounded shadow-2xl w-2/3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Create Your Account
        </h2>

        <div className="mb-5">
          <label htmlFor="name" className="block mb-1 font-bold text-gray-500">
            Name
          </label>
          <HQInput
            type="primary"
            id="name"
            name="name"
            className="w-full border-2 border-gray-200 p-3 rounded outline-none text-black focus:border-purple-500"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-1 font-bold text-gray-500">
            Email
          </label>
          <HQInput
            type="email"
            id="email"
            name="email"
            className="w-full border-2 border-gray-200 p-3 rounded outline-none text-black focus:border-purple-500"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-1 font-bold text-gray-500"
          >
            Password
          </label>
          <HQInput
            type="password"
            id="password"
            name="password"
            className="w-full border-2 border-gray-200 p-3 rounded outline-none text-black focus:border-purple-500"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center">
          <input type="checkbox" id="agree" name="agree" className="mr-2" />
          <label htmlFor="agree" className="text-gray-700 text-sm">
            I agree to the terms and privacy.
          </label>
        </div>

        <HQButton
          type="primary"
          htmlType="submit"
          className={clsx(
            "block w-full bg-yellow-400  hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300",
            buttonDisabled ? "pointer-events-none" : "pointer-events-auto"
          )}
        >
          Sign Up
        </HQButton>
      </form>
      <Link href="/login" className="h3 text-red-600">
        login
      </Link>
    </div>
  );
};

export default SignUpForm;
