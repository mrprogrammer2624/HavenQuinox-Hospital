import { HQButton } from "@/components";
export const HQToasts = ({
  openNotification,
  contextHolder,
  toastButtonText,
}) => {
  return (
    <div>
      {contextHolder}
      <HQButton type="fill" handleClick={openNotification}>
        {toastButtonText}
      </HQButton>
    </div>
  );
};
