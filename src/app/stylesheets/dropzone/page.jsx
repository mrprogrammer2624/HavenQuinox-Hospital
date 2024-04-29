"use client";
import { HQBasicCard, HQDropDown } from "@/components";
import { message } from "antd";

const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error({
        content: `${info.file.name} file upload failed.`,
        duration: 10,
      });
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const DropzonePage = () => {
  return (
    <>
      <div>
        <HQBasicCard
          header
          cardTitle="Drag and Drop:"
          customCardBodyClass="overflow-visible"
        >
          <HQDropDown props={props} />
        </HQBasicCard>
      </div>
    </>
  );
};

export default DropzonePage;
