import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { parseCookies } from "nookies";

const useDecodeToken = (tokenName) => {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const decodeTokenFromCookies = () => {
      const cookies = parseCookies();
      const token = cookies[tokenName];

      if (token) {
        try {
          const decoded = jwtDecode(token);
          setDecodedToken(decoded);
        } catch (error) {
          console.error(`Error decoding ${tokenName} token:`, error);
          setDecodedToken(null);
        }
      } else {
        console.log(`No ${tokenName} token found in cookies`);
        setDecodedToken(null);
      }
    };

    decodeTokenFromCookies();
  }, [tokenName]);

  return decodedToken;
};

export default useDecodeToken;