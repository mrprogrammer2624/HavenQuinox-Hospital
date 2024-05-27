import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { jwtDecode } from "jwt-decode";

const UseDecodeTokenHook = (tokenName) => {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const decodeTokenFromCookies = () => {
      const cookies = parseCookies();
      const token = cookies[tokenName];

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
  }, [parseCookies]);

  return decodedToken;
};

export default UseDecodeTokenHook;
