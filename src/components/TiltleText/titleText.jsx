import React from "react";

const PromoSection = () => {
  return (
    <div className="w-full h-[80vh] bg-[#1C1C1C] text-white flex items-center justify-between">
      {/* Left Section: Text Content */}
      <div className="pl-24 py-16 max-w-[40%] flex flex-col h-full">
        <h1 className="text-7xl font-bold mb-6 font-barlow">TITLE TEXT</h1>
        <p className="text-[1.5rem] mb-8 font-montserrat">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <button className="bg-primary-orange text-white py-3 text-lg rounded hover:bg-opacity-80 transition duration-300">
          GET STARTED
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="">
        <img
          src="/promo-logo.png"
          alt="Hexagonal Design"
          className="h-[80vh] object-fill"
        />
      </div>
    </div>
  );
};

export default PromoSection;
