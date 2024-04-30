"use client";
import { Input } from "antd";
import { useState } from "react";
// import CopyToClipboard from "react-copy-to-clipboard";
import styles from "./HQClipBoard.module.css";
import clsx from "clsx";
import CopyToClipboard from "react-copy-to-clipboard";
import { HQButton } from "@/components";
export const HQClipBoard = ({ HQClipBoardCardClassName, HQInputClassName }) => {
  const [textToCopy, setTextToCopy] = useState(""); // The text you want to copy
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = (text, result) => {
    if (result && text) {
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 2500);
    } else {
      // Handle the error scenario
      alert("Failed to copy text. Please try again.");
      setCopyStatus(false);
    }
  };

  return (
    <>
      <div className={clsx(HQClipBoardCardClassName, "flex gap-5")}>
        <div className="w-full">
          <Input
            value={textToCopy}
            onChange={(e) => setTextToCopy(e.target.value)}
            placeholder="Type or paste text here..."
            className={clsx(styles.HQClipBoardInput)}
          />
        </div>
        <div>
          <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
            <HQButton type="default" className={clsx(styles.HQClipBoardBtn)}>
              Copy to Clipboard
            </HQButton>
          </CopyToClipboard>
        </div>
      </div>
      {copyStatus && (
        <p className="mt-2 title-color">Text copied to clipboard!</p>
      )}
    </>
  );
};
