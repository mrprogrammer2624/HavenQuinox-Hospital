"use client";
import { HQBasicCard } from "@/components";
import { Col, Row } from "antd";

const Typography = () => {
  return (
    <div>
      <h2 className="title-color mb-5">Title in different level:</h2>
      <HQBasicCard>
        <h1 className="title-color mb-5">h1. 68px</h1>
        <h2 className="title-color mb-5">h2. 42px</h2>
        <h3 className="title-color mb-5">h3. 26px</h3>
        <h4 className="title-color mb-5">h4. 22px</h4>
        <h5 className="title-color mb-5">h5. 20px</h5>
        <h6 className="title-color mb-5">h6. 18px</h6>
        <p className="title-color big mb-5">p.big 16px</p>
        <p className="title-color mb-5">p. 14px</p>
        <p className="title-color small mb-5">p.small 12px</p>
      </HQBasicCard>
    </div>
  );
};

export default Typography;
