import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  //   minHeight: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const imageStyle = {
  height: "500px",
  width: "100%",
};
const Home = () => (
  <Carousel autoplay>
    <div>
      <img
        style={imageStyle}
        src="https://5.imimg.com/data5/SELLER/Default/2023/6/312693839/QW/TA/EK/11852137/ro-water-purifier-installation-services.jpg"
      />
    </div>
    <div>
      <img
        style={imageStyle}
        src="https://www.serviceshead.com/wp-content/uploads/2020/02/services-slider-1.jpg"
      />
    </div>
  </Carousel>
);
export default Home;
