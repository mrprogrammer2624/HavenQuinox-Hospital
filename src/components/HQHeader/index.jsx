"use client";
import { useContext, useEffect, useState } from "react";
import styles from "./HQHeader.module.css";
import clsx from "clsx";
import { ThemeContext } from "@/contexts/ThemeProvider";
import { HQButton, HQDropDownImg } from "../";

export const HQHeader = ({ items, name, image, email, imageAlt }) => {
  const {
    sidebarToggle,
    setSidebarToggle,
    sidebarToggleBtn,
    setSidebarToggleBtn,
    headerPaddingLeft,
  } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("navBarOpen");
      document.querySelector("html").setAttribute("data-sidebar-show", "true");
    } else {
      document.body.classList.remove("navBarOpen");
      document.querySelector("html").setAttribute("data-sidebar-show", "false");
    }
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1600) {
        setSidebarToggleBtn(false);
      } else {
        setSidebarToggleBtn(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSideBarFn = (e) => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <>
      {/* header start */}
      <header className={clsx(styles.header, "sticky top-0 z-index-999")}>
        <div
          className={styles.mainHeader}
          style={{ paddingLeft: headerPaddingLeft }}
        >
          <div className={clsx(styles.headerContainer, "flex justify-between")}>
            <div>
              {sidebarToggleBtn && (
                <HQButton
                  type={"default"}
                  className={clsx(styles.hamburger, "w-full h-full")}
                  //  Add Click Event
                  handleClick={() => setIsActive((current) => !current)}
                >
                  <svg width="25" height="25" viewBox="0 0 100 100">
                    <path
                      className={styles.line}
                      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                    />
                    <path className={styles.line} d="M 20,50 H 80" />
                    <path
                      className={styles.line}
                      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                    />
                  </svg>
                </HQButton>
              )}
            </div>
          </div>
          <div>
            <HQDropDownImg
              email={email}
              name={name}
              image={image}
              items={items}
              imageAlt={imageAlt}
            />
          </div>
        </div>
      </header>
      {/* header end */}
    </>
  );
};
