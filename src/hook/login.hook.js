"use client";
import { useRouter } from "next/navigation";
import { axiosApi } from "@/axiosApi";
import { useState } from "react";

export const LoginHook = () => {
  const router = useRouter();
  const [buttonLoader, setButtonLoader] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    email: "",
    password: "",
  });
  console.log(adminCredentials);

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
      //   url: `admin/login`,
      //   data: adminCredentials,
      //   config,
      // });

      const response =await

      router.push("/admin");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setButtonLoader(false);
    }
  };

  return {
    buttonLoader,
    adminCredentials,
    handleChange,
    handleSubmit,
  };
};
