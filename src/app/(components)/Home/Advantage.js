import React from "react";
import "./Advantage.css";
import { Col, Row } from "antd";
function Advantage() {
  return (
    <div className="advantageMainDiv">
      <Row>
        <Col xxl={13} xl={14} lg={14} md={12}>
          <div className="contentDiv">
            <p>
              The <span>Prime Water</span>
              <br />
              <span className="advantageTitle">Advantage</span>
            </p>
          </div>
        </Col>
        <Col xxl={9} xl={10} lg={10} md={12}>
          <img src={`/Homepageimages/Roadvantage.webp`} />
        </Col>
      </Row>
    </div>
  );
}

export default Advantage;
