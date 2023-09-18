const Services = ({ title, imageSet }) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full ">
        <h3
          className="mb-4 md:text-3xl text-center   md:leading-normal text-2xl leading-normal font-semibold"
          // style={{ backgroundColor: "#AFDEC0" }}
        >
          {title}
        </h3>
        <div
          className="flex flex-wrap gap-4"
          style={{ columnGap: "16px", rowGap: "16px" }}
        >
          {imageSet.map((item) => {
            return (
              <div
                key={item.id}
                className=" w-64 h-52  overflow-hidden transition transform scale-1"
                style={{
                  width: "250px",
                  borderRadius: "20px",
                }}
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
