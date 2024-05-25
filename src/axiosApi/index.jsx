import axios from "axios";
import { toast } from "react-toastify";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const axiosApi = axios.create({
  baseURL: backendUrl,
});

const setAuthHeader = (token) => {
  axiosApi.defaults.headers.Authorization =
    token || `Bearer ${window?.localStorage?.getItem("_token")}`;
  // axiosApi.defaults.headers.requestToken = config?.REQUEST_TOKEN;
};

if (typeof window !== "undefined") {
  axiosApi.defaults.headers = {
    Authorization: window?.localStorage?.getItem("_token")
      ? `Bearer ${window?.localStorage?.getItem("_token")}`
      : "",
    // requestToken: config?.REQUEST_TOKEN,
  };
}

// setting up interceptors
axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 404) {
      console.log(" ERROR => 404 => API not available");
    } else if (error?.response?.status === 500) {
      console.log(" ERROR => 500 => Server Error");
      toast.error(error.response.data.message);
    } else if (error?.response?.status === 401) {
      toast.error(error.response.data.message);
      console.log(" ERROR => 401 => User is not authorized");
      if (localStorage.getItem("_token")) {
        // localStorage.removeItem("_token");
        window.location("/");
      }
    } else {
      console.log("/other-errors.");
    }

    return Promise.reject(error);
  }
);

export { axiosApi, setAuthHeader };
