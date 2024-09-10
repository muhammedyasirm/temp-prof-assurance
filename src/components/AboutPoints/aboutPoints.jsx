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
    <div className="bg-black text-white py-16 px-24 relative">
      {/* Green Line */}
      <div className="absolute top-0 left-[25%] w-[50%] h-1 flex bg-primary-green"></div>

      {/* Main Content */}
      <div className="flex justify-between">
        {/* Left Section */}
        <div className="flex flex-col w-[40%]">
          <div className="text-left mb-12 mt-4">
            <h1 className="text-6xl font-bold font-barlow uppercase tracking-wide">
              PROFIT ASSURANCE TECHNOLOGY
            </h1>
          </div>
          <div className="text-left mt-5">
            <h3 className="text-3xl font-semibold mb-4 font-montserrat">
              Enabling profitability for clients{" "}
              <span className="text-primary-green font-bold">since 2014</span>,
            </h3>
            <p className="text-lg leading-relaxed font-montserrat">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>
          </div>
        </div>

        {/* Right Section: Info Items */}
        <div className="flex flex-col justify-end gap-10 w-[42%]">
          {infoItems.map((item, index) => (
            <div key={index} className="flex gap-8">
              <img
                src={item.icon}
                alt="Icon"
                className="w-12 h-12 object-contain"
              />
              <p className="text-lg leading-relaxed flex-1 font-montserrat">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfitAssurance;
