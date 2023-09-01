import React from "react";
import { Link as Link2 } from "react-router-dom";
import ResidentialImage from "../assets/images/property/residential.jpg";
import LandImage from "../assets/images/property/land.jpg";
import CommercialImage from "../assets/images/property/commercial.jpg";
import InvestmentImage from "../assets/images/property/investment.jpg";
import IndustrialImage from "../assets/images/property/industrial.jpg";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
const settings = {
  controls: true,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  controlsText: [
    '<i class="mdi mdi-chevron-left "></i>',
    '<i class="mdi mdi-chevron-right"></i>',
  ],
  nav: false,
  speed: 400,
  gutter: 0,
  responsive: {
    992: {
      items: 3,
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
    imgURL: ResidentialImage,
    name: "Residential",
    listing: 46,
  },
  {
    id: 2,
    imgURL: LandImage,
    name: "Land",
    listing: 124,
  },
  {
    id: 3,
    imgURL: CommercialImage,
    name: "Commercial",
    listing: 265,
  },
  {
    id: 4,
    imgURL: IndustrialImage,
    name: "Industrial",
    listing: 265,
  },
  {
    id: 5,
    imgURL: InvestmentImage,
    name: "Investment",
    listing: 12,
  },
];

const Category = () => {
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

          {/* <div className="tiny-home-slide-three"> */}
          {/* <TinySlider settings={settings}> */}
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-8 md:gap-[30px] gap-3">
            {SERVICES.map((item) => {
              return (
                <div className="tiny-slide" key={item.id}>
                  <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                    <img src={item.imgURL} alt="" />
                    <div className="p-4">
                      <Link2
                        href="#"
                        className="text-xl font-medium hover:text-green-600"
                      >
                        {item.name}
                      </Link2>
                      <p className="text-slate-400 text-sm mt-1">
                        {item.listing} Listings
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* </TinySlider> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Category;
