import React from "react";
import "./Advantage.css";
import { Button, Col, Row } from "antd";
function Advantage() {
  return (
    <div className="advantageMainDiv">
      <Row>
        <Col xxl={13} xl={14} lg={12} md={24} sm={24} xs={24}>
          <div className="contentDiv">
            <p>
              The <span>Benefits of</span>
              <br />
              <span className="advantageTitle">Prime Water</span>
            </p>
            <p className="advantageContent">
              Plastic containers often contain water that is not suitable for
              consumption, and conventional water purifiers tend to inadequately
              regulate purification levels, leading to either insufficient or
              excessive purification. As water quality varies from one location
              to another, we tailor your{" "}
              <span className="brandName"> Prime Water </span>system to
              precisely meet the specific purification needs of your area.
            </p>
            <Button size="large">Discover More About us</Button>
          </div>
        </Col>
        <Col xxl={9} xl={10} lg={12} md={24} sm={24} xs={24}>
          <img src={`/Homepageimages/Roadvantage.webp`} />
        </Col>
      </Row>
    </div>
  );
}

export default Advantage;
