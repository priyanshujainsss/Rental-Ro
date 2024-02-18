import Image from "next/image";
import React from "react";

// import { Container } from './styles';

function OtherRO() {
  return (
    <>
      <div className="HeadingImageDiv">
        <Image height={100} width={100} src={"/Homepageimages/other-ro.png"} />
        <p>Other Purifier </p>
      </div>
      <div className="otheritems">
        <p>High</p>
        <p>₹3 – ₹5</p>
        <p>NA</p>
        <p>₹15,000- ₹20,000</p>
        <p>Varying</p>
        <p>₹3000- ₹4000 annually</p>
        <p>₹3- ₹4/liter</p>
      </div>
    </>
  );
}

export default OtherRO;
