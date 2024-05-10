"use client";
import { Col, Row } from "antd";
import { HQAvatar, HQBasicCard } from "@/components";

const AvatarPage = () => {
  const userData = [
    {
      bg: "red",
      children: "t",
      img: "https://i.pravatar.cc/300",
    },
    {
      bg: "green",
      children: "k",
    },
    {
      bg: "blue",
      children: "t",
    },
  ];

  const singleUserData = [
    {
      img: "https://i.pravatar.cc/300",
    },
  ];

  return (
    <>
      <h2 className="mb-5 title-color">Avatar</h2>
      <Row gutter={[20, 20]}>
        <Col sm={12}>
          <HQBasicCard header cardTitle="Basic Avatar">
            <HQAvatar data={singleUserData} />
          </HQBasicCard>
        </Col>
        <Col sm={12}>
          <HQBasicCard header cardTitle="Square Avatar">
            <HQAvatar data={singleUserData} shape="square" />
          </HQBasicCard>
        </Col>
        <Col sm={12}>
          <HQBasicCard header cardTitle="Avatar Group">
            <HQAvatar data={userData} />
          </HQBasicCard>
        </Col>
        <Col sm={12}>
          <HQBasicCard header cardTitle="Square Avatar Group">
            <HQAvatar shape="square" data={userData} />
          </HQBasicCard>
        </Col>
      </Row>
    </>
  );
};

export default AvatarPage;
