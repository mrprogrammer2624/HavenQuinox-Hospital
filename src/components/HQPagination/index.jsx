import clsx from "clsx";
import { Pagination } from "antd";
import styles from "./HQPagination.module.css";

export const HQPagination = ({
  totalSize,
  size,
  handleChange,
  onShowSizeChange,
  HQPaginationClassname,
  ...rest
}) => {
  return (
    <div>
      <Pagination
        defaultCurrent={1}
        total={totalSize}
        size={size}
        onChange={handleChange}
        onShowSizeChange={onShowSizeChange}
        className={clsx(styles.HQPagination, HQPaginationClassname)}
        {...rest}
      />
    </div>
  );
};
