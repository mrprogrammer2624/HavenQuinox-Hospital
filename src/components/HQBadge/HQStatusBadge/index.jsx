import { Badge, Space } from "antd";
import styles from "./HQStatusBadge.module.css";
import clsx from "clsx";
export const HQStatusBadge = ({
  customClass,
  data,
  direction = "vertical",
  size,
  group,
  name,
  color,
}) => {
  return (
    <>
      {group ? (
        <Space direction={direction}>
          {data.map((item, index) => {
            return (
              <>
                <Badge
                  key={index}
                  status="success"
                  text={item.name}
                  color={item.color}
                  className={clsx(styles.badge, customClass)}
                  size={size}
                />
              </>
            );
          })}
        </Space>
      ) : (
        <Badge
          status="success"
          text={name}
          color={color}
          className={clsx(styles.badge, customClass)}
          size={size}
        />
      )}
    </>
  );
};
