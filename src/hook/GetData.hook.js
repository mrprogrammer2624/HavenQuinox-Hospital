import { useEffect, useState } from "react";
import { axiosApi, setAuthHeader } from "@/axiosApi";

export const GetData = ({ url, tokenName }) => {
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGetData = async () => {
      try {
        const response = await axiosApi(url, {
          headers: {
            Authorization: `Bearer ${setAuthHeader(tokenName)}`,
          },
        });
        setGetData(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGetData();
  }, []);

  return [getData, loading, error];
};
