import React from "react";
import { Link as Link2, useNavigate } from "react-router-dom";
import ResidentialImage from "../assets/images/property/residential.jpg";
import LandImage from "../assets/images/property/land.jpg";
import CommercialImage from "../assets/images/property/commercial.jpg";
import InvestmentImage from "../assets/images/property/investment.jpg";
import IndustrialImage from "../assets/images/property/industrial.jpg";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import lb2 from "../assets/images/property/our service/lowRiseBuilding/lb-2.jpg";
import hb9 from "../assets/images/property/our service/highRise/hb9.png";
import rh8 from "../assets/images/property/our service/rowHouse/rh8.png";
import fh5 from "../assets/images/property/our service/farmHouse/fh5.png";
import bl1 from "../assets/images/property/our service/bunglows/bl1.png";
import dn4 from "../assets/images/property/our service/developed/dn4.png";
import pp10 from "../assets/images/property/our service/partyPlot/pp10.png";
import g10 from "../assets/images/property/our service/gardens/g10.png";

import sp5 from "../assets/images/property/our service/swimingPool/sp5.png";
import gym2 from "../assets/images/property/our service/gym/gym2.png";
import pg5 from "../assets/images/property/our service/playArea/pg5.png";

const settings = {
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: false,

  item: 5,
  // mode: "gallery",
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 5000,
  navPosition: "bottom",
  speed: 800,
  gutter: 14,
  responsive: {
    992: {
      items: 5,
    },

    767: {
      items: 2,
    },

    320: {
      items: 1,
    },
  },
};

const SERVICES = [
  {
    id: 1,
    imgURL: lb2,
    name: "Low Rise Building",
    // listing: 46,
  },
  {
    id: 2,
    imgURL: hb9,
    name: "High Rise Building",
    // listing: 124,
  },
  {
    id: 3,
    imgURL: rh8,
    name: "Raw Houses",
  },
  {
    id: 4,
    imgURL: fh5,
    name: "Farm Houses",
  },
  {
    id: 5,
    imgURL: bl1,
    name: "Banglows",
  },
  {
    id: 6,
    imgURL: dn4,
    name: "Open Plotting",
  },
  {
    id: 7,
    imgURL: g10,
    name: "Gardens",
  },
  {
    id: 8,
    imgURL: pp10,
    name: "Party Plot",
  },
  {
    id: 9,
    imgURL: pg5,
    name: "Play Area",
  },
  {
    id: 10,
    imgURL: gym2,
    name: "Gymnasium",
  },
  {
    id: 11,
    imgURL: sp5,
    name: "Swimming Pool",
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative md:pt-24 pt-16">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Our Services
            </h3>

            <p className="text-slate-400  max-w-xl mx-auto">
              Offering real estate services such as property buying, selling,
              leasing, and consulting, tailored to clients' needs, backed by
              expertise and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-8 relative">
            <TinySlider settings={settings}>
              {SERVICES?.map((item) => {
                return (
                  <div
                    className="tiny-slide"
                    key={item.id}
                    onClick={() => navigate("/our-services")}
                  >
                    <div className="group rounded-xl cursor-pointer bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                      <div
                        style={{ width: "213px", height: "146px" }}
                        className="sm:w-full"
                      >
                        <img
                          src={item.imgURL}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-4">
                        <Link2
                          href="#"
                          className="text-xl font-medium hover:text-green-600"
                        >
                          {item.name}
                        </Link2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TinySlider>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Category;
