"use client"
import { HQBasicCard, HQPagination } from "@/components";
import styles from "../stylesheets.module.css";
import clsx from "clsx";

const PaginationPage = () => {
  const handlePageNumberChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <span className="page-btn prev-button">Previous</span>;
    }
    if (type === "next") {
      return <span className="page-btn next-button">Next</span>;
    }
    return originalElement;
  };

  return (
    <>
      <div className={clsx(styles.HQPaginationPageCardWrapper, "grid")}>
        <HQBasicCard cardTitle="Basic Pagination:">
          <HQPagination
            totalSize={50}
            handleChange={() => console.log("Basic Pagination")}
          />
        </HQBasicCard>
        <HQBasicCard cardTitle="Simple Pagination:">
          <HQPagination
            totalSize={50}
            simple
            handleChange={() => console.log("Simple Pagination")}
          />
        </HQBasicCard>
        <HQBasicCard cardTitle="Small Pagination:">
          <HQPagination
            totalSize={500}
            size="small"
            handleChange={() => console.log("Small Pagination")}
          />
        </HQBasicCard>
        <HQBasicCard cardTitle="Pagination With Page Jumper:">
          <HQPagination
            totalSize={500}
            showQuickJumper
            handleChange={handlePageNumberChange}
          />
        </HQBasicCard>
        <HQBasicCard cardTitle="Pagination With Next & Prev Button:">
          <HQPagination
            totalSize={50}
            itemRender={itemRender}
            handleChange={() =>
              console.log("Pagination With Next & Prev Button")
            }
          />
        </HQBasicCard>
      </div>
    </>
  );
};

export default PaginationPage;
