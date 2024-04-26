import { useMemo } from "react";
import styles from "./HQTextEditor.module.css";
import JoditEditor from "jodit-react";
export const HQTextEditor = ({
  value = "",
  onBlur = () => {},
  onchange = () => {},
  readonly = false,
  autofocus = true,
  statusbar = true,
  tabIndex = 1,
  askBeforePasteHTML = true,
  askBeforePasteFromWord = true,
  defaultActionOnPaste = "insert_clear_html",
  placeholder = "Write something ...",
  beautyHTML = true,
  height = "auto",
  toolbarButtonSize = "medium",
  toolbarAdaptive = true,
  cleanHTML = {},
  allowResizeX = true,
  allowResizeY = true,
  buttons = [
    "source",
    "|",
    "bold",
    "italic",
    "|",
    "ul",
    "ol",
    "|",
    "font",
    "fontsize",
    "brush",
    "paragraph",
    "|",
    "image",
    "table",
    "link",
    "|",
    "left",
    "center",
    "right",
    "justify",
    "|",
    "undo",
    "redo",
    "|",
    "hr",
    "eraser",
  ],
  dependencyList = [],
  ...rest
}) => {
  const editorConfig = useMemo(
    () => ({
      readonly: readonly,
      autofocus: autofocus,
      tabIndex: tabIndex,
      statusbar: statusbar,
      askBeforePasteHTML: askBeforePasteHTML,
      askBeforePasteFromWord: askBeforePasteFromWord,
      defaultActionOnPaste: defaultActionOnPaste,
      placeholder: placeholder,
      beautyHTML: beautyHTML,
      toolbarButtonSize: toolbarButtonSize,
      buttons: buttons,
      height: height,
      toolbarAdaptive: toolbarAdaptive,
      cleanHTML: cleanHTML,
      allowResizeX: allowResizeX,
      allowResizeY: allowResizeY,
    }),
    dependencyList
  );
  return (
    <JoditEditor
      config={editorConfig}
      value={value}
      onBlur={onBlur}
      onChange={onchange}
      {...rest}
    />
  );
};
