"use client";
import { useState } from "react";
import { Col, Row } from "antd";
import { HQBasicCard, HQButton, HQModal } from "@/components";
import styles from "../stylesheets.module.css";
import clsx from "clsx";

const Modal = () => {
  // custom modal start

  const [isCustomModalOpen, setCustomModalOpen] = useState(false);
  const showCustomModal = () => {
    setCustomModalOpen(true);
  };

  const handleCustomModalCancel = () => {
    setCustomModalOpen(false);
  };

  // custom modal end

  // custom width start
  const [isCustomWidthModalOpen, setCustomWidthModal] = useState(false);
  const showCustomWidthModal = () => {
    setCustomWidthModal(true);
  };

  const handleCustomWidthModalCancel = () => {
    setCustomWidthModal(false);
  };
  // custom width end

  // center modal start
  const [isCenterModalOpen, setCenterModal] = useState(false);
  const showCenterModal = () => {
    setCenterModal(true);
  };

  const handleCenterModalCancel = () => {
    setCenterModal(false);
  };
  // center modal end

  // custom close icon modal start
  const [isCustomCloseIconModalOpen, setCustomCloseIconModal] = useState(false);
  const showCustomCloseIconModal = () => {
    setCustomCloseIconModal(true);
  };

  const handleCustomCloseIconModalCancel = () => {
    setCustomCloseIconModal(false);
  };
  // custom close icon modal end

  return (
    <div>
      <h2 className="title-color mb-4">Basic modal:</h2>
      <div className={clsx(styles.buttonWrapper, "grid")}>
        <HQBasicCard header cardTitle={"Basic Modal"}>
          <HQButton
            customClass="mr-2"
            type="default"
            handleClick={showCustomModal}
          >
            basic modal
          </HQButton>
        </HQBasicCard>

        <HQBasicCard header cardTitle={"Custom Width Modal:"}>
          <HQButton
            customClass="mr-2"
            type="default"
            handleClick={showCustomWidthModal}
          >
            custom width modal
          </HQButton>
        </HQBasicCard>

        <HQBasicCard header cardTitle={"Center Modal:"}>
          <HQButton
            customClass="mr-2"
            type="default"
            handleClick={showCenterModal}
          >
            center modal
          </HQButton>
        </HQBasicCard>

        <HQBasicCard header cardTitle={"Center Close Icon Modal:"}>
          <HQButton
            customClass="mr-2"
            type="default"
            handleClick={showCustomCloseIconModal}
          >
            Custom Close Icon Modal
          </HQButton>
        </HQBasicCard>
      </div>

      <HQModal
        isModalOpen={isCustomModalOpen}
        title="Basic Modal"
        handleCancel={handleCustomModalCancel}
        customFooter={[
          <HQButton
            key={"Basic Modal"}
            type="default"
            handleClick={handleCustomModalCancel}
          >
            close
          </HQButton>,
        ]}
      >
        {/* <HQInput
          id={"yourName"}
          label={"Enter Your Name:"}
          placeholder={"Enter your name"}
          AKInputClassname="mb-5"
        />
        <HQInput
          id={"emailAddress"}
          label={"Enter your emaill:"}
          placeholder={"Enter your email"}
          AKInputClassname="mb-5"
        /> */}
      </HQModal>

      <HQModal
        closeIcon={"X"}
        isModalOpen={isCustomWidthModalOpen}
        title="Custom Width Modal"
        handleCancel={handleCustomWidthModalCancel}
        width={800}
        customFooter={[
          <HQButton
            key="Custom Width Modal"
            type="default"
            handleClick={handleCustomWidthModalCancel}
          >
            close
          </HQButton>,
        ]}
      >
        <p className="title-color h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          voluptates dolores repellendus aut saepe delectus assumenda! Magnam
          rerum numquam voluptatum.
        </p>
      </HQModal>

      <HQModal
        closeIcon={"X"}
        centered
        isModalOpen={isCenterModalOpen}
        title="Custom Close Icon Modal"
        handleCancel={handleCenterModalCancel}
        customFooter={[
          <HQButton
            type="default"
            key=""
            handleClick={handleCenterModalCancel}
          ></HQButton>,
        ]}
      >
        <p className="title-color h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          voluptates dolores repellendus aut saepe delectus assumenda! Magnam
          rerum numquam voluptatum.
        </p>
      </HQModal>

      <HQModal
        closeIcon={"X"}
        isModalOpen={isCustomCloseIconModalOpen}
        title="Custom Close Icon Modal"
        handleCancel={handleCustomCloseIconModalCancel}
      >
        <p className="title-color h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          voluptates dolores repellendus aut saepe delectus assumenda! Magnam
          rerum numquam voluptatum.
        </p>
      </HQModal>
    </div>
  );
};
export default Modal;
