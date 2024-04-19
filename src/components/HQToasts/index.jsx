import { HQButton } from "..";

export const AKToasts = ({
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
