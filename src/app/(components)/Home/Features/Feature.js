"use client";
import React from "react";
import "./Feature.css";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { CHECK } from "@/utils/images";
// import { Container } from './styles';

function Features() {
  return (
    <div className="mainFeatureDiv">
      <div>
        <p>
          {" "}
          <img src={CHECK} /> Cost-Effective Solution
        </p>
        <p>
          <img src={CHECK} />
          Flexible Rental Options
        </p>
        <p>
          <img src={CHECK} />
          No Upfront Investment
        </p>
        <p>
          <img src={CHECK} />
          Maintenance Included
        </p>
        <p>
          <img src={CHECK} />
          Convenient Installation
        </p>
      </div>
      <div>
        <p>
          <img src={CHECK} />
          Technical Support
        </p>

        <p>
          <img src={CHECK} />
          Upgrade Options
        </p>
        <p>
          <img src={CHECK} />
          No Storage Hassles
        </p>
        <p>
          <img src={CHECK} />
          Environmental Benefits
        </p>
        <p>
          <img src={CHECK} />
          Access to High-Quality Water
        </p>
      </div>
    </div>
  );
}

export default Features;
