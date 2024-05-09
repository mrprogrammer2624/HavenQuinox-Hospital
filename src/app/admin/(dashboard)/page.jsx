"use client";
import useDecodeToken from "@/hook/useDecodeToken/useDecodeToken";
import React from "react";

const Dashboard = () => {
  const decodedAccessToken = useDecodeToken("Admintoken");
  return (
    <div>
      {decodedAccessToken ? (
        <div>
          <h2>Decoded Access Token:</h2>
          <pre>{JSON.stringify(decodedAccessToken, null, 2)}</pre>
        </div>
      ) : (
        <p>No decoded access token available.</p>
      )}
      <h2>{decodedAccessToken.userData.email}</h2>
    </div>
  );
};

export default Dashboard;
