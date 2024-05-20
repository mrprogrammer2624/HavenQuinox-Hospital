"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Blog = () => {
  const routes = useRouter();
  const [id, setId] = useState("nothing");

  const getBlogDetails = async () => {
    // const response = await axios.get("/api/users/aboutMe");
    // setData(response.data.data.name);
  };
  return (
    <>
      <h2>Profile</h2>
      <h2>
        {id === "nothing" ? (
          "User"
        ) : (
          <Link className="text-white" href={`/blog/${id}`}>
            {id}
          </Link>
        )}
      </h2>
      <div>
        <button
          onClick={getBlogDetails}
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ea0033] to-[#ff00c6] group-hover:from-[#ff00c886] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">getBlogDetails</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Blog;
