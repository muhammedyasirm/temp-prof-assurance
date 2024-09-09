import React from 'react';

const PromoSection = () => {
  return (
    <div className="w-full h-[80vh] bg-[#141414] text-white flex items-center justify-between">
      {/* Left Section: Text Content */}
      <div className="pl-24 max-w-lg">
        <h1 className="text-5xl font-bold mb-6">TITLE TEXT</h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices 
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        <button className="bg-primary-orange text-white px-6 py-3 text-lg rounded hover:bg-opacity-80 transition duration-300">
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
