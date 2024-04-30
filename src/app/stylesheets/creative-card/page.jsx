"use client";
import { Col, Row } from "antd";
import { BagShowcase } from "@/assets/images/avatar/avatar-four.png";
import {
  HQBasicCard,
  HQViewCard,
  HQPrimaryCard,
  HQImageCard,
} from "@/components";
import { analyticsViewData, recordsData } from "@/utility";

const CreativeCardPage = () => {
  return (
    <Row
      gutter={[
        { xs: 10, sm: 15, md: 20, lg: 25, xl: 30 },
        { xs: 10, sm: 15, md: 20, lg: 25, xl: 30 },
      ]}
    >
      <Col sm={24}>
        <Row
          gutter={[
            { xs: 10, sm: 15, md: 20 },
            { xs: 10, sm: 15, md: 20 },
          ]}
        >
          {analyticsViewData &&
            analyticsViewData.map((item, index) => {
              return (
                <Col xs={24} sm={12} lg={8} xl={6} key={index}>
                  <HQBasicCard header={false}>
                    <HQViewCard
                      title={item.value}
                      subtitle={item.name}
                      path={item.path}
                      pathname={item.pathname}
                      iconBg={item.bg}
                      icon={item.icon}
                    />
                  </HQBasicCard>
                </Col>
              );
            })}
        </Row>
      </Col>
      <Col sm={24}>
        <Row
          gutter={[
            { xs: 10, sm: 15, md: 20 },
            { xs: 10, sm: 15, md: 20 },
          ]}
        >
          {recordsData &&
            recordsData.map((item, index) => {
              return (
                <Col xs={24} sm={12} lg={6} xl={4} key={index}>
                  <HQPrimaryCard
                    title={item.description}
                    subtitle={item.name}
                    bg={item.backgroundColor}
                    color={item.color}
                    icon={item.icon}
                  />
                </Col>
              );
            })}
        </Row>
      </Col>
      <Col sm={24}>
        <h2 className="mb-5 title-color">Image Cards</h2>
        <Row
          gutter={[
            { xs: 10, sm: 15, md: 20 },
            { xs: 10, sm: 15, md: 20 },
          ]}
        >
          <Col xs={24} sm={12} lg={8} xl={6}>
            <HQImageCard
              userImg={BagShowcase}
              cardImg={BagShowcase}
              name="Bloom NFT"
              email="@bloom116"
              description="Some quick example text to build on the card title and mHQe up the bulk of the card's content. Some quick example text to build on the card title and mHQe up the bulk of the card's content."
              user={true}
              buttonTitle="go somewhere"
            ></HQImageCard>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <HQImageCard
              userImg={BagShowcase}
              cardImg={BagShowcase}
              name="Bloom NFT"
              email="@bloom116"
              description="Some quick example text to build on the card title and mHQe up the bulk of the card's content. Some quick example text to build on the card title and mHQe up the bulk of the card's content."
              user={true}
            ></HQImageCard>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <HQImageCard
              userImg={BagShowcase}
              cardImg={BagShowcase}
              name="Bloom NFT"
              email="@bloom116"
              description="Some quick example text to build on the card title and mHQe up the bulk of the card's content."
              buttonTitle="go somewhere"
            ></HQImageCard>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <HQImageCard
              userImg={BagShowcase}
              cardImg={BagShowcase}
              description="Some quick example text to build on the card title and mHQe up the bulk of the card's content. Some quick example text to build on the card title and mHQe up the bulk of the card's content. "
            ></HQImageCard>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CreativeCardPage;
