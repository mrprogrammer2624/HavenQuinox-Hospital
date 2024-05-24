import { deleteCookie } from "cookies-next";

export const getRandomNumber = () =>
  Math.floor(10000000000 + Math.random() * 90000000000);

export const logout = () => {
  deleteCookie("_token");
  localStorage.removeItem("_token");
  window.location.href = "/admin";
};
