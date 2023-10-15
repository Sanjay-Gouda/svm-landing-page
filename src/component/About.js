import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import ModalVideo from "react-modal-video";

import Image from "../assets/images/Thumbnail/navratri.png";
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
                  data-id="fjm_sYfqM8M"
                  className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gyay-700  inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600"
                >
                  <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </Link2>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="lg:ms-4">
              <h4 className="mb-6 md:text-3xl text-2xl text-green-600 lg:leading-normal leading-normal font-semibold">
                <span>&#8220;</span> SVM Builders And Developers
                <br />
                Wishing Everyone Subha Navratri.<span>&#8221;</span>
              </h4>
              <p className=" max-w-xl">
                On the auspicious occasion of the Navratri, May the fragrance of
                incense bring peace and positivity in your life.Let this
                Navratri bring love, laughter, and peace in your life, celebrate
                this festival with devotion and happiness.
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
        videoId="fjm_sYfqM8M"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
