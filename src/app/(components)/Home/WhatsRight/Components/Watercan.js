import Image from "next/image";
import React from "react";

// import { Container } from './styles';

function WaterCan() {
  return (
    <>
      <div className="HeadingImageDiv">
        <Image
          height={100}
          width={100}
          src={"/Homepageimages/water-can1.png"}
        />
        <p>Water can</p>
      </div>
      <div className="otheritems">
        <p>Questionable</p>
        <p>₹ 3 – 4</p>
        <p>NA</p>
        <p>₹ 500-600/month</p>
        <p>NA</p>
        <p>NA</p>
        <p>NA</p>
      </div>
    </>
  );
}

export default WaterCan;
