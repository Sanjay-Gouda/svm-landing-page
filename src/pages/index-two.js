import React, { useState } from "react";
import Select from "react-select";
import { Link as Link2 } from "react-router-dom";
import ResidentialImage from "../assets/images/property/residential.jpg";
import LandImage from "../assets/images/property/land.jpg";
import CommercialImage from "../assets/images/property/commercial.jpg";
import InvestmentImage from "../assets/images/property/investment.jpg";
import IndustrialImage from "../assets/images/property/industrial.jpg";

import BackgroudImage from "../assets/images/bg/04.jpg";

import Navbar from "../component/Navbar";
import ClientTwo from "../component/Client-two";
import PropertyTwo from "../component/Property-two";
import Footer from "../component/Footer";
import About from "../component/About";
import Feature from "../component/Feature";
import Switcher from "../component/Switcher";
import {
  LuSearch,
  RxHome,
  AiOutlineDollarCircle,
} from "../assets/icons/vander";
import GetInTuch from "../component/Get-in-tuch";
import Category from "../component/Category";
import { TypeAnimation } from "react-type-animation";
import { Card } from "../component/Card";

const Houses = [
  { value: "AF", label: "Apartment" },
  { value: "AZ", label: " Offices" },
  { value: "BS", label: "Townhome" },
];
const minPrice = [
  { value: "1", label: "500" },
  { value: "2", label: "1000" },
  { value: "3", label: "2000" },
  { value: "4", label: "3000" },
  { value: "5", label: "4000" },
  { value: "5", label: "5000" },
  { value: "5", label: "6000" },
];
const maxPrice = [
  { value: "1", label: "500" },
  { value: "2", label: "1000" },
  { value: "3", label: "2000" },
  { value: "4", label: "3000" },
  { value: "5", label: "4000" },
  { value: "5", label: "5000" },
  { value: "5", label: "6000" },
];

export default function IndexTwo() {
  const [activeTabIndex, setActiveIndex] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  return (
    <>
      <Navbar navClass="navbar-white" />
      {/* Hero Start  */}
      <section className="relative table w-full h-screen py-36 lg:py-44 overflow-hidden zoom-image">
        <div
          style={{ backgroundImage: `url(${BackgroudImage})` }}
          className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"
        ></div>
        <div className="absolute inset-0 bg-black/70 z-2"></div>
        <div className="container z-3">
          <div className="grid grid-cols-1 mt-10">
            <div className="text-center">
              {/* <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                We Build Your Dreams, To Make Your Dreams Come True
              </h1> */}
              <h1 class="font-semibold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6">
                SVM Builder & Developers
                <br />
                <span className="text-green-600">"</span>Building
                <span className="text-green-600"> Future </span>With
                <span className="text-green-600"> Relationships</span>
                <span className="text-green-600">"</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Hero End */}

      <section className="relative md:pb-24 pb-16">
        <About />

        <Feature />

        <PropertyTwo />

        {/* <Card /> */}

        <Category />

        <ClientTwo />

        <GetInTuch />
      </section>
      <Footer />
      <Switcher />
      {/* <!-- End --> */}
    </>
  );
}
