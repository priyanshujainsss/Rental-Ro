import React from "react";
import "./MobileMenuItem.css";
import { CloseOutlined } from "@ant-design/icons";
import { Spin as Hamburger, Spin } from "hamburger-react";
import { Button } from "antd";

// import { Container } from './styles';

function MobileMenuItems({ setIsMobileMenu }) {
  function scrollToSection(sectionId) {
    setIsMobileMenu(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="mobileMenu">
      <div className="menuHeader">
        <div className="mobilelogodiv">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
            }
          />
          Prime water
        </div>
        <Spin toggled={true} onToggle={() => setIsMobileMenu(false)} />
        {/* <CloseOutlined /> */}
      </div>
      <div className="menuitems">
        <p>Home</p>
        <p>About us</p>
        <p onClick={() => scrollToSection("plans")}>Plans</p>
        <p>How It Works</p>
        <p>About us</p>
        <Button>Contact us</Button>
      </div>
    </div>
  );
}

export default MobileMenuItems;
