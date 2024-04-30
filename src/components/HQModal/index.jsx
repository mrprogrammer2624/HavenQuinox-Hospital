import React from "react";
import { Modal } from "antd";
import styles from "./HQModal.module.css";
export const HQModal = ({
  handleOk,
  title,
  isModalOpen,
  handleCancel,
  children,
  closeIcon,
  customFooter,
  width,
  centered = true,
}) => {
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        ClassName={styles.modal}
        wrapClassName={styles.modalContainer}
        closeIcon={closeIcon}
        footer={customFooter}
        width={width}
        centered={centered}
      >
        {children}
      </Modal>
    </>
  );
};
