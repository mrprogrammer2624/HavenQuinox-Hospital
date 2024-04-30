"use client";
import { Col, Row } from "antd";
import { HQBasicCard, HQDropDownImg, HQDropDownSimple } from "@/components";
import { simpleDropDownItems, userDropItems } from "@/utility";
import styles from "../stylesheets.module.css";

const DropdownPage = () => {
  return (
    <div>
      <h2 className="mb-5 title-color">Drop Down Types:</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} lg={12}>
          <HQBasicCard
            cardTitle={"Primary Drop Down:"}
            customClass={styles.card}
            customCardBodyClass="flex flex-wrap gap-4"
          >
            <HQDropDownSimple title="primary" items={simpleDropDownItems} />
          </HQBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <HQBasicCard
            cardTitle={"Drop Down Direction:"}
            customClass={styles.card}
            customCardBodyClass="flex flex-wrap gap-5"
          >
            <HQDropDownSimple
              placement="top"
              title="Top"
              items={simpleDropDownItems}
            />
            <HQDropDownSimple
              placement="topLeft"
              title="Top Left"
              items={simpleDropDownItems}
            />
            <HQDropDownSimple
              placement="topRight"
              title="Top Right"
              items={simpleDropDownItems}
            />
            <HQDropDownSimple
              placement="bottomLeft"
              title="Bottom Left"
              items={simpleDropDownItems}
            />
            <HQDropDownSimple
              placement="bottomRight"
              title="Bottom Right"
              items={simpleDropDownItems}
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <HQBasicCard cardTitle={"Label:"} customClass={styles.card}>
            <HQDropDownSimple
              title="Label Drop Down"
              label
              items={simpleDropDownItems}
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <HQBasicCard
            cardTitle={"Drop With Image:"}
            customClass="mb-5"
            className={styles.card}
          >
            <HQDropDownImg items={userDropItems} />
          </HQBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <HQBasicCard
            cardTitle={"Drop Down Text Only:"}
            customClass={styles.card}
            customCardBodyClass="flex flex-wrap gap-4"
          >
            <HQDropDownSimple
              title="text only"
              textOnly
              items={simpleDropDownItems}
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <HQBasicCard
            cardTitle={"Drop Down Icon Only:"}
            customClass={styles.card}
            customCardBodyClass="flex flex-wrap gap-4"
          >
            <HQDropDownSimple items={simpleDropDownItems} />
          </HQBasicCard>
        </Col>
      </Row>
    </div>
  );
};

export default DropdownPage;
