import { Button, Divider } from "antd";
import React from "react";

// import { Container } from './styles';

function Plan({ type, price }) {
  return (
    <div className="plan">
      <p className="planName">{type}</p>
      <div className="planBody">
        <p className="amount">₹ {price}*</p>
        <p className="monthly">Monthly</p>
        <div className="PlanFeatures">
          <p>Unlimited Water</p>
          <div className="divider">
            <Divider className="mainDivider" />
          </div>
          <p>Free Lifetime Maintenance</p>
          <div className="divider">
            <Divider className="mainDivider" />
          </div>
          <p>Free Delivery & Installation</p>
          <div className="divider">
            <Divider className="mainDivider" />
          </div>
          <Button>Subscribe</Button>
          <p className="refund">100% Refundable Deposit of ₹ 2000*</p>
        </div>
      </div>
    </div>
  );
}

export default Plan;
