"use client";
import React, { useState } from "react";
import { notification } from "antd";
import { HQButton, HQInput, HQToasts } from "@/components";
import axios from "axios";

const FaqAdd = () => {
  const [buttonLoader, setButtonLoader] = useState(false);

  const [faq, setFaq] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFaq((prevFaq) => ({
      ...prevFaq,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoader(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "admin/faq/insertfaq",
        faq,
        config
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setButtonLoader(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <HQInput
          type="text"
          name="title"
          id="title"
          value={faq.title}
          placeholder="Title"
          handleChange={handleInputChange}
          label="Title"
        />
        <HQInput
          type="text"
          name="content"
          id="content"
          value={faq.content}
          placeholder="Content"
          handleChange={handleInputChange}
          label="Content"
        />
        <HQButton
          customClass={"mt-5"}
          type="default"
          htmlType="submit"
          loading={buttonLoader}
          block
        >
          Add FAQ
        </HQButton>
      </form>
    </>
  );
};

export default FaqAdd;
