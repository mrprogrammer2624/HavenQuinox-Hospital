"use client";
import { HQBasicCard, HQDrawer, HQButton } from "@/components";
import clsx from "clsx";
import { useState } from "react";
import styles from "../stylesheets.module.css";

const OffcanvasPage = () => {
  const [showBasicDrawer, setShowBasicDrawer] = useState(false);
  const [showDrawerLeft, setShowDrawerLeft] = useState(false);
  const [showDrawerTop, setShowDrawerTop] = useState(false);
  const [showDrawerBottom, setShowDrawerBottom] = useState(false);
  const [showDrawerLarge, setShowDrawerLarge] = useState(false);

  const handleBasicOffCanvasShow = () => {
    setShowBasicDrawer(true);
  };

  const handleBasicOffCanvasClose = () => {
    setShowBasicDrawer(false);
  };

  const handleLeftOffCanvasShow = () => {
    setShowDrawerLeft(true);
  };

  const handleLeftOffCanvasClose = () => {
    setShowDrawerLeft(false);
  };

  const handleTopOffCanvasShow = () => {
    setShowDrawerTop(true);
  };

  const handleTopOffCanvasClose = () => {
    setShowDrawerTop(false);
  };

  const handleBottomOffCanvasShow = () => {
    setShowDrawerBottom(true);
  };

  const handleBottomOffCanvasClose = () => {
    setShowDrawerBottom(false);
  };

  const handleLargeOffCanvasShow = () => {
    setShowDrawerLarge(true);
  };

  const handleLargeOffCanvasClose = () => {
    setShowDrawerLarge(false);
  };

  return (
    <div className={clsx(styles.HQOffCanvasCardWrapper, "grid")}>
      <HQBasicCard cardTitle="Basic OffCanvas:">
        <HQButton
          customClass="mr-2"
          type="fill"
          handleClick={handleBasicOffCanvasShow}
        >
          Basic Off-canvas
        </HQButton>
        <HQDrawer
          handleClose={handleBasicOffCanvasClose}
          setOpen={showBasicDrawer}
        >
          <div>
            <h2 className="title-color mb-4">Basic Off-Canvas</h2>
            <div>
              <p className="text-color">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis iste ut dolorem est quo assumenda quis. Rerum
                doloremque, iure sint ut officia ratione dignissimos nobis,
                suscipit at a illum laudantium!
              </p>
            </div>
          </div>
        </HQDrawer>
      </HQBasicCard>
      <HQBasicCard cardTitle="OffCanvas Size Large:">
        <HQButton
          customClass="mr-2"
          type="fill"
          handleClick={handleLargeOffCanvasShow}
        >
          Size Large Off-Canvas
        </HQButton>
        <HQDrawer
          handleClose={handleLargeOffCanvasClose}
          setOpen={showDrawerLarge}
          size="large"
        >
          <div>
            <h2 className="title-color mb-4">Size Large Off-Canvas</h2>
            <div>
              <p className="text-color">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis iste ut dolorem est quo assumenda quis. Rerum
                doloremque, iure sint ut officia ratione dignissimos nobis,
                suscipit at a illum laudantium!
              </p>
            </div>
          </div>
        </HQDrawer>
      </HQBasicCard>
      <HQBasicCard
        cardTitle="OffCanvas Placement:"
        customCardBodyClass="flex gap-4 flex-wrap"
      >
        <div>
          <HQButton
            customClass="mr-2"
            type="fill"
            handleClick={handleLeftOffCanvasShow}
          >
            Off-Canvas Left
          </HQButton>
          <HQDrawer
            handleClose={handleLeftOffCanvasClose}
            setOpen={showDrawerLeft}
            placement="left"
          >
            <div>
              <h2 className="title-color mb-4">Off-Canvas Left</h2>
              <div>
                <p className="text-color">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis iste ut dolorem est quo assumenda quis. Rerum
                  doloremque, iure sint ut officia ratione dignissimos nobis,
                  suscipit at a illum laudantium!
                </p>
              </div>
            </div>
          </HQDrawer>
        </div>
        <div>
          <HQButton
            customClass="mr-2"
            type="fill"
            handleClick={handleTopOffCanvasShow}
          >
            Off-Canvas Top
          </HQButton>
          <HQDrawer
            handleClose={handleTopOffCanvasClose}
            setOpen={showDrawerTop}
            placement="top"
          >
            <div>
              <h2 className="title-color mb-4">Off-Canvas Top</h2>
              <div>
                <p className="text-color">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis iste ut dolorem est quo assumenda quis. Rerum
                  doloremque, iure sint ut officia ratione dignissimos nobis,
                  suscipit at a illum laudantium!
                </p>
              </div>
            </div>
          </HQDrawer>
        </div>
        <div>
          <HQButton
            customClass="mr-2"
            type="fill"
            handleClick={handleBottomOffCanvasShow}
          >
            Off-Canvas Bottom
          </HQButton>
          <HQDrawer
            handleClose={handleBottomOffCanvasClose}
            setOpen={showDrawerBottom}
            placement="bottom"
          >
            <div>
              <h2 className="title-color mb-4">Off-Canvas Bottom</h2>
              <div>
                <p className="text-color">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis iste ut dolorem est quo assumenda quis. Rerum
                  doloremque, iure sint ut officia ratione dignissimos nobis,
                  suscipit at a illum laudantium!
                </p>
              </div>
            </div>
          </HQDrawer>
        </div>
      </HQBasicCard>
    </div>
  );
};
export default OffcanvasPage;
