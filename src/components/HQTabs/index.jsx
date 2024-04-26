import { Tabs } from "antd";
import styles from "./HQTabs.module.css";
export const HQTabs = ({ handleChange, items, centered, tabPosition }) => {
  return (
    <Tabs
      centered={centered}
      defaultActiveKey="1"
      items={items}
      onChange={handleChange}
      className={styles.tab}
      tabPosition={tabPosition}
    />
  );
};
