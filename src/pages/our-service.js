const Services = ({ title, imageSet }) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full justify-center ">
        <h3
          className="mb-4 md:text-3xl text-center   md:leading-normal text-2xl leading-normal font-semibold"
          // style={{ backgroundColor: "#AFDEC0" }}
        >
          {title}
        </h3>
        <div
          className="flex flex-wrap gap-4 justify-center"
          style={{ columnGap: "16px", rowGap: "16px" }}
        >
          {imageSet.map((item) => {
            return (
              <div
                key={item.id}
                className="service-list-img w-64 h-52  overflow-hidden transition transform scale-1"
              >
                <img
                  className="w-full h-full object-contain hover:scale-110"
                  src={item.image}
                  alt="building"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
