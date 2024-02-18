import Image from "next/image";
import React from "react";

// import { Container } from './styles';

function BrandRO() {
  return (
    <>
      <div className="PrimeWaterDiv">
        <Image height={100} width={100} src={"/Homepageimages/primeRO.png"} />
        <p>Prime Water</p>
      </div>
      <div className="primeWateritems">
        <p>High</p>
        <p>₹ 1*/liter</p>
        <p>Real Time</p>
        <p>Zero</p>
        <p>Zero</p>
        <p>Zero</p>
        <p>Schedule Maintenance </p>
      </div>
    </>
  );
}

export default BrandRO;
