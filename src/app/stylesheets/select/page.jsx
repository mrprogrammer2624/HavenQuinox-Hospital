"use client";
import { Col, Row } from "antd";
import { HQSelect, HQBasicCard, HQTags } from "@/components";

const SelectPage = () => {
  const options = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "Yiminghe",
      label: "yiminghe",
    },
  ];
  const LabelTypeOptions = [
    {
      value: "jack",
      label: (
        <>
          <div className="flex items-center w-100">
            Jack
            <HQTags
              color="red"
              title="Sample"
              customClass="fw-400 ml-auto"
              pills={true}
            />
          </div>
        </>
      ),
    },
    {
      value: "lucy",
      label: (
        <>
          <div className="flex items-center w-100">
            Lucy
            <HQTags
              color="green"
              title="Sample"
              customClass="fw-400 ml-auto"
              pills={true}
            />
          </div>
        </>
      ),
    },
    {
      value: "Yiminghe",
      label: (
        <>
          <div className="flex items-center w-100">
            yiminghe
            <HQTags
              color="purple"
              title="Sample"
              customClass="fw-400 ml-auto"
              pills={true}
            />
          </div>
        </>
      ),
    },
  ];
  return (
    <div>
      <h2 className="title-color mb-5 ">Basic select types:</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} lg={12}>
          <HQBasicCard cardTitle={"basic select:"}>
            <HQSelect options={options} defaultValue="jack" />
          </HQBasicCard>
        </Col>

        <Col xs={24} lg={12}>
          <HQBasicCard cardTitle={"select with placeholder:"}>
            <HQSelect options={options} placeholder="placeholder" />
          </HQBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <HQBasicCard cardTitle={"select with custom drop down icon:"}>
            <HQSelect
              options={options}
              placeholder="placeholder"
              suffixIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="currentColor"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              }
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <HQBasicCard cardTitle={"Label type select:"}>
            <HQSelect
              options={LabelTypeOptions}
              variant="outlined"
              placeholder="label type select"
            />
          </HQBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <HQBasicCard cardTitle={"Default  Open:"}>
            <HQSelect options={options} defaultValue="jack" isOpen={true} />
          </HQBasicCard>
        </Col>
      </Row>
    </div>
  );
};

export default SelectPage;
