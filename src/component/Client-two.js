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
  loop: false,
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

      description:
        "Excellent and trust worthy work. Received all documents of NA plots systematically. I would be happily interested in further booking",
    },
    {
      id: "2",
      profile:
        "https://lh3.googleusercontent.com/a/ACg8ocIf7Y4JED2dX4Eu5bBGhIfldDM0o6cCncQjyMBRiovo=w67-h67-p-rp-mo-br100",
      name: "Mausam Limbu",

      description:
        "Best opportunity for investment great to have invested in such great return project.",
    },
    {
      id: "3",
      profile:
        "https://lh3.googleusercontent.com/a-/ALV-UjW2PANcfCNQEN7nfvL6ciMUnS0hpuUwfOK5GWLSbv2W-g=w67-h67-p-rp-mo-br100",
      name: "Pardeep Hardware And Sanitary Store",

      description:
        "Schemes for customers and I am the customer from Rajasthan I had in best in their open plotting projects sai residency 1 and 2 great project great location great company in great peoples love to invest",
    },
    {
      id: "4",
      profile:
        "https://lh3.googleusercontent.com/a/ACg8ocIqs_78YmqxMwoJkBVYF2fw_kWrxJH9MO7PWCUdgVck=w67-h67-p-rp-mo-br100",
      name: "Dharam kumar",
      description:
        "Best deal of my life every With SVM Builders and Developers Sai Residency best Project 📣😎",
    },
    {
      id: "5",
      profile:
        "https://lh3.googleusercontent.com/a/ACg8ocIqs_78YmqxMwoJkBVYF2fw_kWrxJH9MO7PWCUdgVck=w67-h67-p-rp-mo-br100",
      name: "Jenish Solanki",
      description:
        "Budget friendly schemes and projectw and very much interested investment done",
    },
    {
      id: "6",
      profile:
        "https://lh3.googleusercontent.com/a/ACg8ocJ9oePLHeUzRz-j-qlh5AuUwaFhIStyUCfM7C8gX7z2=w67-h67-p-rp-mo-br100",
      name: "Mahesh Verma",
      description: "Great offer and investment schemes for future returns",
    },
    {
      id: "7",
      profile:
        "https://lh3.googleusercontent.com/a-/ALV-UjUhg1STk2kB-MxUR_zfWrRH5zbCvkFntIa--EJF_824=w67-h67-p-rp-mo-br100",
      name: "Gurucharan Kumar",
      description: "Great experience with the investment and deal done",
    },
    {
      id: "8",
      profile:
        "https://lh3.googleusercontent.com/a/ACg8ocL7VomSf_rpG4bfaajrczmlcZD1JHGMG5F9ITCBYU6_=w67-h67-p-rp-mo-br100",
      name: "Raj Mishra",
      description: "1And only best developers in India in  my eyes 5 *****",
    },
    {
      id: "9",
      profile:
        "https://lh3.googleusercontent.com/a-/ALV-UjUAD13uzX9OgNiW5jnIwlHqhJplFi0cIIwvYgEiTUA0kZA=w67-h67-p-rp-mo-br100",
      name: "Shardaprasad Patel",
      description: `I invested my savings in there open plotting project name Sai Residency 8 months ago in Rs 1,17,ooo.
       ~ and after 8 my plot rate is Rs 2,11,ooo.
       🙏Thankyou SVM Builders & Developers for such a good returns of my savings🙏`,
    },
    {
      id: "10",
      profile:
        "https://lh3.googleusercontent.com/a/ACg8ocJF_LQqcyMeblfH2vuWOID2ObHZ-YK1DdvuYUf3iaPg=w67-h67-p-rp-mo-br100",
      name: "Sunil Maurya",
      description: ` Professionalism, Quality, Responsiveness, Value
      Had a good deal svm builders and developers.. Project Sai Residency 2`,
    },
    {
      id: "11",
      profile:
        "https://lh3.googleusercontent.com/a/ACg8ocI2tn_0c_oSjqVEFu9vwf_5QiROF2E6lEXknIXB06lj=w67-h67-p-rp-mo-br100",
      name: "Patel Razzak",
      description: ` I work for this company for last 10 years experience great owner great all promise on time SVM builders and developers tall like the name`,
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
