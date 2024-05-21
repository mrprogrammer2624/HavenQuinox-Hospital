"use client";
import { axiosApi } from "@/axiosApi";
import { HQAvatar, HQButton, HQInput, HQToasts } from "@/components";
import { notification } from "antd";
import React, { useState } from "react";

const BlogAdd = () => {
  const [error, setError] = useState(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [getPath, setPath] = useState({
    originalImagePath: "",
  });
  const [blog, setBlog] = useState({
    blogImage: "",
    title: "",
    content: "",
  });

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const imagePath = URL.createObjectURL(selectedFile);
    setBlog({
      ...blog,
      blogImage: selectedFile,
    });
    setPath({
      ...getPath,
      originalImagePath: imagePath,
    });
  };
  const blogAdd = (e) => {
    const { name, value } = e.target;
    setBlog((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  console.log();
  const typeNotification = (type) => {
    api[type]({
      message: `Notification ${type}`,
    });
  };

  // OnSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoader(true);
    try {
      // append data
      let formData = new FormData();
      formData.append("blogImage", blog?.blogImage);
      formData.append("title", blog.title);
      formData.append("content", blog.content);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axiosApi({
        method: "post",
        url: `admin/blog/insertBlog`,
        data: formData,
        config,
      });
      typeNotification("success", "SignUp successful!");
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password.");
        typeNotification("Error", "Login unsuccessful!");
      } else {
        setError("An error occurred during login.");
      }
    } finally {
      setButtonLoader(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="w-full"
      >
        <section>
          <div>
            <input type="file" onChange={handleImageChange} />
          </div>

          {/* <HQAvatar img={getPath.originalImagePath} alt="" /> */}
          <HQAvatar
            single
            size={150}
            img={getPath.originalImagePath}
            alt="Uploaded Image"
          />
        </section>
        <HQInput
          type="text"
          name="title"
          id="title"
          value={blog.title}
          placeholder="title"
          handleChange={blogAdd}
          label="title"
        />
        <HQInput
          type="text"
          name="content"
          id="content"
          value={blog.content}
          placeholder="content"
          handleChange={blogAdd}
          label="content"
        />
        <HQButton
          customClass={"mt-5"}
          type="default"
          htmlType="submit"
          loading={buttonLoader}
          block
        >
          Sign Up
        </HQButton>
      </form>
      <HQToasts contextHolder={contextHolder} />
    </>
  );
};

export default BlogAdd;
