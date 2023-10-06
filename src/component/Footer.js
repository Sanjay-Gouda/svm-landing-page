import React from "react";
import { Link as Link2 } from "react-router-dom";
// import LogoLight from "../assets/images/logo-light.png";
import LogoDark from "../assets/images/d-logo.png";
// import LogoDark from "../assets/images/svm-w-logo.png";
// import LogoLight from "../assets/images/svm-head-logo.png";
import {
  MapPin,
  Mail,
  Phone,
  Dribbble,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ShoppingCart,
} from "react-feather";
import {
  HiOutlineEnvelope,
  BsPencil,
  MdKeyboardArrowRight,
  BiLogoBehance,
} from "../assets/icons/vander";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-900 dark:bg-slate-800 mt-10">
        <div className="container">
          <div className="grid grid-cols-1 py-16 ">
            {/* <div className="py-16"> */}
            {/* <!-- Subscribe --> */}
            {/* <div className="relative w-full">
                <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden">
                  <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="ltr:md:text-left rtl:md:text-right text-center z-1">
                      <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">
                        Subscribe to Newsletter!
                      </h3>
                      <p className="text-slate-400 max-w-xl mx-auto">
                        Subscribe to get latest updates and information.
                      </p>
                    </div>

                    <div className="subcribe-form z-1">
                      <form className="relative max-w-lg md:ms-auto">
                        <input
                          type="email"
                          id="subcribe"
                          name="email"
                          className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
                          placeholder="Enter your email :"
                        />
                        <button
                          type="submit"
                          className="btn bg-green-600 hover:bg-green-700 text-white rounded-full"
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="absolute -top-5 -start-5">
                    <HiOutlineEnvelope className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45" />
                  </div>

                  <div className="absolute -bottom-5 -end-5">
                    <BsPencil className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90" />
                  </div>
                </div>
              </div> */}
            {/* <!-- Subscribe --> */}
            {/* </div> */}
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] ">
              <div className="lg:col-span-4 md:col-span-12">
                <Link2 to="#" className="text-[22px] focus:outline-none">
                  <div style={{ width: "160px" }}>
                    <img src={LogoDark} alt="" />
                  </div>
                </Link2>
                {/* <p className="mt-4 text-gray-300">
                  "We Build Your <span className="text-green-600">Dreams</span>,
                  To Make Your <span className="text-green-600">Dreams</span>{" "}
                  Come True"
                </p> */}
              </div>

              <div className="lg:col-span-2 md:col-span-4">
                <h5 className="tracking-[1px] text-gray-100 font-semibold">
                  Company
                </h5>
                <ul className="list-none footer-list mt-6">
                  <li>
                    <Link2
                      to="/aboutus"
                      className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                    >
                      <MdKeyboardArrowRight className="me-1 text-xl" /> About us
                    </Link2>
                  </li>
                  <li className="mt-[10px]">
                    <Link2
                      to="/our-services"
                      className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                    >
                      <MdKeyboardArrowRight className="me-1 text-xl" /> Our
                      Services
                    </Link2>
                  </li>
                  <li className="mt-[10px]">
                    <Link2
                      to="/contact"
                      className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                    >
                      <MdKeyboardArrowRight className="me-1 text-xl" /> Contact
                      Us
                    </Link2>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 md:col-span-4">
                <h5 className="tracking-[1px] text-gray-100 font-semibold">
                  Company Address
                </h5>
                <div className="flex mt-6">
                  <MapPin className="w-5 h-5 text-green-600 me-3"></MapPin>
                  <div className="">
                    <h6 className="text-gray-300 mb-2">
                      F-27, Sidhi Vinayak Residency,
                      <br /> Near yes bank, Station road,
                      <br />
                      Sachin,Surat, Pin – 394230
                    </h6>
                    <a
                      href="https://www.google.com/maps/dir//SVM+Builders+%26+Developers+F-27+,Sidhivinayak+Residency,+Sachin+Char+Rasta+Station+Rd,+near+Auto,+Sachin+Surat,+Gujarat+394230/@21.0847634,72.8815967,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be0510b1f27ec87:0xb8d717b767ac8626!2m2!1d72.8815967!2d21.0847634?entry=ttu"
                      data-type="iframe"
                      className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox"
                    >
                      View on Google map
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 md:col-span-4">
                <h5 className="tracking-[1px] text-gray-100 font-semibold">
                  Contact Details
                </h5>
                <div className="flex mt-6">
                  <div className="flex">
                    <Mail className="w-5 h-5 text-green-600 me-3"></Mail>
                    <a
                      href="mailto:svmbuildersanddevelopers0326@gmail.com"
                      className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                    >
                      svmbuildersanddevelopers0326@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  <div className="flex">
                    <Phone className="w-5 h-5 text-green-600 me-3"></Phone>
                    <div className="">
                      <a
                        href="tel:0261-2393140"
                        className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                      >
                        0261-2393140
                      </a>
                    </div>
                  </div>
                  <div className="flex">
                    <Phone className="w-5 h-5 text-green-600 me-3"></Phone>
                    <div className="">
                      <a
                        href="tel:+91-9662320636"
                        className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                      >
                        +91-9662320636
                      </a>
                    </div>
                  </div>
                  <div className="flex">
                    <Phone className="w-5 h-5 text-green-600 me-3"></Phone>
                    <div className="">
                      <a
                        href="tel:+91-9909608140"
                        className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                      >
                        +91-9909608140
                      </a>
                    </div>
                  </div>
                  <div className="flex">
                    <Phone className="w-5 h-5 text-green-600 me-3"></Phone>
                    <div className="">
                      <a
                        href="tel:+91-9662320636"
                        className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                      >
                        +91-9712342563
                      </a>
                    </div>
                  </div>
                </div>
                {/* <ul className="list-none footer-list mt-6">
                      <li>
                        <Link2
                          to="/terms"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="me-1 text-xl" />{" "}
                          Terms of Services
                        </Link2>
                      </li>
                      <li className="mt-[10px]">
                        <Link2
                          to="/privacy"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="me-1 text-xl" />{" "}
                          Privacy Policy
                        </Link2>
                      </li>
                      <li className="mt-[10px]">
                        <Link2
                          to="/listing-one"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="me-1 text-xl" />{" "}
                          Listing
                        </Link2>
                      </li>
                      <li className="mt-[10px]">
                        <Link2
                          to="/contact"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="me-1 text-xl" />{" "}
                          Contact
                        </Link2>
                      </li>
                    </ul> */}
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
          <div className="container text-center">
            <div className="grid md:grid-cols-2 items-center gap-6">
              <div className="ltr:md:text-left rtl:md:text-right text-center">
                <p className="mb-0 text-gray-300">
                  ©{" "}
                  <script
                    type="text/javascript"
                    id="www-widgetapi-script"
                    src="https://www.youtube.com/s/player/d87d581f/www-widgetapi.vflset/www-widgetapi.js"
                  ></script>
                  <script
                    id="iframe_api"
                    src="https://www.youtube.com/iframe_api"
                  ></script>
                  {new Date().getFullYear()} SVM Builder & Developers All Rights
                  Reserved.
                </p>
              </div>

              <ul className="list-none ltr:md:text-right rtl:md:text-left text-center">
                <li className="inline ms-1">
                  <Link2
                    to="https://www.linkedin.com/in/svm-builders-and-developers-4a59481a0/?originalSubdomain=in"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Linkedin className="h-4 w-4"></Linkedin>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2
                    to="https://www.facebook.com/profile.php?id=100064151886759"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Facebook className="h-4 w-4"></Facebook>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2
                    to="https://www.instagram.com/svmbuildersanddevelopers0326/"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Instagram className="h-4 w-4"></Instagram>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2
                    to="https://twitter.com/BuildersSvm"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Twitter className="h-4 w-4"></Twitter>
                  </Link2>
                </li>
                <li className="inline ms-1">
                  <Link2
                    to="https://www.youtube.com/@svmbuildersdevelopers4478"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Youtube className="h-4 w-4" />
                  </Link2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
