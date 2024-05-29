"use client";

import { UseDecodeTokenHook } from "@/hook";

const receptionDashboard = () => {
  const accessToken = UseDecodeTokenHook();
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

export default receptionDashboard;
