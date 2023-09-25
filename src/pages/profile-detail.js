import React from "react";
import Navbar from "../component/Navbar";
import BackgroudImage from "../assets/images/bg/01.jpg";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";
import Founder from "../assets/images/client/founder.jpg";
import { Link as Link2 } from "react-router-dom";

import { Linkedin, Facebook, Twitter, Instagram, Youtube } from "react-feather";
const ProfileDetail = () => {
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
              Member Name
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
          <div
            className="p-6 bg-slate-200 dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md"
            style={{ backgroundColor: "#f1f5f9" }}
          >
            <div
              className="w-full flex gap-4 "
              style={{ columnGap: "24px", rowGap: "24px" }}
            >
              <div style={{ width: "30%" }} className="w-[30%]">
                <div
                  style={{
                    width: "300px",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={Founder}
                    alt="founder"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div style={{ width: "70%" }} className="flex flex-col gap-6">
                <div className="w-full flex justify-between">
                  <div className="flex flex-col gap-2">
                    {/* <h3 className="md:text-2xl text-2xl md:leading-normal leading-normal font-medium text-slate-400">
                      Mr.Babulal .L. Kumawat
                    </h3> */}
                    <h3 className=" md:text-2xl md:leading-normal text-2xl leading-normal font-semibold">
                      Mr.Babulal .L. Kumawat
                    </h3>
                    <p className="text-xl font-light   ">Founder / Chairmain</p>
                  </div>
                  <div>
                    <ul className="list-none  transition-all duration-500 ease-in-out">
                      <li className="inline ms-1">
                        <Link2
                          to="#"
                          className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white "
                        >
                          <Facebook className="h-4 w-4" />
                        </Link2>
                      </li>
                      <li className="inline ms-1">
                        <Link2
                          to="#"
                          className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"
                        >
                          <Instagram className="h-4 w-4" />
                        </Link2>
                      </li>
                      <li className="inline ms-1">
                        <Link2
                          to="#"
                          className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"
                        >
                          <Linkedin className="h-4 w-4" />
                        </Link2>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <p className=" text-slate-400">
                    “Mr.Babulal .L. Kumawat” has been on the Board of Directors
                    since the inception of SVM Builders & Developers. Born on
                    April 4, 1962,in Rajasthan, A Born businessman,he started
                    his real estate carrier as a construction contractor in
                    Muskat in 1976’s and returned to india in 1982’s and started
                    doing the same in different regions of the country,and in
                    1990’s came to surat and after having studied the complete
                    vision and development structure mission of the city he
                    decided now its time to move a step ahead and in 2004 he
                    placed a foundation of a Real estate company, “SVM Builders
                    & Developers” With a Mission to develop quality properties
                    based on realistic values for its owners, investment
                    affiliates, as well as its joint venture partners. With
                    almost four decades of experience in the real estate
                    industry, he brings on board his unique vision, management
                    practices and global approach to the function, expansion,
                    diversification and management of the organisation. As an
                    integral part of the key management, he manages a portfolio
                    spanning across Residential, Office Space, Retail,
                    Hospitality and Social Infrastructure projects. With passion
                    for design, he gets involved in every project and envisions
                    it as if he were to personally use it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
};

export default ProfileDetail;
