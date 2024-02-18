import { Carousel, Col, Row } from "antd";
import React from "react";
import "./WhatsRight.css";
import Image from "next/image";
import MobileView from "./MobileView";
import WaterCan from "./Components/Watercan";
import BrandRO from "./Components/BrandRO";
import OtherRO from "./Components/OtherRO";
// import { Container } from './styles';

function WhatsRight() {
  return (
    <div className="mainDiv">
      <Row>
        <Col xxl={8} xl={8} lg={8} xs={12}>
          <div className="leftDiv">
            <div className="HeadingDiv">
              <p className="heading">
                Decide <br /> What's right <br /> for you
              </p>
            </div>
            <div className="rightitems">
              <p>Water Purity</p>
              <p>Price per Liter</p>
              <p>Water Quality Testing</p>
              <p>Buying price</p>
              <p>Setup Expense</p>
              <p>Care Expense</p>
              <p>Maintenance Plan</p>
            </div>
          </div>
        </Col>
        {/* <Carousel autoplay> */}
        <Col xxl={5} xl={5} lg={5} className="watercancol">
          <WaterCan />
        </Col>
        <Col xxl={6} xl={6} lg={6} className="watercancol">
          <BrandRO />
        </Col>
        <Col xxl={5} xl={5} lg={5} className="watercancol">
          <OtherRO />
        </Col>
        <Col xxl={0} xl={0} lg={0} md={12} xs={12}>
          <MobileView />
        </Col>
        {/* </Carousel> */}
      </Row>
    </div>
  );
}

export default WhatsRight;
