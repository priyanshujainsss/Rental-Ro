import React from "react";
import "./HomeCard.css";
import { MECHNAIC, SETIING } from "@/utils/images";

function HomeCard() {
  return (
    <div className="mainHomeCardDiv">
      <div className="homeCard">
        <div>
          {" "}
          <img src={MECHNAIC} />
          Assured Service in 24 Hours
        </div>
        <div>
          <img src={SETIING} />
          Assured 48 hours installation
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
