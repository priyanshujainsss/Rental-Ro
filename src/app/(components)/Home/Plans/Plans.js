import React from "react";
import "./Plan.css";
import { Col, Row } from "antd";
import Plan from "./Plan";

function Plans() {
  return (
    <div className="mainPlanDiv" id="plans">
      <h2 className="MainPlanHeading">Subscription Plans</h2>
      <Row gutter={[20, 20]} className="planRows">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <Plan type={"Monthly Plan"} price={"399"} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <Plan type={"6 Month Plan"} price={"349"} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <Plan type={"Yearly Plan"} price={"299"} />
        </Col>
      </Row>
    </div>
  );
}

export default Plans;
