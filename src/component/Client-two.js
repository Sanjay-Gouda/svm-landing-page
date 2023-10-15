import React from "react";
import TinySlider from "tiny-slider-react";

import "tiny-slider/dist/tiny-slider.css";

import avatar1 from "../assets/images/client/01.jpg";
import avatar2 from "../assets/images/client/02.jpg";
import avatar3 from "../assets/images/client/03.jpg";
import avatar4 from "../assets/images/client/04.jpg";

const settings = {
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  speed: 400,
  gutter: 12,
  responsive: {
    992: {
      items: 3,
    },

    767: {
      items: 2,
    },

    320: {
      items: 1,
    },
  },
};

export default function ClientTwo() {
  const review = [
    {
      id: "1",
      profile:
        "https://lh3.googleusercontent.com/a/ACg8ocJiSZ5iK7UPQlYBRe94zy24l93VPieYHiQ-GYNbnYYd=w67-h67-p-rp-mo-br100",
      name: "Sanjaysingh Patil",
      // designation: "Manager",
      description:
        "Excellent and trust worthy work. Received all documents of NA plots systematically. I would be happily interested in further booking",
    },
    {
      id: "2",
      profile:
        "https://lh3.googleusercontent.com/a/ACg8ocIf7Y4JED2dX4Eu5bBGhIfldDM0o6cCncQjyMBRiovo=w67-h67-p-rp-mo-br100",
      name: "Mausam Limbu",
      designation: "Manager",
      description:
        "Best opportunity for investment great to have invested in such great return project.",
    },
    {
      id: "3",
      profile:
        "https://lh3.googleusercontent.com/a-/ALV-UjW2PANcfCNQEN7nfvL6ciMUnS0hpuUwfOK5GWLSbv2W-g=w67-h67-p-rp-mo-br100",
      name: "Pardeep Hardware And Sanitary Store",
      designation: "Manager",
      description:
        "Schemes for customers and I am the customer from Rajasthan I had in best in their open plotting projects sai residency 1 and 2 great project great location great company in great peoples love to invest",
    },
    {
      id: "4",
      profile:
        "https://lh3.googleusercontent.com/a/ACg8ocIqs_78YmqxMwoJkBVYF2fw_kWrxJH9MO7PWCUdgVck=w67-h67-p-rp-mo-br100",
      name: "Dharam kumar",
      designation: "Manager",
      description:
        "Best deal of my life every With SVM Builders and Developers Sai Residency best Project 📣😎",
    },
  ];

  return (
    <>
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            What Our Happy Clients Say!!!
          </h3>
        </div>

        <div className="flex justify-center relative mt-8">
          <div className="relative w-full">
            <div className="tiny-three-item">
              <TinySlider settings={settings}>
                {review.map((el, index) => (
                  <div className="tiny-slide" key={index}>
                    <div className="text-center mx-3">
                      <p className="text-lg text-dark italic">
                        " {el.description} "
                      </p>

                      <div className="text-center mt-5">
                        <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                          <li className="inline ms-1">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline ms-1">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline ms-1">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline ms-1">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline ms-1">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>

                        <img
                          src={el.profile}
                          className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                          alt=""
                        />
                        <h6 className="mt-2 fw-semibold">{el.name}</h6>
                        {/* <span className="text-slate-400 text-sm">
                          {el.designation}
                        </span> */}
                      </div>
                    </div>
                  </div>
                ))}
              </TinySlider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
