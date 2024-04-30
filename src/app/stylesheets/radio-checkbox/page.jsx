"use client";
import { Col, Row } from "antd";
import { HQRadio, HQBasicCard, HQCheckBox } from "@/components";
import styles from "../stylesheets.module.css";
import { themeModeItems } from "@/utility";

const CheckboxAndRadioPage = () => {
  return (
    <div className="mb-3">
      <h3 className="mb-5 title-color">Radio Types:</h3>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} md={12} lg={8} xl={6}>
          <HQBasicCard
            header
            customClass={styles.checkboxCard}
            cardTitle={"Basic Radio:"}
          >
            <HQRadio
              radioClass="custom-class"
              defaultValue={themeModeItems[0].name}
              radioItems={themeModeItems}
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <HQBasicCard
            header
            customClass={styles.checkboxCard}
            cardTitle="Vertical Radio.Group"
          >
            <HQRadio
              radioClass="custom-class"
              defaultValue={themeModeItems[1].name}
              direction="vertical"
              radioItems={themeModeItems}
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <HQBasicCard
            header
            customClass={styles.checkboxCard}
            cardTitle="Solid Radio Button"
          >
            <HQRadio
              radioClass="custom-class"
              defaultValue={themeModeItems[0].name}
              buttonStyle="solid"
              direction="vertical"
              radioItems={themeModeItems}
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <HQBasicCard
            header
            customClass={styles.checkboxCard}
            cardTitle="Solid Vertical Radio Button"
          >
            <HQRadio
              radioClass="custom-class"
              defaultValue={themeModeItems[1].name}
              buttonStyle="solid"
              radioItems={themeModeItems}
            />
          </HQBasicCard>
        </Col>
      </Row>
      <h3 className="my-5 title-color">Checkbox Types:</h3>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} md={12} lg={8} xl={6}>
          <HQBasicCard
            header
            customClass={styles.checkboxCard}
            cardTitle={"Basic Checkbox:"}
          >
            <HQCheckBox
              defaultValue={"Apple"}
              options={[
                {
                  label: "Apple",
                  value: "Apple",
                },
              ]}
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <HQBasicCard
            header
            customClass={styles.checkboxCard}
            cardTitle={"Checkbox Group:"}
          >
            <HQCheckBox
              defaultValue={"Apple"}
              options={[
                {
                  label: "Apple",
                  value: "Apple",
                },
                {
                  label: "Pear",
                  value: "Pear",
                },
                {
                  label: "Orange",
                  value: "Orange",
                },
              ]}
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <HQBasicCard
            header
            customClass={styles.checkboxCard}
            cardTitle={"Checkbox Direction Column:"}
          >
            <HQCheckBox
              column
              defaultValue={"Apple"}
              options={[
                {
                  label: "Apple",
                  value: "Apple",
                },
                {
                  label: "Pear",
                  value: "Pear",
                },
                {
                  label: "Orange",
                  value: "Orange",
                },
              ]}
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <HQBasicCard
            header
            customClass={styles.checkboxCard}
            cardTitle={"Checkbox  order reverse:"}
          >
            <HQCheckBox
              column
              defaultValue={"Apple"}
              flexReverse
              options={[
                {
                  label: "Apple",
                  value: "Apple",
                },
                {
                  label: "Pear",
                  value: "Pear",
                },
                {
                  label: "Orange",
                  value: "Orange",
                },
              ]}
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <HQBasicCard
            header
            customClass={styles.checkboxCard}
            cardTitle={"Checkbox block order reverse:"}
          >
            <HQCheckBox
              column
              defaultValue={"Apple"}
              flexReverse
              block
              options={[
                {
                  label: "Apple",
                  value: "Apple",
                },
                {
                  label: "Pear",
                  value: "Pear",
                },
                {
                  label: "Orange",
                  value: "Orange",
                },
              ]}
            />
          </HQBasicCard>
        </Col>
      </Row>
    </div>
  );
};
export default CheckboxAndRadioPage;
