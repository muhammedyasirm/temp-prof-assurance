import React from "react";

const ProfitAssurance = () => {
  const infoItems = [
    {
      icon: "/orange-cube.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum",
    },
    {
      icon: "/green-cube.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum",
    },
    {
      icon: "/blue-cube.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-8 relative">
      <div className="absolute top-0 left-[25%] w-[50%] h-1 flex  bg-primary-green"></div>{" "}
      <div className="flex gap-16">
        <div className="flex flex-col w-[40%]">
        <div className="text-left mb-12 mt-4">
          <h1 className="text-6xl font-bold uppercase tracking-wide">
            PROFIT ASSURANCE TECHNOLOGY
          </h1>
        </div>
        <div className="mx-auto text-left mt-5">
          <h3 className="text-3xl font-semibold mb-4">
            Enabling profitability for clients{" "}
            <span className="text-primary-green font-bold">since 2014</span>,
          </h3>
          <p className="text-lg leading-relaxed">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </p>
        </div>
      </div>
      {/* Info Items Section */}
      <div className="flex flex-col justify-end gap-16 w-[50%]">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 ">
            <img
              src={item.icon}
              alt="Icon"
              className="w-12 h-12 object-contain"
            />
            <p className="text-lg leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProfitAssurance;
