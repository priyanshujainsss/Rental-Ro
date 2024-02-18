import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import WaterCan from "./Components/Watercan";
import OtherRO from "./Components/OtherRO";
import BrandRO from "./Components/BrandRO";

const imageStyle = {
  height: "100%",
  width: "100%",
};
const headDivStyle = {};
const MobileView = () => (
  <Carousel autoplay>
    <div>
      <WaterCan />
    </div>
    <div>
      <BrandRO />
    </div>
    <div>
      <OtherRO />
    </div>
  </Carousel>
);
export default MobileView;
