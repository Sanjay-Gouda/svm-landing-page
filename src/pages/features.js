import React from "react";
import { Link as Link2 } from "react-router-dom";
import Navbar from "../component/Navbar";
import BackgroudImage from "../assets/images/bg/01.jpg";
import { Hexagon } from "react-feather";
import Client from "../component/Client";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";
import GetInTuch from "../component/Get-in-tuch";
import commercial from "../assets/images/property/commercial.jpg";
import lb1 from "../assets/images/property/our service/lowRiseBuilding/lb-1.png";
import lb2 from "../assets/images/property/our service/lowRiseBuilding/lb-2.jpg";
import lb3 from "../assets/images/property/our service/lowRiseBuilding/lb-3.png";
import lb4 from "../assets/images/property/our service/lowRiseBuilding/lb-4.png";
import lb5 from "../assets/images/property/our service/lowRiseBuilding/lb-5.png";
import lb6 from "../assets/images/property/our service/lowRiseBuilding/lb-6.png";
import lb7 from "../assets/images/property/our service/lowRiseBuilding/lb-7.png";
import lb8 from "../assets/images/property/our service/lowRiseBuilding/lb-8.png";
import lb9 from "../assets/images/property/our service/lowRiseBuilding/lb-9.png";
import lb10 from "../assets/images/property/our service/lowRiseBuilding/lb-10.png";

import hb1 from "../assets/images/property/our service/highRise/hb1.png";
import hb2 from "../assets/images/property/our service/highRise/hb2.png";
import hb3 from "../assets/images/property/our service/highRise/hb3.png";
import hb4 from "../assets/images/property/our service/highRise/hb4.png";
import hb5 from "../assets/images/property/our service/highRise/hb5.png";
import hb6 from "../assets/images/property/our service/highRise/hb6.png";
import hb7 from "../assets/images/property/our service/highRise/hb7.png";
import hb8 from "../assets/images/property/our service/highRise/hb8.png";
import hb9 from "../assets/images/property/our service/highRise/hb9.png";
import hb10 from "../assets/images/property/our service/highRise/hb10.png";

import rh1 from "../assets/images/property/our service/rowHouse/rh1.png";
import rh2 from "../assets/images/property/our service/rowHouse/rh2.png";
import rh3 from "../assets/images/property/our service/rowHouse/rh3.png";
import rh4 from "../assets/images/property/our service/rowHouse/rh4.png";
import rh5 from "../assets/images/property/our service/rowHouse/rh5.png";
import rh6 from "../assets/images/property/our service/rowHouse/rh6.png";
import rh7 from "../assets/images/property/our service/rowHouse/rh7.png";
import rh8 from "../assets/images/property/our service/rowHouse/rh8.png";
import rh9 from "../assets/images/property/our service/rowHouse/rh9.png";
import rh10 from "../assets/images/property/our service/rowHouse/rh10.png";

import Services from "./our-service";

const lowRiseBuilding = [
  {
    id: 1,
    image: lb1,
  },
  {
    id: 2,
    image: lb2,
  },
  {
    id: 3,
    image: lb3,
  },
  {
    id: 4,
    image: lb4,
  },
  {
    id: 5,
    image: lb5,
  },
  {
    id: 6,
    image: lb6,
  },
  {
    id: 7,
    image: lb7,
  },
  {
    id: 8,
    image: lb8,
  },
  {
    id: 9,
    image: lb9,
  },
  {
    id: 10,
    image: lb10,
  },
];
const highRiseBuilding = [
  {
    id: 1,
    image: hb1,
  },
  {
    id: 2,
    image: hb2,
  },
  {
    id: 3,
    image: hb3,
  },
  {
    id: 4,
    image: hb4,
  },
  {
    id: 5,
    image: hb5,
  },
  {
    id: 6,
    image: hb6,
  },
  {
    id: 7,
    image: hb7,
  },
  {
    id: 8,
    image: hb8,
  },
  {
    id: 9,
    image: hb9,
  },
  {
    id: 10,
    image: hb10,
  },
];
const rowHouse = [
  {
    id: 1,
    image: rh1,
  },
  {
    id: 2,
    image: rh2,
  },
  {
    id: 3,
    image: rh3,
  },
  {
    id: 4,
    image: rh4,
  },
  {
    id: 5,
    image: rh5,
  },
  {
    id: 6,
    image: rh6,
  },
  {
    id: 7,
    image: rh7,
  },
  {
    id: 8,
    image: rh8,
  },
  {
    id: 9,
    image: rh9,
  },
  {
    id: 10,
    image: rh10,
  },
];

export default function Features() {
  return (
    <>
      <Navbar navClass="navbar-white" />
      {/* <!-- Start Hero --> */}
      <section
        style={{ backgroundImage: `url(${BackgroudImage})` }}
        className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Our Service
            </h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      {/* <!-- End Hero --> */}

      <section className="relative lg:py-24 py-16">
        {/* <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[50px]">
            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="mdi mdi-cards-heart"></i>
                </div>
              </div>

              <div className="mt-6">
                <Link2
                  to="#"
                  className="text-xl hover:text-green-600 font-medium"
                >
                  Comfortable
                </Link2>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="mdi mdi-shield-sun"></i>
                </div>
              </div>

              <div className="mt-6">
                <Link2
                  to="#"
                  className="text-xl hover:text-green-600 font-medium"
                >
                  Extra Security
                </Link2>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="mdi mdi-star"></i>
                </div>
              </div>

              <div className="mt-6">
                <Link2
                  to="#"
                  className="text-xl hover:text-green-600 font-medium"
                >
                  Luxury
                </Link2>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="mdi mdi-currency-usd"></i>
                </div>
              </div>

              <div className="mt-6">
                <Link2
                  to="#"
                  className="text-xl hover:text-green-600 font-medium"
                >
                  Best Price
                </Link2>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="mdi mdi-map-marker"></i>
                </div>
              </div>

              <div className="mt-6">
                <Link2
                  to="#"
                  className="text-xl hover:text-green-600 font-medium"
                >
                  Stratagic Location
                </Link2>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="mdi mdi-chart-arc"></i>
                </div>
              </div>

              <div className="mt-6">
                <Link2
                  to="#"
                  className="text-xl hover:text-green-600 font-medium"
                >
                  Efficient
                </Link2>
                <p className="text-slate-400 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="flex flex-col gap-6">
            <Services title="Low Rise Buildings" imageSet={lowRiseBuilding} />
            <Services title="High Rise Buildings" imageSet={highRiseBuilding} />
            <Services title="Row Houses" imageSet={rowHouse} />
          </div>

          {/* <div className="flex flex-col gap-4 w-full ">
            <h3 className="mb-4 md:text-3xl text-center md:leading-normal text-2xl leading-normal font-semibold">
              Low Rise Buildings
            </h3>
            <div
              className="flex flex-wrap gap-4"
              style={{ columnGap: "16px", rowGap: "16px" }}
            >
              {lowRiseBuilding.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" w-64 h-52  overflow-hidden"
                    style={{ width: "250px" }}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={item.image}
                      alt="building"
                    />
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>

        <Client />

        <GetInTuch />
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
