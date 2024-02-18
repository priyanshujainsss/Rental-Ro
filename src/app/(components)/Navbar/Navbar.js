"use client";
import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Spin as Hamburger, Spin } from "hamburger-react";
// import { Container } from './styles';
import "./Navbar.css";
import MobileMenuItems from "./MobileMenuItems";
function Navbar() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>
      {isMobileMenu ? (
        <MobileMenuItems setIsMobileMenu={setIsMobileMenu} />
      ) : (
        <Row className="navbar">
          <Col xxl={14} xl={14} lg={8} md={22} sm={22} xs={21}>
            <div className="logoDiv">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
                }
              />
              Prime water
            </div>
          </Col>
          <Col xxl={10} xl={10} lg={16} md={0} sm={0} xs={0}>
            <div className="navbar_items">
              <p>Home</p>
              <p>Product</p>
              <p onClick={() => scrollToSection("plans")}>Plans</p>
              <p>How It Works</p>
              <p>About us</p>
              <Button>Contact us</Button>
            </div>
          </Col>
          <Col xxl={0} xl={0} lg={0} md={2} sm={2} xs={3}>
            <Spin onToggle={() => setIsMobileMenu(!isMobileMenu)} />
            {/* <MenuOutlined className='menuIcon' /> */}
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Navbar;
