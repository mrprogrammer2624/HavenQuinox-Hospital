"use client";
import { HQBasicCard, HQToasts } from "@/components";
import styles from "../stylesheets.module.css";
import { notification } from "antd";
import clsx from "clsx";

const ToastPage = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.open({
      message: `Notification ${placement}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Corporis facere quo magni porro recusandae voluptate animi nostrum vel itaque ullam",
      placement: placement !== "" ? placement : "topRight",
      className: "HQ-toast",
    });
  };

  const typeNotification = (type) => {
    api[type]({
      message: `Notification ${type}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Corporis facere quo magni porro recusandae voluptate animi nostrum vel itaque ullam",
    });
  };
  return (
    <>
      <div className={clsx(styles.HQToastCardWrapper, "grid")}>
        <HQBasicCard header cardTitle="Basic Toast:">
          <HQToasts
            openNotification={() => openNotification("")}
            contextHolder={contextHolder}
            toastButtonText="Basic Toast"
          />
        </HQBasicCard>
        <HQBasicCard
          cardTitle="Toast With Placement:"
          customCardBodyClass="flex flex-wrap gap-4"
        >
          <HQToasts
            openNotification={() => openNotification("topLeft")}
            contextHolder={contextHolder}
            toastButtonText="Toast Top-Left"
          />
          <HQToasts
            openNotification={() => openNotification("topRight")}
            contextHolder={contextHolder}
            toastButtonText="Toast Top-Right"
          />
          <HQToasts
            openNotification={() => openNotification("bottom")}
            contextHolder={contextHolder}
            toastButtonText="Toast Bottom"
          />
          <HQToasts
            openNotification={() => openNotification("bottomLeft")}
            contextHolder={contextHolder}
            toastButtonText="Toast Bottom-Left"
          />
          <HQToasts
            openNotification={() => openNotification("bottomRight")}
            contextHolder={contextHolder}
            toastButtonText="Toast Bottom-Right"
          />
        </HQBasicCard>
        <HQBasicCard
          cardTitle="Toast With Status:"
          customCardBodyClass="flex flex-wrap gap-4"
        >
          <HQToasts
            openNotification={() => typeNotification("success")}
            contextHolder={contextHolder}
            toastButtonText="Success Toast"
          />
          <HQToasts
            openNotification={() => typeNotification("info")}
            contextHolder={contextHolder}
            toastButtonText="Info Toast"
          />
          <HQToasts
            openNotification={() => typeNotification("warning")}
            contextHolder={contextHolder}
            toastButtonText="Warning Toast"
          />
          <HQToasts
            openNotification={() => typeNotification("error")}
            contextHolder={contextHolder}
            toastButtonText="Error Toast"
          />
        </HQBasicCard>
      </div>
    </>
  );
};

export default ToastPage;
