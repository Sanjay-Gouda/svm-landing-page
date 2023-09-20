import React from "react";
import { Link as Link2 } from "react-router-dom";
import CountUp from "react-countup";

import Navbar from "../component/Navbar";
import BackgroudImage from "../assets/images/bg/01.jpg";
import About from "../component/About";
import Feature from "../component/Feature";
import ClientTwo from "../component/Client-two";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";
import { Facebook, Instagram, Linkedin } from "react-feather";

import Member1 from "../assets/images/client/04.jpg";
import Founder from "../assets/images/client/founder.jpg";
import MDirector from "../assets/images/client/MD.jpg";
import DDirector from "../assets/images/client/DD.jpg";
import HRD from "../assets/images/client/HRD.jpg";
import Member2 from "../assets/images/client/05.jpg";
import Member3 from "../assets/images/client/06.jpg";
import Member4 from "../assets/images/client/07.jpg";
import GetInTuch from "../component/Get-in-tuch";
import { LuArrowRight } from "react-icons/lu";

const aboutus = [
  {
    content: 'SVM Builders & Developers" founded in 2004 in Surat, Gujarat',
  },
  {
    content: "Leading real estate developer in India",
  },
  {
    content:
      "Emphasizes architectural finesse and sets trends in global scenario",
  },
  {
    content: "Creates landmark projects and scales new heights",
  },
  {
    content: "Focuses on innovation and excellence in real estate",
  },
  {
    content:
      "Works on various verticals: residential, townships, commercial, retail, office spaces, and hospitality",
  },
  {
    content: "Contributions to the real estate sector's advancement",
  },
  {
    content: "Brings architectural finesse to the Indian real estate industry",
  },
];

const whySvm = [
  {
    content:
      "SVM Builders & Developers maintain a guiding principle focused on customer satisfaction",
  },
  {
    content:
      "Their primary intent is to create homes that align with customer aspirations and sentiments",
  },
  {
    content: "They aim to offer value for buyers investments",
  },
  {
    content: `The company's products are developed by the same people who use them`,
  },
  {
    content: `Expertise in land acquisition, architecture, design, construction, and after-sales service`,
  },
  {
    content: `Offers innovative ideas and solutions globally within 24 hours`,
  },
  {
    content: `Aims to provide affordable housing and gated community amenities, even in smaller projects`,
  },
  {
    content: `Plans to expand real estate activities to other cities`,
  },
  {
    content: `Strives to provide value for money to customers.`,
  },
  {
    content: `Positioned to fulfill financing and investment needs for various people and classes.`,
  },
];

const mission = [
  {
    content: `Our aim to continuously expand their role as leading developers in the construction industry.`,
  },
  {
    content: `We emphasize building long-lasting relationships with clients and stakeholders.`,
  },
  {
    content: `SVM seeks to earn the hearts, loyalty, and appreciation of both clients and visitors.`,
  },
  {
    content: `Our mission is to develop quality properties with realistic values for owners and joint venture partners.`,
  },
  {
    content: `Quality is a top priority for SVM, reflected in their uncompromising approach.`,
  },
  {
    content: `They use world-class technology in construction and land development for all their projects.`,
  },
];

export default function Aboutus() {
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
              About Us
            </h3>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              SVM Builders & Developers, is achieving milestones under the
              dynamic leadership of,{" "}
              <span className="text-green-600"> Mr. Babulal .L. Kumawat.</span>
            </p>
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

      <div
        className="flex flex-col justify-center items-center w-full "
        style={{ paddingTop: "6rem" }}
      >
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Who we are & Why ?
        </h3>

        <ul className="list-unstyled text-slate-400 mt-4 w-[60%]">
          {aboutus?.map((cont, ind) => {
            return (
              <li className="flex mt-2 items-center text-xl" key={ind}>
                <LuArrowRight className="text-green-600  align-middle me-2" />
                {cont?.content}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="flex flex-col justify-center items-center w-full "
        style={{ paddingTop: "6rem" }}
      >
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Why Choose SVM ?
        </h3>

        <ul className="list-unstyled text-slate-400 mt-4 w-1/2">
          {whySvm?.map((cont, ind) => {
            return (
              <li className="flex mt-2 items-center text-xl" key={ind}>
                <LuArrowRight className="text-green-600  align-middle me-2" />
                {cont?.content}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center w-full py-24">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Our Mission & Vision
        </h3>

        <ul className="list-unstyled text-slate-400 mt-4 w-[60%]">
          {mission?.map((cont, ind) => {
            return (
              <li className="flex mt-2 items-center text-xl" key={ind}>
                <LuArrowRight className="text-green-600  align-middle me-2" />
                {cont?.content}
              </li>
            );
          })}
        </ul>

        <div className="mt-6">
          <Link2
            to="/knowmore-aboutus"
            className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full flex items-center justify-center"
          >
            Know More About Us &nbsp;
            <LuArrowRight className="text-white  align-middle me-2" />
          </Link2>
        </div>
      </div>

      {/* <section className="relative md:pb-24 pb-16">
        <Feature />
      </section> */}
      {/* <!-- Start CTA --> */}
      <section
        style={{ backgroundImage: `url(${BackgroudImage})` }}
        className="relative py-24 bg-no-repeat bg-center bg-fixed bg-cover"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 md:text-left text-center justify-center">
            <div className="lg:col-start-2 lg:col-span-10">
              <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                <div className="counter-box text-center">
                  <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                    <CountUp
                      start={1010}
                      className="counter-value"
                      end={1548}
                      duration={2.75}
                    />
                    +
                  </h1>
                  <h5 className="counter-head text-white text-lg font-medium">
                    Properties Sell
                  </h5>
                </div>

                <div className="counter-box text-center">
                  <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                    <CountUp
                      start={2}
                      className="counter-value"
                      end={25}
                      duration={2.75}
                    />
                    +
                  </h1>
                  <h5 className="counter-head text-white text-lg font-medium">
                    Award Gained
                  </h5>
                </div>

                <div className="counter-box text-center">
                  <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                    <CountUp
                      start={0}
                      className="counter-value"
                      end={9}
                      duration={2.75}
                    />
                    +
                  </h1>
                  <h5 className="counter-head text-white text-lg font-medium">
                    Years Experience
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End CTA --> */}

      <section className="relative md:pb-24 pb-16">
        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Meet The Agent Team
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Introduce the dedicated team of real estate agents, highlighting
              their qualifications, specialties, and commitment to serving
              clients effectively.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <div className="lg:col-span-3 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                  <img src={Founder} className="" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                  <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                    <li className="inline ms-1">
                      <Link2
                        to="#"
                        className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"
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

                <div className="content mt-3">
                  <Link2
                    to="#"
                    className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out"
                  >
                    Mr. B.L. Kumawat
                  </Link2>
                  <p className="text-slate-400">Founder / Chairman</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            {/* <div className="lg:col-span-3 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                  <img src={Founder} className="" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                  <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                    <li className="inline ms-1">
                      <Link2
                        to="#"
                        className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"
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

                <div className="content mt-3">
                  <Link2
                    to="#"
                    className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out"
                  >
                    Jack John
                  </Link2>
                  <p className="text-slate-400">Designer</p>
                </div>
              </div>
            </div> */}

            <div className="lg:col-span-4 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                  <img src={MDirector} className="" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                  <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                    <li className="inline ms-1">
                      <Link2
                        to="#"
                        className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"
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

                <div className="content mt-3">
                  <Link2
                    to="#"
                    className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out"
                  >
                    Mr.Vikram B. Kumawat
                  </Link2>
                  <p className="text-slate-400">Managing Director</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                  <img src={DDirector} className="" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                  <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                    <li className="inline ms-1">
                      <Link2
                        to="#"
                        className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"
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

                <div className="content mt-3">
                  <Link2
                    to="#"
                    className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out"
                  >
                    Mr.Sanjay B. Kumawat
                  </Link2>
                  <p className="text-slate-400">
                    Operations & Development Director
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                  <img src={HRD} className="" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                  <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                    <li className="inline ms-1">
                      <Link2
                        to="#"
                        className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"
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

                <div className="content mt-3">
                  <Link2
                    to="#"
                    className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out"
                  >
                    Mr.Mahendra M Kumawat
                  </Link2>
                  <p className="text-slate-400">HRD & Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ClientTwo /> */}
        <GetInTuch />
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
