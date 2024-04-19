import { HQBasicCard, HQButton, HQPopover } from "@/components";
import clsx from "clsx";
import styles from "../stylesheets.module.css";

const Popover = () => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <div className={clsx(styles.HQPopoverCardWrapper, "grid")}>
      <HQBasicCard cardTitle="Basic Popover:">
        <HQPopover content={content} title={"Title"}>
          <HQButton type="default" className={styles.HQPopoverButton}>
            Basic Popover
          </HQButton>
        </HQPopover>
      </HQBasicCard>
      <HQBasicCard cardTitle="Tooltip With Hidden Arrow:">
        <HQPopover content={content} title={"Title"} arrow={false}>
          <HQButton type="default" className={styles.HQPopoverButton}>
            Popover with hidden arrow
          </HQButton>
        </HQPopover>
      </HQBasicCard>
      <HQBasicCard
        cardTitle="Tooltip With Trigger Mode:"
        customCardBodyClass="flex gap-4"
      >
        <HQPopover content={content} title={"Title"} trigger="focus">
          <HQButton type="default" className={styles.HQPopoverButton}>
            Focus Me
          </HQButton>
        </HQPopover>
        <HQPopover content={content} title={"Title"} trigger="click">
          <HQButton type="default" className={styles.HQPopoverButton}>
            Click Me
          </HQButton>
        </HQPopover>
      </HQBasicCard>
      <HQBasicCard cardTitle="Tooltip With Directions:">
        <h4 className="mb-2 title-color">Tooltip Direction Top:</h4>
        <div className="flex gap-4 mb-4">
          <HQPopover content={content} title={"Title"} placement="topLeft">
            <HQButton type="default" className={styles.HQPopoverButton}>
              Top Left Popover
            </HQButton>
          </HQPopover>
          <HQPopover content={content} title={"Title"} placement="top">
            <HQButton type="default" className={styles.HQPopoverButton}>
              Top Popover
            </HQButton>
          </HQPopover>
          <HQPopover content={content} title={"Title"} placement="topRight">
            <HQButton type="default" className={styles.HQPopoverButton}>
              Top Right Popover
            </HQButton>
          </HQPopover>
        </div>
        <h4 className="mb-2 title-color">Tooltip Direction Left & Right:</h4>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col gap-4">
            <HQPopover content={content} title={"Title"} placement="leftTop">
              <HQButton type="default" className={styles.HQPopoverButton}>
                Left Top Popover
              </HQButton>
            </HQPopover>
            <HQPopover content={content} title={"Title"} placement="left">
              <HQButton type="default" className={styles.HQPopoverButton}>
                Left Popover
              </HQButton>
            </HQPopover>
            <HQPopover content={content} title={"Title"} placement="leftBottom">
              <HQButton type="default" className={styles.HQPopoverButton}>
                Left Bottom Popover
              </HQButton>
            </HQPopover>
          </div>
          <div className="flex flex-col gap-4 text-right">
            <HQPopover content={content} title={"Title"} placement="rightTop">
              <HQButton type="default" className={styles.HQPopoverButton}>
                Right Top Popover
              </HQButton>
            </HQPopover>
            <HQPopover content={content} title={"Title"} placement="right">
              <HQButton type="default" className={styles.HQPopoverButton}>
                Right Popover
              </HQButton>
            </HQPopover>
            <HQPopover
              content={content}
              title={"Title"}
              placement="rightBottom"
            >
              <HQButton type="default" className={styles.HQPopoverButton}>
                Right Popover
              </HQButton>
            </HQPopover>
          </div>
        </div>
        <h4 className="mb-2 title-color">Tooltip Direction Bottom:</h4>
        <div className="flex gap-4 mb-4">
          <HQPopover content={content} title={"Title"} placement="bottomLeft">
            <HQButton type="default" className={styles.HQPopoverButton}>
              Bottom Left Popover
            </HQButton>
          </HQPopover>
          <HQPopover content={content} title={"Title"} placement="bottom">
            <HQButton type="default" className={styles.HQPopoverButton}>
              Bottom
            </HQButton>
          </HQPopover>
          <HQPopover content={content} title={"Title"} placement="bottomRight">
            <HQButton type="default" className={styles.HQPopoverButton}>
              Bottom Right Popover
            </HQButton>
          </HQPopover>
        </div>
      </HQBasicCard>
    </div>
  );
};

export default Popover;
