"use client";

import { HQBasicLoader } from "@/components";
import { UseDecodeTokenHook } from "@/hook";

const Dashboard = () => {
  const accessToken = UseDecodeTokenHook("adminToken");
  return (
    <div>
      {accessToken ? (
        <div>
          <h2>Decoded Access Token:</h2>
          <h2>{accessToken.email}</h2>
          <h2>{accessToken.role}</h2>
        </div>
      ) : (
        <p>No decoded access token available.</p>
      )}
    </div>
  );
};

export default Dashboard;
