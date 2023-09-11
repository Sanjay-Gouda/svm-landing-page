const Services = ({ title, imageSet }) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full ">
        <h3 className="mb-4 md:text-3xl text-center md:leading-normal text-2xl leading-normal font-semibold">
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
                className=" w-64 h-52  overflow-hidden"
                style={{ width: "250px" }}
              >
                <img
                  className="w-full h-full object-cover"
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
