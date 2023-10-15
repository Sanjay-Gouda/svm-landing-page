import React from "react";
import { Hexagon } from "react-feather";
import { RxHome, BsBriefcase, FiKey } from "../assets/icons/vander";

export default function Feature() {
  return (
    <>
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 text-dark md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            How We Work
          </h3>

          <p className="text-dark max-w-xl mx-auto capitalize">
            Real estate transactions involve property evaluation, negotiation,
            legal documentation, financing, and closing to transfer ownership.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
            <div className="relative overflow-hidden text-transparent -m-3">
              <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                <RxHome className="text-3xl" />
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-xl font-medium">Evaluate Property</h5>
              <p className="text-dark mt-3 capitalize">
                Assess Real Estate's value, Condition, and Potential for
                investment or Purchase, considering Location, Size, Amenities,
                and Market Trends.{" "}
              </p>
            </div>
          </div>

          <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
            <div className="relative overflow-hidden text-transparent -m-3">
              <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                <BsBriefcase className="text-3xl" />
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-xl font-medium">Meeting with Executive</h5>
              <p className="text-dark mt-3 capitalize">
                Scheduled discussion with the company's top executive to address
                strategic decisions, project updates, and key business matters
              </p>
            </div>
          </div>

          <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
            <div className="relative overflow-hidden text-transparent -m-3">
              <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                <FiKey className="text-3xl" />
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-xl font-medium">Close the Deal</h5>
              <p className="text-dark mt-3 capitalize">
                Finalize the real estate transaction by reaching an agreement
                between buyer and seller, ensuring legal compliance, and
                exchanging ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
