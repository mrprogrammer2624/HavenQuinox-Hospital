"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [sidebarToggleBtn, setSidebarToggleBtn] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [headerPaddingLeft, setHeaderPaddingLeft] = useState(0);

  return (
    <ThemeContext.Provider
      value={{
        sidebarToggleBtn,
        setSidebarToggleBtn,
        sidebarToggle,
        setSidebarToggle,
        headerPaddingLeft,
        setHeaderPaddingLeft,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
