import React from "react";
import { Link as Link2 } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import BackgroudImage from "../assets/images/bg/01.jpg";
import Switcher from "../component/Switcher";
import { LuArrowRight } from "../assets/icons/vander";

export default function Privacy() {
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
              Know More About Us
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
          <div className="md:flex justify-center">
            <div
              className="md:w-3/4 flex flex-col gap-4"
              style={{ rowGap: "16px" }}
            >
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                <h5 className="text-xl font-medium mb-4">Who We Are & Why:</h5>
                <p className="text-slate-400 italic border-x-4 border-green-600 rounded-ss-xl rounded-ee-xl mt-3 p-3 my-4">
                  "SVM Builders & Developers ,is achieving milestones under the
                  dynamic leadership of &nbsp;
                  <br />
                  <span className="font-bold">Mr. Babulal .L. Kumawat.</span> "
                </p>
                <div
                  className="w-full overflow-hidden mt-4"
                  style={{
                    height: "300px",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://demo.htmlcodex.com/1625/construction-company-website-template-free/img/service-3.jpg"
                    alt="construction"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-slate-400 mt-4">
                  “SVM Builders & Developers”, India’s leading real estate
                  developer was founded 16 years back in 2004 in Surat,Gujarat
                  and since then has been scaling new heights by each passing
                  day. The company has set new trends of architectural finesse
                  in the contemporary global scenario touching the horizons of
                  excellence. SVM has led to creation of various landmark
                  projects. The leaders and skilled professionals of the company
                  have worked towards launching out of the league projects and
                  take the real estate sector to the next level. The company is
                  developing projects in different verticals of real estate like
                  residential, townships, commercial, retail, office spaces and
                  hospitality.SVM has not only expanded in terms of number of
                  projects but in terms of the kind of engineering techniques,
                  innovative designing and architectural finesse it has brought
                  in to the Indian real estate industry.
                </p>
                <p className="text-slate-400 mt-2">
                  “SVM Builders & Developers”, as the name suggests, stand for
                  quality and punctuality. These are two words that are the
                  mantras for a successful venture in the construction &
                  Developing industry. SVM’s ventures have, since inception,
                  distinguished themselves through their qualitative ideas,
                  un-compromising standards and a rationalized cost to benefit.
                  The concrete values endorsed by the company have endured
                  through decades and as a result, many prestigious projects are
                  shining testaments to SVM’s unwavering commitment to
                  delivering what is promised. This is the reason that it has
                  won the hearts and the loyalty of its clients and the
                  appreciation of its visitors.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 shadow  dark:shadow-gray-700 rounded-md">
                <h5 className="text-xl font-medium mb-4">Why Choose SVM:</h5>
                <p className="text-slate-400 italic border-x-4 border-green-600 rounded-ss-xl rounded-ee-xl mt-3 p-3 my-4">
                  " Our Principles are Built on Providing Financial Security,
                  Customer Satisfaction and Delivering Promises."
                </p>
                <div
                  className="w-full overflow-hidden mt-4"
                  style={{
                    height: "300px",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://demo.htmlcodex.com/1625/construction-company-website-template-free/img/service-6.jpg"
                    alt="construction"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-slate-400 mt-4">
                  “SVM Builders & Developers” is a name that resonates among the
                  prominent residential and commercial developers in
                  Surat,Gujarat.Our ability to deliver on-time affordable and
                  luxurious housing projects in all over Gujarat has ensured a
                  continual interest from our customers.
                </p>
                <p className="text-slate-400 mt-4">
                  “SVM Builders & Developers” Have Maintained a Single Guiding
                  line of thought for all its operations & Gratifications of its
                  customers.To creat abodes that are crafted keeping the
                  customers aspirations at heart and their sentiments at the
                  core is its primary intent.It also aims to provide a valuable
                  exchange for the buyers (customers) investments.
                </p>
                <p className="text-slate-400 mt-4">
                  Our products are created and developed by the very same people
                  that use them. Our expertise in acquisition of
                  land,appointment of architects,designers,construction and
                  sales to after sales service has helped us to be counted among
                  Gujarats forerunners in real estate development.More than a
                  decade of deep & Qualified expertise in Real Estate and
                  Construction business allows us to provide innovative ideas &
                  solutions for our customers around the world in less than 24
                  hours.
                </p>
                <p className="text-slate-400 mt-4">
                  Our Company “SVM Builders & Developers” Opens an
                  inter-operable and accessible procedure with a vision to
                  provide affordable housing to everyone and provide gated
                  community like amenities even in smaller projects, the company
                  aims to foray into other cities for expanding its real estate
                  activities and will continue to strive to provide the best
                  value for money for its customers. “SVM Builders & Developers
                  ” has all the requirements for fulfilling all the needs of
                  every grade and class of people in financing and investing
                  interest.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 shadow  dark:shadow-gray-700 rounded-md">
                <h5 className="text-xl font-medium mb-4">
                  Our Missions & Vision:
                </h5>
                <p className="text-slate-400 italic border-x-4 border-green-600 rounded-ss-xl rounded-ee-xl mt-3 p-3 my-4">
                  " To build long-lasting relations with buyers in exchange for
                  their trust investments and emotions, To offer complete
                  fulfillment of aspiration and lend happiness to all the
                  customers”
                </p>
                <div
                  className="w-full overflow-hidden mt-4"
                  style={{
                    height: "300px",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://demo.htmlcodex.com/1625/construction-company-website-template-free/img/service-5.jpg"
                    alt="construction"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-slate-400 mt-4">
                  “SVM Builders & Builders” Aims “To Continuously expand the
                  role as a leading developers in developing and construction
                  industry by building long lasting relationships with our
                  clients and all concern on the foundations of Performance ,
                  Trust , and Confidence.” SVM also aims to win the hearts and
                  the loyalty of its clients and the appreciation of its
                  visitors
                </p>
                <p className="text-slate-400 mt-4">
                  “SVM Builders & Developers” Mission to develop quality
                  properties based on realistic values for its owners,
                  investment affiliates, as well as its joint venture partners.
                  Quality has always been our utmost priority. Our never
                  compromise attitude is seen in the world-class technology we
                  employ in construction and land developing for all our
                  project.As Presented in our Logo Tag Line , SVM Builders &
                  Developers(Building the future with relationships).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Terms & Conditions --> */}

      <Footer />
      <Switcher />
    </>
  );
}
