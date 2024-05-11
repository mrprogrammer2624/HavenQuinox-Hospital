"use client";
import clsx from "clsx";
import styles from "./header.module.css";
import { HQButton } from "@/components";
import Link from "next/link";
import { Icons } from "@/utility";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={clsx(styles.header, "fixed w-full")}>
      <div className="container">
        <div className={clsx(styles.headerWrapper, "bg-white grid")}>
          <div className="flex items-center">{Icons.logo}</div>
          <ul
            className={clsx(
              styles.listWrapper,
              "flex items-center justify-center"
            )}
          >
            <li>
              <Link className="h5 text-tertiary fw-600" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="h5 text-tertiary fw-600" href={"/aboutus"}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="h5 text-tertiary fw-600" href={"/doctor"}>
                Doctors
              </Link>
            </li>
            <li>
              <Link className="h5 text-tertiary fw-600" href={"/pages"}>
                Pages
              </Link>
            </li>
            <li>
              <Link className="h5 text-tertiary fw-600" href={"/contactus"}>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex gap-2">
            <HQButton
              customClass={clsx(styles.headerRightButton, "uppercase")}
              shape="round"
              type={"default"}
            >
              Log In
            </HQButton>
            <HQButton
              customClass={clsx(styles.headerRightButton, "uppercase")}
              shape="round"
              type="primary"
            >
              Sign Up
            </HQButton>
          </div>
        </div>
      </div>
    </header>
  );
};
