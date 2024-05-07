import { HQButton } from "@/components";
export const HQToasts = ({
  openNotification,
  contextHolder,
  toastButtonText,
}) => {
  return (
    <div>
      {contextHolder}
      {toastButtonText && (
        <HQButton type="fill" handleClick={openNotification}>
          {toastButtonText}
        </HQButton>
      )}
    </div>
  );
};
