import React from "react";
import logo from "../../assets/images/hsw.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Carousel } from "antd";
import one from '../../assets/images/WhatsApp Image 2023-06-18 at 11.02.26 AM.jpeg'
import two from '../../assets/images/WhatsApp Image 2023-06-18 at 11.03.01 AM.jpeg'
import three from '../../assets/images/collapsible.jpeg'
import four from '../../assets/images/WhatsApp Image 2023-06-18 at 11.03.02 AM.jpeg'

import ScrollDown from "./ScrollDown";
const contentStyle = {
  height: "260px",
  color: "#fff",
  lineHeight: "260px",
  // background: "#364d79",
  position: "relative",
};
export const Header = () => {
  return (
    <div className="h-full">
      <nav class="border-gray-200 bg-[#C20412] h-auto">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
          <a href="https://flowbite.com" class="flex items-center">
            <img src={logo} class="h-20 mr-3" alt="Flowbite Logo" />
            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hubli Steel Works</span> */}
          </a>
          <div class="flex items-center">
            <FaPhoneAlt className="text-lg m-2 text-white hover:underline" />
            <a
              href="tel:9916138314"
              class="mr-6 text-lg text-white hover:underline"
            >
              +91 9916138314
            </a>
          </div>
        </div>
      </nav>

      <nav className="mb-14">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-900 text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-900 text-white hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-900 text-white hover:underline">
                  Product
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-900 text-white hover:underline">
                  Works
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-900 text-white hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex flex-wrap">
        <div className="w-full sm:w-3/5 p-24 min-[320px]:p-12 max-[600px]:p-2">
          <h1 className="text-5xl font-bold min-[320px]:text-center max-[600px]:text-xl max-[600px]:p-0">
            Welcome to <span className="text-[#C20412]">Hubli Steel Works</span>
          </h1>
          <h2 className="text-sm text-center text-gray-300 max-[600px]:text-xs">
            Hema & Daneshwari Firms
          </h2>
        
          <p className="min-[320px]: max-[600px]:text-sm  pt-4">
            HSW is specialized in the manufacture of various types of rolling
            products. With our expertise and commitment to quality, we provide
            small-scale solutions tailored to meet the specific needs of our
            customers. Whether you require precision rolling for industrial
            applications or custom-designed rolling components, HSW is here to
            deliver.
          </p>
        </div>
        <div className="w-full sm:w-2/5 p-4">
          <Carousel autoplay className="min-[320px]:h-full max-[720px]:h-32">
            <div className="min-[320px]:h-full max-[720px]:h-32">
              <h3 style={contentStyle}>
                <img src={one} />
              </h3>
            </div>
            <div className="min-[320px]:h-full max-[720px]:h-32">
              <h3 style={contentStyle}> <img src={two} /></h3>
            </div>
            <div className="min-[320px]:h-full max-[720px]:h-32">
              <h3 style={contentStyle}> <img src={three} /></h3>
            </div>
            <div className="min-[320px]:h-full max-[720px]:h-32">
              <h3 style={contentStyle}> <img src={four} /></h3>
            </div>
          </Carousel>
        </div>
      </div>

      <ScrollDown />
    </div>
  );
};

export default Header;
