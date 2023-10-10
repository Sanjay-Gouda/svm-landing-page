import React from "react";
import { Link as Link2 } from "react-router-dom";

const ServiceCard = ({ title, image, onClick }) => {
  return (
    <>
      <div
        style={{ width: "350px" }}
        onClick={onClick}
        // onClick={() => navigate("/property-detail/1")}
        className="group rounded-xl cursor-pointer  bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500"
      >
        <div className="w-full transition-image " style={{ height: "250px" }}>
          <img src={image} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="p-4">
          <Link2 href="#" className="text-xl font-medium hover:text-green-600">
            {title}
          </Link2>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
