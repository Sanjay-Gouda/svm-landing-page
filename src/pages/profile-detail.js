import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import BackgroudImage from "../assets/images/bg/01.jpg";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";
import Founder from "../assets/images/client/founder.jpg";
import { Link as Link2, useParams } from "react-router-dom";

import { Linkedin, Facebook, Twitter, Instagram, Youtube } from "react-feather";
import ProfileDetailContainer from "../component/profile-detail";
import { MEMBERS } from "../constants/members";
const ProfileDetail = () => {
  const params = useParams();

  const [detail, setDetail] = useState([]);
  const [title, setTitle] = useState("Founder");

  useEffect(() => {
    if (params.id === "1") {
      setTitle("Founder");
    } else if (params.id === "2") {
      setTitle("Managing Director");
    } else if (params.id === "3") {
      setTitle("Operations & Development Director");
    } else {
      setTitle("HRD & Marketing Director");
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
          {detail?.map((member) => (
            <ProfileDetailContainer
              name={member.name}
              profile={member.prfoilePicture}
              designation={member.designation}
              linkedin={member.linkedin}
              about={member.about}
              tagline={member.tagline}
              fb={member.fb}
              ig={member.ig}
            />
          ))}
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
};

export default ProfileDetail;
