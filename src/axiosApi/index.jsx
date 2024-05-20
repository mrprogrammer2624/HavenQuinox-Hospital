import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEB_URL,
  withCredentials: false,
});

// const setAuthHeader = (token) => {
//   axiosApi.defaults.headers.Authorization =
//     token || `Bearer ${localStorage.getItem("_token")}`;
//   axiosApi.defaults.headers.requestToken = getEncryptedString(
//     appConfig?.ENCRYPTION_MESSAGE
//   );
//   axiosApi.defaults.headers.deviceName = appConfig?.DEVICE_TYPE;
// };

// axiosApi.defaults.headers = {
// Authorization: `Bearer ${localStorage.getItem("_token")}`,
// requestToken: getEncryptedString(appConfig?.ENCRYPTION_MESSAGE),
// deviceName: appConfig?.DEVICE_TYPE,
// };

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 404) {
      console.log("/404");
    } else if (error?.response?.status === 500) {
      console.log("/500");
    } else if (error?.response?.status === 401) {
      localStorage?.removeItem("_token");
      if (window.location.href.includes("teacher")) {
        window.location.href = `/teacher/login`;
      } else if (window.location.href.includes("admin")) {
        window.location.href = `/admin/login`;
      } else {
        window.location.href = `/quiz/exam/`;
      }
    } else {
      console.log("/other-errors.");
    }
    return Promise.reject(error);
  }
);

export { axiosApi };

/* 

import axios from "axios";
import { appConfig } from "@/config";

const axiosApi = axios.create({
  baseURL: appConfig.API_URL,
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

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 404) {
      console.log("/404");
    } else if (error?.response?.status === 500) {
      console.log("/500");
    } else if (error?.response?.status === 401) {
      console.log("/401");
      if (window.location.pathname?.includes("/admin")) {
        localStorage?.removeItem("_token");
        window.location.href = "/admin";
      }
    } else if (error?.response?.status === 403) {
      console.log("/403");
      window.location.href = "/";
    } else {
      console.log("/other-errors.");
    }
    return Promise.reject(error);
  }
);

export { axiosApi, setAuthHeader };


*/
