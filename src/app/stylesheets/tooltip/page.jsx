import { HQBasicCard, HQButton, HQTooltip } from "@/components";
import clsx from "clsx";
import styles from "../stylesheets.module.css";

const ToolTip = () => {
  return (
    <div className={clsx(styles.HQTooltipCardWrapper, "grid")}>
      <HQBasicCard header cardTitle="Basic Tooltip:">
        <HQTooltip title="Basic Tooltip" tooltipText="Basic Tooltip">
          <span className="title-color">Basic Tooltip</span>
        </HQTooltip>
      </HQBasicCard>
      <HQBasicCard header cardTitle="Tooltip With Hidden Arrow:">
        <HQTooltip
          title="Tooltip With Hidden Arrow"
          tooltipText="Tooltip With Hidden Arrow"
          arrow={false}
        >
          <span className="title-color">Tooltip With Hidden Arrow</span>
        </HQTooltip>
      </HQBasicCard>
      <HQBasicCard
        header
        cardTitle="Tooltip With Trigger Mode:"
        customCardBodyClass="flex gap-4"
      >
        <HQTooltip title="Focus Me" tooltipText="Focus Me" trigger="focus">
          <HQButton className="text-color">Focus Me</HQButton>
        </HQTooltip>
        <HQTooltip title="Click Me" tooltipText="Click Me" trigger="click">
          <HQButton className="text-color">Click Me</HQButton>
        </HQTooltip>
      </HQBasicCard>
      <HQBasicCard header cardTitle="Tooltip With Directions:">
        <h4 className="mb-2 text-color">Tooltip Direction Top:</h4>
        <div className="flex gap-4 mb-4">
          <HQTooltip
            title="Top Left "
            tooltipText="Top Left  Tooltip"
            placement="topLeft"
          >
            <HQButton className="text-color">Left Top</HQButton>
          </HQTooltip>
          <HQTooltip title="Top" tooltipText="Top Tooltip" placement="top">
            <HQButton className="text-color">Top</HQButton>
          </HQTooltip>
          <HQTooltip
            title="Top Right"
            tooltipText="Top Right Tooltip"
            placement="topRight"
          >
            <HQButton className="text-color">Top Right</HQButton>
          </HQTooltip>
        </div>
        <h4 className="mb-2 text-color">Tooltip Direction Left & Right:</h4>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col gap-4">
            <HQTooltip
              title="Left Top"
              tooltipText="Left Top Tooltip"
              placement="leftTop"
            >
              <HQButton className="text-color">Left Top</HQButton>
            </HQTooltip>
            <HQTooltip title="Left" tooltipText="Left Tooltip" placement="left">
              <HQButton className="text-color">Left</HQButton>
            </HQTooltip>
            <HQTooltip
              title="Left Bottom"
              tooltipText="Left Bottom Tooltip"
              placement="leftBottom"
            >
              <HQButton className="text-color">Left Bottom</HQButton>
            </HQTooltip>
          </div>
          <div className="flex flex-col gap-4 text-right">
            <HQTooltip
              title="Right Top"
              tooltipText="Right Top Tooltip"
              placement="rightTop"
            >
              <HQButton className="text-color">Right Top</HQButton>
            </HQTooltip>
            <HQTooltip
              title="Right"
              tooltipText="Right Tooltip"
              placement="right"
            >
              <HQButton className="text-color">Right</HQButton>
            </HQTooltip>
            <HQTooltip
              title="Right Bottom"
              tooltipText="Right Bottom Tooltip"
              placement="rightBottom"
            >
              <HQButton className="text-color">Right Bottom</HQButton>
            </HQTooltip>
          </div>
        </div>
        <h4 className="mb-2 text-color">Tooltip Direction Bottom:</h4>
        <div className="flex gap-4 mb-4">
          <HQTooltip
            title="Bottom Left"
            tooltipText="Bottom Left Tooltip"
            placement="bottomLeft"
          >
            <HQButton className="text-color">Bottom Left</HQButton>
          </HQTooltip>
          <HQTooltip
            title="Bottom"
            tooltipText="Bottom Tooltip"
            placement="bottom"
          >
            <HQButton className="text-color">Bottom</HQButton>
          </HQTooltip>
          <HQTooltip
            title="Bottom Right"
            tooltipText="Bottom Right Tooltip"
            placement="bottomRight"
          >
            <HQButton className="text-color">Bottom Right</HQButton>
          </HQTooltip>
        </div>
      </HQBasicCard>
    </div>
  );
};

export default ToolTip;
