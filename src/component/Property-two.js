import React from "react";
import TinySlider from "tiny-slider-react";
import properties from "./Properties/data";
import { Link, useNavigate } from "react-router-dom";
import Property1 from "../assets/images/property/1.jpg";
import { Link as Link2 } from "react-router-dom";

import {
  LiaCompressArrowsAltSolid,
  BiBed,
  LiaBathSolid,
} from "../assets/icons/vander";
import "tiny-slider/dist/tiny-slider.css";

import Running from "../assets/images/property/1.jpg";
import Upcoming from "../assets/images/property/2.jpg";
import Completed from "../assets/images/property/5.jpg";

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

export default function PropertyTwo() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Our Projects
          </h3>

          <p className="text-dark max-w-xl mx-auto capitalize">
            Explore our ongoing or completed projects, and know more about our
            unique features, locations, and potential for investment or
            purchase.
          </p>
        </div>

        <div
          className="flex w-full flex-wrap gap-4"
          style={{ columnGap: "16px" }}
        >
          <div
            style={{ width: "350px", cursor: "pointer" }}
            onClick={() => navigate("/grid/1")}
            // onClick={() => navigate("/comingsoon")}
            className="image-hover group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500"
          >
            <div
              className="transition-image"
              style={{ width: "350px", height: "236px" }}
            >
              <img
                src={Completed}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div className="p-4 hover:opacity-5 ">
              <Link2
                href="#"
                className="text-xl font-medium hover:text-green-600"
              >
                Completed
              </Link2>
            </div>
          </div>
          <div
            style={{ width: "350px", cursor: "pointer" }}
            onClick={() => navigate("/grid/2")}
            // onClick={() => navigate("/property-detail/1")}
            className="group  rounded-xl cursor-pointer  bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500"
          >
            <div className="transition-image">
              <img src={Running} alt="" />
            </div>

            <div className="p-4">
              <Link2
                href="#"
                className="text-xl font-medium hover:text-green-600"
              >
                Ongoing
              </Link2>
            </div>
          </div>
          <div
            style={{ width: "350px", cursor: "pointer" }}
            // onClick={() => navigate("/grid/:Upcoming")}
            onClick={() => navigate("/comingsoon")}
            className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500"
          >
            <div
              style={{ width: "350px", height: "236px" }}
              className="transition-image"
            >
              <img
                src={Upcoming}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div className="p-4">
              <Link2
                href="#"
                className="text-xl font-medium hover:text-green-600"
              >
                Upcoming
              </Link2>
            </div>
          </div>

          {/* <div className="" style={{ width: "350px", borderRadius: "20px" }}>
            <div style={{ width: "100%", height: "250px" }}>
              <img
                src={Property1}
                alt="card"
                className="w-full h-full object-contain"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
