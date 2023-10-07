import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import BackgroudImage from "../assets/images/bg/01.jpg";
import Footer from "../component/Footer";
import {
  lowRiseBuilding,
  bunglow,
  farmHouse,
  gardens,
  highRiseBuilding,
  openPlotting,
  partyPlot,
  playArea,
  rowHouse,
  gym,
  swimmingPool,
} from "../constants/serviceImages";
import { Link as Link2, useParams } from "react-router-dom";

import ProfileDetailContainer from "../component/profile-detail";
import { MEMBERS } from "../constants/members";
import Services from "./our-service";
const ServiceListing = () => {
  const params = useParams();

  const [detail, setDetail] = useState([]);
  const [title, setTitle] = useState("Founder");

  useEffect(() => {
    if (params.id === "1") {
      setTitle("Open Plotting");
    } else if (params.id === "2") {
      setTitle("Residential");
    } else if (params.id === "5") {
      setTitle("Commerical");
    } else if (params.id === "3") {
      setTitle("Industrial");
    } else if (params.id === "4") {
      setTitle("Land Developing");
    }
  }, []);

  const getMemberDetail = () => {
    const MemberDetail = MEMBERS?.find(
      (member) => member.id === Number(params.id)
    );

    setDetail([...detail, MemberDetail]);
  };

  useEffect(() => {
    getMemberDetail();
  }, [params]);

  return (
    <>
      <Navbar navClass="navbar-white" />
      <section
        style={{ backgroundImage: `url(${BackgroudImage})` }}
        className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              {/* Member Name */}
              {title}
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

      <section className="relative lg:py-24 py-16">
        <div className="container">
          {params.id === "1" ? (
            <Services title="Open Ploting" imageSet={openPlotting} />
          ) : params.id === "2" ? (
            <div className="flex flex-col gap-6 justify-center">
              <Services title="Farm House" imageSet={farmHouse} />
              <Services title="Banglows" imageSet={bunglow} />
              <Services title="Swimming Pools" imageSet={swimmingPool} />
              <Services title="Play Area" imageSet={playArea} />
            </div>
          ) : params.id === "3" ? (
            <Services title="Highrise Building" imageSet={highRiseBuilding} />
          ) : params.id === "4" ? (
            <Services title="Land Developing" imageSet={openPlotting} />
          ) : params.id === "5" ? (
            <div className="flex flex-col gap-6 justify-center">
              <Services title="Gardens" imageSet={gardens} />
              <Services title="Play Area" imageSet={playArea} />
              <Services title="Party Plot" imageSet={partyPlot} />
              <Services title="Swimming Pools" imageSet={swimmingPool} />
              <Services title="Gymnasium" imageSet={gym} />
            </div>
          ) : null}
        </div>
      </section>
      <Footer />
      {/* <Switcher /> */}
    </>
  );
};

export default ServiceListing;
