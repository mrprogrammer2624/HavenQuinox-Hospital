import styles from "./authentication.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import clsx from "clsx";
import { Authentication } from "@/assets/images";

export const AuthLayout = ({ children }) => {
  return (
    <div className={styles.authenticationLayout}>
      <div className={clsx("flex h-m-inherit", styles.authenticationWrapper)}>
        <Row className="h-full h-m-inherit my-auto mx-0 w-full">
          <Col xs={12} className={styles.authImageCol}>
            <div className="pa-5 p-0 h-full">
              <div className={clsx("bg-owl", styles.authCover)}>
                <div>{/* <Image src={logo} /> */}</div>
                <div
                  className={clsx(
                    styles.authImageContainer,
                    styles.authImageBg
                  )}
                >
                  <Image
                    src={Authentication}
                    alt="Authentication"
                    className={styles.authImage}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            lg={24}
            xl={12}
            className={clsx(
              "flex items-center flex-col justify-center",
              styles.authContentCol
            )}
          >
            {children}
          </Col>
        </Row>
      </div>
    </div>
  );
};
