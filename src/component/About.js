import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import ModalVideo from "react-modal-video";

import Image from "../assets/images/youtube-thumbnail.png";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

export default function About() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container lg:mt-24 mt-16">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-5">
            <div className="relative">
              <img src={Image} className="rounded-xl shadow-md" alt="" />
              <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                <Link2
                  to="#"
                  onClick={() => setOpen(true)}
                  data-type="youtube"
                  data-id="i6PZQTJtuL8"
                  className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600"
                >
                  <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </Link2>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="lg:ms-4">
              <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">
                SVM Builders And Developers
                <br />
                Wishing Everyone Happy Onam.
              </h4>
              <p className="text-slate-400 max-w-xl">
                Onam is the most popular festival in the state of Kerala, India.
                Onam is the official state festival of Kerala. It is celebrated
                with joy and enthusiasm all over the state by Malayalees
                regardless of religion, caste or creed.
              </p>

              {/* <div className="mt-4">
                <Link2
                  to="#"
                  className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3"
                >
                  Learn More
                </Link2>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        isOpen={isOpen}
        channel="youtube"
        videoId="i6PZQTJtuL8"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
