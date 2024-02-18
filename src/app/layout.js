import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "./(components)/Navbar/Navbar";
import CopyRightFooter from "./(components)/CopyRightFooter/CopyRightFooter";
import WhatsAppButton from "./(components)/WhatsAppButton/WhatsappButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rental RO",
  description: "Rental R.O. water purifier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AntdRegistry>{children}</AntdRegistry>
        <WhatsAppButton />
        <CopyRightFooter />
      </body>
    </html>
  );
}
