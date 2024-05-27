"use client";

import UseDecodeToken from "@/hook/useDecodeToken/UseDecodeToken";

const receptionDashboard = () => {
  const accessToken = UseDecodeToken();
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
