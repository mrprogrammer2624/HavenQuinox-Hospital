import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { jwtDecode } from "jwt-decode";

const UseDecodeToken = () => {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const decodeTokenFromCookies = () => {
      const cookies = parseCookies();
      const token = cookies["_token"];

      if (!token) {
        console.error("_token cookie not found");
        return;
      }
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded.userData);
      } catch (error) {
        console.error(`Error decoding ${token} token:`, error);
        setDecodedToken(null);
      }
    };

    decodeTokenFromCookies();
  }, [parseCookies]); // Add parseCookies as a dependency

  return decodedToken;
};

export default UseDecodeToken;
