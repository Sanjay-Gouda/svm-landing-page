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

          <p className="text-slate-400 max-w-xl mx-auto">
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
            style={{ width: "350px" }}
            onClick={() => navigate("/grid/:Running")}
            className="group rounded-xl cursor-pointer  bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500"
          >
            <img src="https://i.ibb.co/ZmtmLGK/a.jpg" alt="" />

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
            style={{ width: "350px" }}
            onClick={() => navigate("/grid/:Upcoming")}
            className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500"
          >
            <div style={{ width: "350px", height: "236px" }}>
              <img
                src="https://i.ibb.co/pzGysVS/b.jpg"
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
          <div
            style={{ width: "350px" }}
            onClick={() => navigate("/grid/:Completed")}
            className="image-hover group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500"
          >
            <div style={{ width: "350px", height: "236px" }}>
              {/* <img
                src="https://i.ibb.co/pzGysVS/b.jpg"
                className="w-full h-full object-contain"
                alt=""
              /> */}
              <img
                src="https://i.ibb.co/QMrtWT1/c.jpg"
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
