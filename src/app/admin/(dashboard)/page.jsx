"use client";
import useDecodeToken from "@/hook/useDecodeToken/useDecodeToken";
import React from "react";

const Dashboard = () => {
  const accessToken = useDecodeToken("adminToken");
  return (
    <div>
      {accessToken ? (
        <div>
          <h2>Decoded Access Token:</h2>
          <h2>{accessToken.email}</h2>
        </div>
      ) : (
        <p>No decoded access token available.</p>
      )}
    </div>
  );
};

export default Dashboard;
