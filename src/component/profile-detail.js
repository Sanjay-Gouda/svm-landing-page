import React from "react";
import Founder from "../assets/images/client/founder.jpg";

import { Link as Link2 } from "react-router-dom";

import { Linkedin, Facebook, Twitter, Instagram, Youtube } from "react-feather";

const ProfileDetailContainer = ({
  name,
  profile,
  designation,
  linkedin,
  about,
  tagline,
  fb,
  ig,
}) => {
  return (
    <>
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
                src={profile}
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
                  {name}
                </h3>
                <p className="text-xl font-light   ">{designation}</p>
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
              <p className=" text-slate-400 text-base">{about}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetailContainer;