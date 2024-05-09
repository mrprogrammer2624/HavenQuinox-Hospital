"use client";
import useDecodeToken from "@/hook/useDecodeToken/useDecodeToken";
import React, { useEffect } from "react";

const Dashboard = () => {
  const decodedAccessToken = useDecodeToken("Admintoken");

  return (
    <div>
      {decodedAccessToken ? (
        <div>
          <h2>Decoded Access Token:</h2>
          <h2>{decodedAccessToken.userData.email}</h2>
        </div>
      ) : (
        <p>No decoded access token available.</p>
      )}
    </div>
  );
};

export default Dashboard;
