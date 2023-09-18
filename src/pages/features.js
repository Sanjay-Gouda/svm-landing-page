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

import fh1 from "../assets/images/property/our service/farmHouse/fh1.png";
import fh2 from "../assets/images/property/our service/farmHouse/fh2.png";
import fh3 from "../assets/images/property/our service/farmHouse/fh3.png";
import fh4 from "../assets/images/property/our service/farmHouse/fh4.png";
import fh5 from "../assets/images/property/our service/farmHouse/fh5.png";
import fh6 from "../assets/images/property/our service/farmHouse/fh6.png";
import fh7 from "../assets/images/property/our service/farmHouse/fh7.png";
import fh8 from "../assets/images/property/our service/farmHouse/fh8.png";

import bl1 from "../assets/images/property/our service/bunglows/bl1.png";
import bl2 from "../assets/images/property/our service/bunglows/bl2.png";
import bl3 from "../assets/images/property/our service/bunglows/bl3.png";
import bl4 from "../assets/images/property/our service/bunglows/bl4.png";
import bl5 from "../assets/images/property/our service/bunglows/bl5.png";
import bl6 from "../assets/images/property/our service/bunglows/bl6.png";
import bl7 from "../assets/images/property/our service/bunglows/bl7.png";
import bl8 from "../assets/images/property/our service/bunglows/bl8.png";
import bl9 from "../assets/images/property/our service/bunglows/bl9.png";
import bl10 from "../assets/images/property/our service/bunglows/bl10.png";

import dn1 from "../assets/images/property/our service/developed/dn1.png";
import dn2 from "../assets/images/property/our service/developed/dn2.png";
import dn3 from "../assets/images/property/our service/developed/dn3.png";
import dn4 from "../assets/images/property/our service/developed/dn4.png";
import dn5 from "../assets/images/property/our service/developed/dn5.png";
import dn6 from "../assets/images/property/our service/developed/dn6.png";
import dn7 from "../assets/images/property/our service/developed/dn7.png";
import dn8 from "../assets/images/property/our service/developed/dn8.png";

import g1 from "../assets/images/property/our service/gardens/g1.png";
import g2 from "../assets/images/property/our service/gardens/g2.png";
import g3 from "../assets/images/property/our service/gardens/g3.png";
import g4 from "../assets/images/property/our service/gardens/g4.png";
import g5 from "../assets/images/property/our service/gardens/g5.png";
import g6 from "../assets/images/property/our service/gardens/g6.png";
import g7 from "../assets/images/property/our service/gardens/g7.png";
import g8 from "../assets/images/property/our service/gardens/g8.png";
import g9 from "../assets/images/property/our service/gardens/g9.png";
import g10 from "../assets/images/property/our service/gardens/g10.png";

import pp1 from "../assets/images/property/our service/partyPlot/pp1.png";
import pp2 from "../assets/images/property/our service/partyPlot/pp2.png";
import pp3 from "../assets/images/property/our service/partyPlot/pp3.png";
import pp4 from "../assets/images/property/our service/partyPlot/pp4.png";
import pp5 from "../assets/images/property/our service/partyPlot/pp5.png";
import pp6 from "../assets/images/property/our service/partyPlot/pp6.png";
import pp7 from "../assets/images/property/our service/partyPlot/pp7.png";
import pp8 from "../assets/images/property/our service/partyPlot/pp8.png";
import pp9 from "../assets/images/property/our service/partyPlot/pp9.png";
import pp10 from "../assets/images/property/our service/partyPlot/pp10.png";

import pg1 from "../assets/images/property/our service/playArea/pg1.png";
import pg2 from "../assets/images/property/our service/playArea/pg2.png";
import pg3 from "../assets/images/property/our service/playArea/pg3.png";
import pg4 from "../assets/images/property/our service/playArea/pg4.png";
import pg5 from "../assets/images/property/our service/playArea/pg5.png";
import pg6 from "../assets/images/property/our service/playArea/pg6.png";
import pg7 from "../assets/images/property/our service/playArea/pg7.png";
import pg8 from "../assets/images/property/our service/playArea/pg8.png";
import pg9 from "../assets/images/property/our service/playArea/pg9.png";
import pg10 from "../assets/images/property/our service/playArea/pg10.png";

import gym1 from "../assets/images/property/our service/gym/gym1.png";
import gym2 from "../assets/images/property/our service/gym/gym2.png";
import gym3 from "../assets/images/property/our service/gym/gym3.png";
import gym4 from "../assets/images/property/our service/gym/gym4.png";
import gym5 from "../assets/images/property/our service/gym/gym5.png";
import gym6 from "../assets/images/property/our service/gym/gym6.png";
import gym7 from "../assets/images/property/our service/gym/gym7.png";
import gym8 from "../assets/images/property/our service/gym/gym8.png";

import sp1 from "../assets/images/property/our service/swimingPool/sp1.png";
import sp2 from "../assets/images/property/our service/swimingPool/sp2.png";
import sp3 from "../assets/images/property/our service/swimingPool/sp3.png";
import sp4 from "../assets/images/property/our service/swimingPool/sp4.png";
import sp5 from "../assets/images/property/our service/swimingPool/sp5.png";
import sp6 from "../assets/images/property/our service/swimingPool/sp6.png";
import sp7 from "../assets/images/property/our service/swimingPool/sp7.png";
import sp8 from "../assets/images/property/our service/swimingPool/sp8.png";
import sp9 from "../assets/images/property/our service/swimingPool/sp9.png";
import sp10 from "../assets/images/property/our service/swimingPool/sp10.png";

import Services from "./our-service";

const gym = [
  {
    id: 1,
    image: gym1,
  },
  {
    id: 2,
    image: gym2,
  },
  {
    id: 3,
    image: gym3,
  },
  {
    id: 4,
    image: gym4,
  },
  {
    id: 5,
    image: gym5,
  },
  {
    id: 6,
    image: gym6,
  },
  {
    id: 7,
    image: gym7,
  },
  {
    id: 8,
    image: gym8,
  },
];

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
const farmHouse = [
  {
    id: 1,
    image: fh1,
  },
  {
    id: 2,
    image: fh2,
  },
  {
    id: 3,
    image: fh3,
  },
  {
    id: 4,
    image: fh4,
  },
  {
    id: 5,
    image: fh5,
  },
  {
    id: 6,
    image: fh6,
  },
  {
    id: 7,
    image: fh7,
  },
  {
    id: 8,
    image: fh8,
  },
];

const bunglow = [
  {
    id: 1,
    image: bl1,
  },
  {
    id: 2,
    image: bl2,
  },
  {
    id: 3,
    image: bl3,
  },
  {
    id: 4,
    image: bl4,
  },
  {
    id: 5,
    image: bl5,
  },
  {
    id: 6,
    image: bl6,
  },
  {
    id: 7,
    image: bl7,
  },
  {
    id: 8,
    image: bl8,
  },
  {
    id: 9,
    image: bl9,
  },
  {
    id: 10,
    image: bl10,
  },
];
const openPlotting = [
  {
    id: 1,
    image: dn1,
  },
  {
    id: 2,
    image: dn2,
  },
  {
    id: 3,
    image: dn3,
  },
  {
    id: 4,
    image: dn4,
  },
  {
    id: 5,
    image: dn5,
  },
  {
    id: 6,
    image: dn6,
  },
  {
    id: 7,
    image: dn7,
  },
  {
    id: 8,
    image: dn8,
  },
];

const gardens = [
  {
    id: 1,
    image: g1,
  },
  {
    id: 2,
    image: g2,
  },
  {
    id: 3,
    image: g3,
  },
  {
    id: 4,
    image: g4,
  },
  {
    id: 5,
    image: g5,
  },
  {
    id: 6,
    image: g6,
  },
  {
    id: 7,
    image: g7,
  },
  {
    id: 8,
    image: g8,
  },
  {
    id: 9,
    image: g9,
  },
  {
    id: 10,
    image: g10,
  },
];
const partyPlot = [
  {
    id: 1,
    image: pp1,
  },
  {
    id: 2,
    image: pp2,
  },
  {
    id: 3,
    image: pp3,
  },
  {
    id: 4,
    image: pp4,
  },
  {
    id: 5,
    image: pp5,
  },
  {
    id: 6,
    image: pp6,
  },
  {
    id: 7,
    image: pp7,
  },
  {
    id: 8,
    image: pp8,
  },
  {
    id: 9,
    image: pp9,
  },
  {
    id: 10,
    image: pp10,
  },
];
const playArea = [
  {
    id: 1,
    image: pg1,
  },
  {
    id: 2,
    image: pg2,
  },
  {
    id: 3,
    image: pg3,
  },
  {
    id: 4,
    image: pg4,
  },
  {
    id: 5,
    image: pg5,
  },
  {
    id: 6,
    image: pg6,
  },
  {
    id: 7,
    image: pg7,
  },
  {
    id: 8,
    image: pg8,
  },
  {
    id: 9,
    image: pg9,
  },
  {
    id: 10,
    image: pg10,
  },
];
const swimmingPool = [
  {
    id: 1,
    image: sp1,
  },
  {
    id: 2,
    image: sp2,
  },
  {
    id: 3,
    image: sp3,
  },
  {
    id: 4,
    image: sp4,
  },
  {
    id: 5,
    image: sp5,
  },
  {
    id: 6,
    image: sp6,
  },
  {
    id: 7,
    image: sp7,
  },
  {
    id: 8,
    image: sp8,
  },
  {
    id: 9,
    image: sp9,
  },
  {
    id: 10,
    image: sp10,
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
        <div className="container">
          <div className="flex flex-col gap-6">
            <Services title="Low Rise Buildings" imageSet={lowRiseBuilding} />
            <Services title="High Rise Buildings" imageSet={highRiseBuilding} />
            <Services title="Raw Houses" imageSet={rowHouse} />
            <Services title="Farm Houses" imageSet={farmHouse} />
            <Services title="Banglows" imageSet={bunglow} />
            <Services title="Open Plotting" imageSet={openPlotting} />
            <Services title="Gardens" imageSet={gardens} />
            <Services title="Party Plot" imageSet={partyPlot} />
            <Services title="Play Area" imageSet={playArea} />
            <Services title="Gymnasium" imageSet={gym} />
            <Services title="Swimming Pool" imageSet={swimmingPool} />
          </div>
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
