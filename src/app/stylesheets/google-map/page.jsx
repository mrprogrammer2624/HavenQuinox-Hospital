"use client";
import React from "react";
import { clsx } from "clsx";
import { HQBasicCard } from "@/components";
import styles from "../stylesheets.module.css";
import { Col, Row } from "antd";

const GoogleMapPage = () => {
  return (
    <div>
      <h3 className="mb-5 title-color">Google Maps:</h3>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} xl={12}>
          <HQBasicCard
            cardTitle="Basic Map:"
            customCardBodyClass="overflow-visible"
          >
            <div className={clsx(styles.mapCard)}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.35442675362!2d12.37119174741144!3d41.91020879180389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%20Capital%2C%20Italy!5e0!3m2!1sen!2sin!4v1712655978935!5m2!1sen!2sin"
                width={"100%"}
                height={"100%"}
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </HQBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <HQBasicCard
            cardTitle="Street View Map:"
            customCardBodyClass="overflow-visible"
          >
            <div className={clsx(styles.mapCard)}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1712656133489!5m2!1sen!2sin!6m8!1m7!1s_f05yyfHQyFd5ZrRNmre3w!2m2!1d41.85415146259668!2d12.19259932080484!3f256.05658!4f0!5f0.7820865974627469"
                width={"100%"}
                height={"100%"}
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </HQBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <HQBasicCard
            cardTitle="Satellite Map Type:"
            customCardBodyClass="overflow-visible"
          >
            <div className={clsx(styles.mapCard)}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58971.114995197844!2d12.2275112!3d41.8882641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325f91a32b13c1b%3A0xa9b1ce9beb193c6f!2sGilda%20on%20the%20Beach!5e1!3m2!1sen!2sin!4v1712656606506!5m2!1sen!2sin"
                width={"100%"}
                height={"100%"}
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </HQBasicCard>
        </Col>
      </Row>
    </div>
  );
};

export default GoogleMapPage;
