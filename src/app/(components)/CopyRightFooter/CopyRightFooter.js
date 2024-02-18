import React from "react";

function CopyRightFooter() {
  const footerStyle = {
    background: "black",
    color: "white",
    height: "50px",

    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  };
  return (
    <div style={footerStyle}>
      <p>
        Copyright © 2024 all Rights Reserved by PrimeWater | Powered by Prime
        Water
      </p>
    </div>
  );
}

export default CopyRightFooter;
