import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import properties from "../config/grid-data";
import withRouter from "../component/withrouter";
import Navbar from "../component/Navbar";
import Switcher from "../component/Switcher";
import Footer from "../component/Footer";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import {
  BsTelephone,
  LiaCompressArrowsAltSolid,
  BiBed,
  LiaBathSolid,
  AiOutlineCamera,
  LuArrowRight,
} from "../assets/icons/vander";

import Image1 from "../assets/images/property/single/p-1.png";
import Image2 from "../assets/images/property/single/p-2.png";
import Image3 from "../assets/images/property/single/p-3.png";
import Image4 from "../assets/images/property/single/p-4.png";
import Image5 from "../assets/images/property/single/p-5.png";

const images = [Image1, Image2, Image3, Image4, Image5];

const features = [
  {
    id: 1,
    feature: "N.A Title Clear Project",
  },
  {
    id: 2,
    feature: "100% Cheque Payment",
  },
  {
    id: 3,
    feature: "Damar Road",
  },
  {
    id: 4,
    feature: "Designing Main Gate",
  },
  {
    id: 5,
    feature: "Water Boaring",
  },
  {
    id: 6,
    feature: "High-way Touch Project.",
  },
  {
    id: 7,
    feature: " Small Invest Big Returns",
  },
];

function PropertyDetail(props) {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const property = properties.find(
    (user) => user.id === parseInt(props.params.id)
  );

  const handleCLick = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Navbar />
      {/* <!-- Hero Start --> */}
      <section className="relative md:pb-24 pb-16 mt-20">
        <div className="container-fluid">
          <div className="md:flex mt-4">
            <div className="lg:w-1/2 md:w-1/2 p-1">
              <div className="group relative overflow-hidden">
                <div className="w-full h-[750px]" style={{ height: "630px" }}>
                  <img
                    src={Image1}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                  <Link2
                    to="#"
                    onClick={() => handleCLick(0)}
                    className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                  >
                    <AiOutlineCamera className="text-lg" />
                  </Link2>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2">
              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <div className="w-full" style={{ height: "310px" }}>
                      <img
                        src={Image2}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => handleCLick(1)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <AiOutlineCamera className="text-lg" />
                      </Link2>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <div className="w-full" style={{ height: "310px" }}>
                      <img
                        src={Image3}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => handleCLick(1)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <AiOutlineCamera className="text-lg" />
                      </Link2>
                    </div>
                  </div>
                </div>

                {/* <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={Image3} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => handleCLick(2)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <AiOutlineCamera className="text-lg" />
                      </Link2>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <div className="w-full" style={{ height: "310px" }}>
                      <img
                        src={Image4}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => handleCLick(1)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <AiOutlineCamera className="text-lg" />
                      </Link2>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <div className="w-full" style={{ height: "310px" }}>
                      <img
                        src={Image5}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => handleCLick(1)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <AiOutlineCamera className="text-lg" />
                      </Link2>
                    </div>
                  </div>
                </div>

                {/* <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={Image3} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => handleCLick(2)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <AiOutlineCamera className="text-lg" />
                      </Link2>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={Image4} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => handleCLick(3)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <AiOutlineCamera className="text-lg" />
                      </Link2>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={Image5} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link2
                        to="#"
                        onClick={() => handleCLick(4)}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                      >
                        <AiOutlineCamera className="text-lg" />
                      </Link2>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="container md:mt-24 mt-16">
          <div className="md:flex">
            <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
              {/* Project Logo */}
              <div
                className="w-full flex gap-2 items-center"
                style={{ columnGap: "8px" }}
              >
                <div style={{ width: "200px", height: "100px" }}>
                  <img
                    src="http://svmdevelopers.in/wp-content/uploads/2018/06/Sai-residensy-e1528611858388.jpg"
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h4 className="text-2xl font-medium">Sai Residency-1</h4>
              </div>
              <ul className="py-6 flex items-center list-none">
                <li className="flex items-center lg:me-6 me-4">
                  <LiaCompressArrowsAltSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.square}sqf</span>
                </li>

                <li className="flex items-center lg:me-6 me-4">
                  <BiBed className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.beds} Beds</span>
                </li>

                <li className="flex items-center">
                  <LiaBathSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.baths} Baths</span>
                </li>
              </ul>

              <p className="text-slate-400">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
              <p className="text-slate-400 mt-4">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness.
              </p>
              <p className="text-slate-400 mt-4">
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure.
              </p>

              <div className="w-full leading-[0] border-0 mt-6">
                <iframe
                  title="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  className="w-full h-[500px]"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="flex flex-col lg:w-1/3 md:w-1/2">
              <div className="lg:w-full md:w-full md:p-4 px-3 mt-8 md:mt-0">
                <div className="sticky top-20">
                  <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                    <div className="p-6">
                      <h5 className="text-2xl font-medium">Scheme</h5>

                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-medium">
                          $ {property?.price}
                        </span>

                        <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                          For Sale
                        </span>
                      </div>

                      <ul className="list-none mt-4">
                        <li className="flex justify-between items-center">
                          <span className="text-slate-400 text-base">
                            Down Payment
                          </span>
                          <span className="font-medium text-base">
                            Rs.2100 /-
                          </span>
                        </li>

                        <li className="flex justify-between items-center mt-2">
                          <span className="text-slate-400 text-base">Emi</span>
                          <span className="font-medium text-base">
                            Rs.3000 /-
                          </span>
                        </li>

                        <li className="flex justify-between items-center mt-2">
                          <span className="text-slate-400 text-base">
                            Total Price
                          </span>
                          <span className="font-medium text-base">
                            RS.151000 /-
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6">
                      <h5 className="text-2xl font-medium">Features:</h5>

                      {features.map((feat) => {
                        return (
                          <>
                            <li
                              className="flex mt-2 items-center text-slate-400  text-base"
                              key={feat.id}
                            >
                              <LuArrowRight className="text-green-600  align-middle me-2" />
                              {feat.feature}
                            </li>
                          </>
                        );
                      })}
                    </div>
                    {/* 
                    <div className="flex">
                      <div className="p-1 w-1/2">
                        <Link2
                          to="#"
                          className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                        >
                          Book Now
                        </Link2>
                      </div>
                      <div className="p-1 w-1/2">
                        <Link2
                          to="#"
                          className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                        >
                          Offer Now
                        </Link2>
                      </div>
                    </div> */}
                  </div>
                  {/* 
                  <div className="mt-12 text-center">
                    <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">
                      Have Question ? Get in touch!
                    </h3>

                    <div className="mt-6">
                      <Link2
                        to="/contact"
                        className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"
                      >
                        <BsTelephone className="align-middle me-2" /> Contact us
                      </Link2>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="lg:w-full md:w-full md:p-4 px-3 mt-8 md:mt-0">
                <div className="sticky top-20">
                  <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                    <div className="p-6">
                      <h5 className="text-2xl font-medium">
                        Planning & Layout
                      </h5>

                      <div
                        className="w-[300px] h-[300px] cursor-pointer"
                        style={{ width: "300px", height: "300px" }}
                      >
                        <a
                          href="http://svmdevelopers.in/wp-content/uploads/2022/06/Booking-Plan.pdf"
                          target="_blank"
                        >
                          <img
                            className="w-full h-full object-contain"
                            src="http://svmdevelopers.in/wp-content/uploads/2022/06/plan-2.png"
                            alt="layout"
                          />
                        </a>
                      </div>

                      <h5 className="text-2xl font-medium">Location</h5>

                      <div className="w-full">
                        <iframe
                          title="iframe"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                          style={{ border: "0" }}
                          className="w-full h-[500px]"
                          allowFullScreen
                        ></iframe>
                      </div>

                      {/* <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-medium">
                          $ {property?.price}
                        </span>

                        <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                          For Sale
                        </span>
                      </div> */}
                      {/* 
                      <ul className="list-none mt-4">
                        <li className="flex justify-between items-center">
                          <span className="text-slate-400 text-sm">
                            Days on Hously
                          </span>
                          <span className="font-medium text-sm">124 Days</span>
                        </li>

                        <li className="flex justify-between items-center mt-2">
                          <span className="text-slate-400 text-sm">
                            Price per sq ft
                          </span>
                          <span className="font-medium text-sm">$ 186</span>
                        </li>

                        <li className="flex justify-between items-center mt-2">
                          <span className="text-slate-400 text-sm">
                            Monthly Payment (estimate)
                          </span>
                          <span className="font-medium text-sm">
                            $ 1497/Monthly
                          </span>
                        </li>
                      </ul> */}
                    </div>

                    {/* <div className="flex">
                        <div className="p-1 w-1/2">
                            <Link2
                            to="#"
                            className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                            >
                            Book Now
                            </Link2>
                        </div>
                        <div className="p-1 w-1/2">
                            <Link2
                            to="#"
                            className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                            >
                            Offer Now
                            </Link2>
                        </div>
                        </div> */}
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">
                      Have Question ? Get in touch!
                    </h3>

                    <div className="mt-6">
                      <Link2
                        to="/contact"
                        className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"
                      >
                        <BsTelephone className="align-middle me-2" /> Contact us
                      </Link2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setActiveIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      <Footer />
      <Switcher />
    </>
  );
}

export default withRouter(PropertyDetail);
