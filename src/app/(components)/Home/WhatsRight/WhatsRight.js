import { Col, Row } from "antd";
import React from "react";
import "./WhatsRight.css";
// import { Container } from './styles';

function WhatsRight() {
  return (
    <div className="mainDiv">
      <Row>
        <Col xxl={8} xl={8} lg={8}>
          <div className="leftDiv">
            <div className="HeadingDiv">
              <p className="heading">Decide what's right for you</p>
            </div>
            <div className="rightitems">
              <p className="itemOdd">Water Purity</p>
              <p className="itemEven">Price per Liter</p>
              <p className="itemOdd">Water Quality Testing</p>
              <p className="itemEven">Buying price</p>
              <p className="itemOdd">Setup Expense</p>
              <p className="itemEven">Care Expense</p>
              <p className="itemOdd">Maintenance Plan</p>
            </div>
          </div>
        </Col>
        <Col xxl={5} xl={5} lg={5}>
          <div className="HeadingImageDiv">
            {/* <img src="https://5.imimg.com/data5/NI/CJ/MY-9970411/20-ltr-packaged-drinking-water-jar.jpg" /> */}
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={6}></Col>
        <Col xxl={5} xl={5} lg={5}></Col>
      </Row>
    </div>
  );
}

export default WhatsRight;
