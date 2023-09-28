import React from "react";
import { Facebook, Instagram, Linkedin } from "react-feather";
import { Link as Link2 } from "react-router-dom";

const MemberList = ({
  name,
  profile,
  designation,
  handleRidrect,
  linkedin,
  ig,
  fb,
}) => {
  return (
    <>
      <div className="lg:col-span-4 md:col-span-6 cursor-pointer">
        <div className="group text-center">
          <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
            <img src={profile} className="" alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

            <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
              <li className="inline ms-1">
                <Link2
                  to={fb}
                  target="_blank"
                  className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"
                >
                  <Facebook className="h-4 w-4" />
                </Link2>
              </li>
              <li className="inline ms-1">
                <Link2
                  to={ig}
                  target="_blank"
                  className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"
                >
                  <Instagram className="h-4 w-4" />
                </Link2>
              </li>
              <li className="inline ms-1">
                <Link2
                  to={linkedin}
                  target="_blank"
                  className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </Link2>
              </li>
            </ul>
          </div>

          <div className="content mt-3">
            <p
              onClick={handleRidrect}
              className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out"
            >
              {name}
            </p>
            <p className="text-slate-400">{designation}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberList;
