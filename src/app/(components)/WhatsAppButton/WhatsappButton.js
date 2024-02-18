import { WHASTAPP } from "@/utils/images";
import Image from "next/image";
import React from "react";
import "./Whatsappbutton.css";
// import { Container } from './styles';

function WhatsAppButton() {
  return (
    <div className="Whatsappbutton">
      <a
        href="https://api.whatsapp.com/send?phone=971294193&text=Hello"
        target="_blank"
      >
        <Image width={60} height={60} src={WHASTAPP} />
      </a>
    </div>
  );
}

export default WhatsAppButton;
