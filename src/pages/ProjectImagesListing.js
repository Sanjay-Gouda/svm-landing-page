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
  realestate,
  rowHouse,
  gym,
  swimmingPool,
} from "../constants/serviceImages";
import { Link as Link2, useNavigate, useParams } from "react-router-dom";

import ProfileDetailContainer from "../component/profile-detail";
import Services from "./our-service";

import {
  Customers,
  LandDevelopement,
  PlanElevation,
} from "../config/grid-data";
import { useQueryParams } from "../hook/useQuery";
const ProjectImageListing = () => {
  const params = useQueryParams();
  const paramType = params.get("type");
  console.log(paramType);

  const [detail, setDetail] = useState([]);
  const [title, setTitle] = useState("Founder");

  useEffect(() => {
    if (paramType === "plan-elevation") {
      setTitle("Plan & Elevation Details");
    } else if (paramType === "happy-customers") {
      setTitle("Happy Customers");
    } else {
      setTitle("Project Site Developement");
    }
  }, []);

  const navigate = useNavigate();

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
          {/* {params.id === "1" ? (
            <Services title="Open Ploting" imageSet={openPlotting} />
          ) : params.id === "2" ? (
            <div className="flex flex-col gap-6 justify-center">
              <Services title="Low Rise Buildings" imageSet={lowRiseBuilding} />
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
          ) : params.id === "6" ? (
            <Services title="Land Purchase & Sale" imageSet={realestate} />
          ) : null} */}

          <Services
            title={
              paramType === "happy-customers"
                ? "Happy Customer"
                : paramType === "plan-elevation"
                ? "Plan & Elevation Details"
                : "Project Site Developement"
            }
            imageSet={
              paramType === "happy-customers"
                ? Customers
                : paramType === "plan-elevation"
                ? PlanElevation
                : LandDevelopement
            }
          />

          <div className="w-full flex justify-center items-center">
            <button
              // onClick={formik.handleSubmit}
              onClick={() => navigate(-1)}
              className="btn bg-green-600 hover:bg-green-700 mt-6 text-white rounded-md"
            >
              Back To Projects
            </button>
          </div>
        </div>
      </section>
      <Footer />
      {/* <Switcher /> */}
    </>
  );
};

export default ProjectImageListing;
