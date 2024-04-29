import { HQBasicCard, HQBreadcrumb } from "@/components";
import styles from "../stylesheets.module.css";
import clsx from "clsx";

const BreadcrumbPage = () => {
  const basicItems = [
    {
      title: "Home",
    },
    {
      title: <a href="">Application Center</a>,
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: "An Application",
    },
  ];

  const ItemsWithIcon = [
    {
      href: "",
      title: (
        <>
          <i class="ri-home-4-line"></i>
        </>
      ),
    },
    {
      href: "",
      title: (
        <>
          <i class="ri-user-line"></i>
        </>
      ),
    },
    {
      href: "",
      title: (
        <>
          <i class="ri-mail-line"></i>
        </>
      ),
    },
    {
      title: (
        <>
          <i class="ri-chat-1-line"></i>
        </>
      ),
    },
  ];

  const ItemsWithSeparator = [
    {
      title: "Location",
    },
    {
      type: "separator",
      separator: ":",
    },
    {
      href: "",
      title: "Application Center",
    },
    {
      type: "separator",
      separator: ">",
    },
    {
      href: "",
      title: "Application List",
    },
    {
      type: "separator",
    },
    {
      title: "An Application",
    },
  ];

  return (
    <div className={clsx(styles.HQBreadcrumbCardWrapper, "grid")}>
      <HQBasicCard cardTitle="Basic Breadcrumb:">
        <HQBreadcrumb items={basicItems} />
      </HQBasicCard>
      <HQBasicCard cardTitle="Breadcrumb With Custom Separator:">
        <HQBreadcrumb items={basicItems} separator=">" />
      </HQBasicCard>
      <HQBasicCard cardTitle="Breadcrumb With Icon:">
        <HQBreadcrumb items={ItemsWithIcon} separator=">" />
      </HQBasicCard>
      <HQBasicCard cardTitle="Breadcrumb With Independent Separator:">
        <HQBreadcrumb separator="" items={ItemsWithSeparator} />
      </HQBasicCard>
    </div>
  );
};

export default BreadcrumbPage;
