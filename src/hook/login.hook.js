"use client";
import { useRouter } from "next/navigation";
import { axiosApi } from "@/axiosApi";
import { useState } from "react";

const LoginHook = ({ target, targetLink, tokenName }) => {
  const router = useRouter();
  const [buttonLoader, setButtonLoader] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonLoader(true);

      const response = await axiosApi({
        method: "post",
        url: target,
        data: credentials,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const { token } = response.data;

      if (token) {
        document.cookie = `${tokenName}=${token}; path=${targetLink}`;
        document.cookie = `${tokenName}=${token}; path=${"/"}`;
      }

      router.push("/" + targetLink);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setButtonLoader(false);
    }
  };

  return {
    buttonLoader,
    credentials,
    handleChange,
    handleSubmit,
  };
};

export default LoginHook;
