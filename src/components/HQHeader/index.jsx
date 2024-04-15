"use client";
import { useContext, useState } from "react";
import styles from "./HQHeader.module.css";
import clsx from "clsx";
import { Icons } from "@/utility";

export const HQHeader = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);

  // default theme color start
  const defaultDarkTheme = "theme-dark-pelican";
  const defaultLightTheme = "theme-light-hen";
  // default theme color end

  // setting drawer start
  const showSettingDrawer = () => {
    setOpenSetting(true);
  };
  const closeSettingDrawer = () => {
    setOpenSetting(false);
  };
  // setting drawer end

  // search modal start
  const handleSearchModalFn = () => {
    setIsSearchModalOpen(true);
  };
  const handleSearchModalCancel = () => {
    setIsSearchModalOpen(false);
  };
  // search modal end
  return (
    <>
      {/* header start */}
      <header className={clsx(styles.header, "sticky top-0 z-index-999")}>
        <div className={styles.mainHeader}>
          <div className={clsx(styles.headerContainer, "flex justify-between")}>
            <button
              className={styles.headerContainerLeft}
              onClick={handleSearchModalFn}
            >
              {Icons.search}
            </button>
            <div
              className={clsx(styles.headerContainerRight, "flex items-center")}
            >
              <button
                className={clsx(
                  styles.headerElement,
                  "d-flex align-items-center justify-center"
                )}
              >
                {Icons.fullScreen}
              </button>
              <button
                className={clsx(styles.headerElement, styles.settingBtn)}
                onClick={showSettingDrawer}
              >
                {Icons.setting}
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
      {/* search modal start */}
      {/* search modal end */}
    </>
  );
};
