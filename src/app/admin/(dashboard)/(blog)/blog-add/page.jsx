"use client";
import { HQAvatar } from "@/components";
import React, { useState } from "react";

const BlogAdd = () => {
  const [file, setFile] = useState({
    adminImage: "",
  });

  const [getPath, setPath] = useState({
    originalImagePath: "",
  });

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const imagePath = URL.createObjectURL(selectedFile);
    setFile({
      ...file,
      adminImage: selectedFile,
    });
    setPath({
      ...getPath,
      originalImagePath: imagePath,
    });
  };
  return (
    <section>
      <div>
        <input type="file" onChange={handleImageChange} />
      </div>
      <input type="text" />

      {/* <HQAvatar img={getPath.originalImagePath} alt="" /> */}
      <HQAvatar
        single
        size={150}
        img={getPath.originalImagePath}
        alt="Uploaded Image"
      />
    </section>
  );
};

export default BlogAdd;
